'use client';

import { useState } from 'react';

export default function SavedJobsPage() {
  const [savedJobs] = useState([
    { id: 1, title: 'Software Engineer', company: 'Tech Corp', location: 'Remote', description: 'We are looking for a skilled software engineer...', requirements: 'React, Node.js' },
    { id: 2, title: 'Product Manager', company: 'Innovate Ltd', location: 'San Francisco', description: 'Lead product development...', requirements: 'MBA, experience' },
  ]);

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
