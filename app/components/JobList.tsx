import React from 'react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string;
}

interface JobListProps {
  jobs: Job[];
  selectedJob: Job | null;
  onJobSelect: (job: Job) => void;
}

const JobList: React.FC<JobListProps> = ({ jobs, selectedJob, onJobSelect }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Job List</h2>
      <ul>
        {jobs.map((job) => (
          <li
            key={job.id}
            className={`p-4 rounded shadow hover:shadow-md cursor-pointer transition ${
              selectedJob?.id === job.id ? 'bg-gray-200 border-l' : 'hover:bg-gray-100'
            }`}
            onClick={() => onJobSelect(job)}
          >
            <h3 className="font-semibold">{job.title}</h3>
            <p className="text-sm text-gray-600">{job.company} - {job.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
