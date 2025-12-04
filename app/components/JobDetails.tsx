'use client';

import React, { useState, useEffect } from 'react';

interface Job {
  id: number;
  title: string;
  company: string;
  location?: string;
  description: string;
  requirements?: string;
}

interface JobDetailsProps {
  job: Job | null;
}

const JobDetails: React.FC<JobDetailsProps> = ({ job }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);

  useEffect(() => {
    // Load saved jobs from localStorage
    const saved = localStorage.getItem('savedJobs');
    if (saved) {
      const parsedSavedJobs = JSON.parse(saved);
      setSavedJobs(parsedSavedJobs);
      if (job) {
        setIsSaved(parsedSavedJobs.some((savedJob: Job) => savedJob.id === job.id));
      }
    }
  }, [job]);

  const handleApply = () => {
    if (job) {
      // For now, just show an alert. In a real app, this would redirect to an application form
      alert(`Application submitted for: ${job.title} at ${job.company}`);
    }
  };

  const handleSave = () => {
    if (!job) return;

    let updatedSavedJobs = [...savedJobs];

    if (isSaved) {
      // Remove from saved jobs
      updatedSavedJobs = savedJobs.filter(savedJob => savedJob.id !== job.id);
      setIsSaved(false);
    } else {
      // Add to saved jobs
      updatedSavedJobs.push(job);
      setIsSaved(true);
    }

    setSavedJobs(updatedSavedJobs);
    localStorage.setItem('savedJobs', JSON.stringify(updatedSavedJobs));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Job Details</h2>
      {job ? (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <p className="text-gray-600 font-bold">{job.company}</p>
            {job.location && <p className="text-sm text-gray-500">{job.location}</p>}
          </div>

          <div>
            <h4 className="font-semibold mb-2">Description</h4>
            <p className="text-gray-700">{job.description}</p>
          </div>

          {job.requirements && (
            <div>
              <h4 className="font-semibold mb-2">Requirements</h4>
              <p className="text-gray-700">{job.requirements}</p>
            </div>
          )}

          <div className="flex gap-3 mt-6">
            <button
              onClick={handleApply}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              Apply Now
            </button>
            <button
              onClick={handleSave}
              className={`font-bold py-2 px-6 rounded-lg border-2 transition-colors ${
                isSaved
                  ? 'bg-green-600 hover:bg-green-700 text-white border-green-600'
                  : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-300 hover:border-gray-400'
              }`}
            >
              {isSaved ? 'Saved' : 'Save Job'}
            </button>
          </div>
        </div>
      ) : (
        <p>Select a job to view details.</p>
      )}
    </div>
  );
};

export default JobDetails;
