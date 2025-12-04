'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import JobList from '../components/JobList';
import JobDetails from '../components/JobDetails';

interface ApiJob {
  id: number;
  job_title: string;
  company: string;
  description: string;
}

interface Job {
  id: number;
  title: string;
  company: string;
  location?: string;
  description: string;
  requirements?: string;
}

interface ApiResponse {
  pagination: {
    currentPage: number;
    firstPage: number;
    lastPage: number;
  };
  data: ApiJob[];
}

export default function JobsPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const {data, isLoading} = useQuery({
    queryKey: ['jobs', currentPage],
    queryFn: async () => {
      const response = await fetch(`/api/jobs/page/${currentPage}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
    staleTime: 1000 * 60 * 5,
    placeholderData: (previousData) => previousData,
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 border-r-1 border-gray-200 flex flex-col">
        <div className="flex-1 overflow-y-auto">
          {isLoading ? (
            <div className="p-4">Loading jobs...</div>
          ) : (
            <>
              <JobList jobs={data.data} selectedJob={selectedJob} onJobSelect={setSelectedJob} />
              <div className="p-4 flex justify-center space-x-2">
                {Array.from({ length: data.total }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-1 rounded ${
                      currentPage === page
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="w-1/2">
        <JobDetails job={selectedJob} />
      </div>
    </div>
  );
}
