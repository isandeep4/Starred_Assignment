import React from 'react';
import JobItem, { Job } from './JobItem';

interface JobListProps {
  jobs: Job[];
  selectedJob: Job | null;
  onJobSelect: (job: Job) => void;
  navigateToJobDetails?: boolean;
}

const JobList: React.FC<JobListProps> = ({ jobs, selectedJob, onJobSelect, navigateToJobDetails }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Job List</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <JobItem
              job={job}
              isSelectable={true}
              onSelect={onJobSelect}
              showDetails={false}
              isSelected={selectedJob?.id === job.id}
              navigateToJobDetails={navigateToJobDetails}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
