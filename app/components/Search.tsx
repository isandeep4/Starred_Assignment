'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useRecentSearchesStore } from '../store/useRecentSearchesStore';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const {searches, addSearch} = useRecentSearchesStore();


  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Store recent search
       addSearch(searchQuery);
      // const recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
      // const updatedSearches = [searchQuery.trim(), ...recentSearches.filter((s: string) => s !== searchQuery.trim())].slice(0, 5);
      // localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));

      router.push(`/jobs/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1 max-w-md">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
         <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </form>
  );
}
