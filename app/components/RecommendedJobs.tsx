import React from 'react';
import { useRouter } from 'next/navigation';
import JobItem, { Job } from './JobItem';

interface RecommendedJobsProps {
  jobs: Job[];
}

const RecommendedJobs: React.FC<RecommendedJobsProps> = ({ jobs }) => {
  const router = useRouter();

  const handleJobSelect = (job: Job) => {
    router.push(`/jobs/${job.id}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Recommended Jobs</h2>
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
    </div>
  );
};

export default RecommendedJobs;
