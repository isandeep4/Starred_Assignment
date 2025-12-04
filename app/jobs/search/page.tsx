'use client';

import { useState, useEffect, use } from 'react';
import { useSearchParams } from 'next/navigation';
import JobList from '../../components/JobList';
import JobDetails from '../../components/JobDetails';

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

export default function SearchPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (query) {
        setLoading(true);
         const response = await fetch('/api/jobs/search', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              keyword: query.trim()
            }),
          });
          const data = response.ok ? await response.json().then(res => res.data) : []
        setJobs(data);
        setSelectedJob(data.length > 0 ? data[0] : null);
        setLoading(false);
      } else {
        setSelectedJob(null);
        setLoading(false);
        setJobs([]);
      }
    };
    fetchSearchResults();
  }, [query]);

  return (
    <div className="flex h-screen">
      {
        loading ? (
          <div className="flex-1 flex items-center justify-center">
            <p>Loading search results...</p>
          </div>
        ) : jobs.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p>No jobs found for "{query}"</p>
          </div>
        ) : 
        (<>
          <div className="w-1/2 border-r-1 border-gray-200 flex flex-col">
            <div className="flex-1 overflow-y-auto">
              <JobList jobs={jobs} selectedJob={selectedJob} onJobSelect={setSelectedJob} />
            </div>
          </div>
          <div className="w-1/2">
            <JobDetails job={selectedJob} />
          </div>
        </>)
      }
    </div>
  );
}
