'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const SavedJobs: React.FC = () => {
  const router = useRouter();

  // Mock saved jobs
  const savedJobs = [
    { id: 1, title: 'Software Engineer', company: 'Tech Corp' },
    { id: 2, title: 'Product Manager', company: 'Innovate Ltd' },
  ];

  const handleNavigateToSaved = () => {
    router.push('/jobs/saved');
  };

  return (
     <div className="p-4 bg-white rounded-lg shadow-md mt-6">
      <h4 className="text-lg font-semibold mb-4 cursor-pointer hover:text-blue-600" onClick={handleNavigateToSaved}>
        My Saved Jobs
      </h4>
    </div>
  );
};

export default SavedJobs;
