'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useRecentSearchesStore } from '../store/useRecentSearchesStore';

const RecentSearches: React.FC = () => {
  const router = useRouter();
   const { searches, removeSearch, clearSearches } = useRecentSearchesStore();

  const handleSearchClick = (query: string) => {
    router.push(`/jobs/search?q=${encodeURIComponent(query)}`);
  };

  if (searches.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <FontAwesomeIcon icon={faClock} className="text-gray-500" />
          Recent Searches
        </h2>
        <button
          onClick={() => clearSearches()}
          className="text-sm text-gray-500 hover:text-gray-700 underline transition-colors"
        >
          Clear all
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {searches.map((search, index) => (
          <div
            key={`${search}-${index}`}
            className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 hover:border-gray-300 transition-colors group"
            onClick={() => handleSearchClick(search)}
          >
            <span className="text-gray-700 truncate">{search}</span>
            <button
              onClick={(e) => {e.stopPropagation(); removeSearch(searches[index])}}
              className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-600 transition-opacity ml-2"
            >
              <FontAwesomeIcon icon={faTimes} size="sm" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;
