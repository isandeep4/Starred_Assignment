'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Job {
  id: number;
  title: string;
  company: string;
  location?: string;
  description: string;
  requirements?: string;
}

const SavedJobs: React.FC = () => {
  const router = useRouter();
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);

  useEffect(() => {
    // Load saved jobs from localStorage
    const saved = localStorage.getItem('savedJobs');
    if (saved) {
      setSavedJobs(JSON.parse(saved));
    }
  }, []);

  const handleNavigateToSaved = () => {
    router.push('/jobs/saved');
  };

  const handleJobClick = (jobId: number) => {
    router.push(`/jobs/${jobId}`);
  };

  return (
     <div className="p-4 bg-white rounded-lg shadow-md mt-6">
      <h4 className="text-lg font-semibold mb-4 cursor-pointer hover:text-blue-600" onClick={handleNavigateToSaved}>
        My Saved Jobs ({savedJobs.length})
      </h4>
      {savedJobs.length > 0 ? (
        <div className="space-y-2">
          {savedJobs.slice(0, 3).map((job) => (
            <div
              key={job.id}
              className="p-3 bg-gray-50 rounded cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handleJobClick(job.id)}
            >
              <h5 className="font-medium text-sm">{job.title}</h5>
              <p className="text-xs text-gray-600">{job.company}</p>
            </div>
          ))}
          {savedJobs.length > 3 && (
            <p className="text-xs text-blue-600 cursor-pointer hover:text-blue-800" onClick={handleNavigateToSaved}>
              View all {savedJobs.length} saved jobs
            </p>
          )}
        </div>
      ) : (
        <p className="text-sm text-gray-500">No saved jobs yet</p>
      )}
    </div>
  );
};

export default SavedJobs;
