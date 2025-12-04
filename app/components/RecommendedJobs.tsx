import React from 'react';
import RecommendedJobsList from './RecommendedJobsList';

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

async function fetchRecommendedJobs(): Promise<Job[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_JOBS_API_BASE_URL;
    const endpoint = process.env.NEXT_PUBLIC_JOBS_API_JOBS_ENDPOINT;
    const response = await fetch(`${baseUrl}${endpoint}?page=1`);
    if (!response.ok) {
      throw new Error('Failed to fetch jobs');
    }
    const data = await response.json();
    return data.data.map((job: ApiJob) => ({
      id: job.id,
      title: job.job_title,
      company: job.company,
      description: job.description,
    }));
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
}

const RecommendedJobs: React.FC = async () => {
  const allJobs = await fetchRecommendedJobs();
  const jobs = allJobs.slice(0, 3); // Show only first 3 jobs

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">Recommended Jobs</h2>
      <RecommendedJobsList jobs={jobs} />
      <div className="mt-4 text-center">
        <a
          href="/jobs"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Show All Jobs
        </a>
      </div>
    </div>
  );
};

export default RecommendedJobs;
