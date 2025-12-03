'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition-colors"
      >
        <FontAwesomeIcon icon={faUser} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
          <a
            href="#profile"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-t-lg"
          >
            My Profile
          </a>
          <a
            href="#settings"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Settings
          </a>
          <button
            className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-b-lg border-t"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
