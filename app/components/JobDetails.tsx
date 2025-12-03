import React from 'react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string;
}

interface JobDetailsProps {
  job: Job | null;
}

const JobDetails: React.FC<JobDetailsProps> = ({ job }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Job Details</h2>
      {job ? (
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <p className="text-gray-600">{job.company} - {job.location}</p>
          <p>{job.description}</p>
          <p><strong>Requirements:</strong> {job.requirements}</p>
        </div>
      ) : (
        <p>Select a job to view details.</p>
      )}
    </div>
  );
};

export default JobDetails;
