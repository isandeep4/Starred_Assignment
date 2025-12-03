'use client';

import Search from './Search';
import ProfileIcon from './Profile';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">
            Job Search Dashboard
          </div>
          <Search />
          <ProfileIcon />
        </div>
      </nav>
    </header>
  );
}
