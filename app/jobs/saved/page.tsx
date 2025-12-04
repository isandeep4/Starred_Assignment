'use client';

import { useEffect, useState } from 'react';
import { Job } from '../../components/JobItem';

export default function SavedJobsPage() {
const [savedJobs, setSavedJobs] = useState<Job[]>([]);

  useEffect(() => {
    // Load saved jobs from localStorage
    const saved = localStorage.getItem('savedJobs');
    if (saved) {
      setSavedJobs(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Saved Jobs</h1>
      <div className="space-y-4">
        {savedJobs.map((job) => (
          <div key={job.id} className="border p-4 rounded shadow">
            <h3 className="font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.company} - {job.location}</p>
            <p>{job.description}</p>
            <p className="text-sm"><strong>Requirements:</strong> {job.requirements}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
