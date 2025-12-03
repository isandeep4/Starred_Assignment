'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import JobList from '../../components/JobList';
import JobDetails from '../../components/JobDetails';

export default function SearchPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const allJobs = [
    { id: 1, title: 'Software Engineer', company: 'Tech Corp', location: 'Remote', description: 'We are looking for a skilled software engineer to join our team...', requirements: 'Experience with React, Node.js, etc.' },
    { id: 2, title: 'Product Manager', company: 'Innovate Ltd', location: 'San Francisco', description: 'Lead product development initiatives...', requirements: 'MBA, 5+ years experience.' },
    { id: 3, title: 'Designer', company: 'Creative Inc', location: 'New York', description: 'Design user interfaces and experiences...', requirements: 'Figma, Adobe Suite.' },
  ];

  const jobs = query ? allJobs.filter(job => job.title.toLowerCase().includes(query.toLowerCase())) : allJobs;

  return (
    <div className="flex h-screen">
      <div className="w-1/2 border-r-1 border-gray-200 flex flex-col">
        <div className="flex-1 overflow-y-auto">
          <JobList jobs={jobs} selectedJob={selectedJob} onJobSelect={setSelectedJob} />
        </div>
      </div>
      <div className="w-1/2">
        <JobDetails job={selectedJob} />
      </div>
    </div>
  );
}
