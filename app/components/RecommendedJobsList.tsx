'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import JobItem, { Job } from './JobItem';

interface RecommendedJobsListProps {
  jobs: Job[];
}

const RecommendedJobsList: React.FC<RecommendedJobsListProps> = ({ jobs }) => {
  const router = useRouter();

  const handleJobSelect = (job: Job) => {
    router.push(`/jobs/${job.id}`);
  };

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <JobItem
          key={job.id}
          job={job}
          isSelectable={true}
          onSelect={handleJobSelect}
          showDetails={true}
        />
      ))}
    </div>
  );
};

export default RecommendedJobsList;
