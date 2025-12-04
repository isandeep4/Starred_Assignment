
import React from 'react';
import JobDetails from '../../components/JobDetails';

interface PageProps {
  params: Promise<{ id: string }>;
}
async function fetchJobById(id: string) {
  const baseUrl = process.env.NEXT_PUBLIC_JOBS_API_BASE_URL;
  const endpoint = process.env.NEXT_PUBLIC_JOBS_API_JOBS_ENDPOINT;
  const response = await fetch(`${baseUrl}${endpoint}/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch job details');
  }
  const data = await response.json();
  const job = {
    id: data.id,
    title: data.job_title,
    company: data.company,
    description: data.description,
  };

  return job;
}

const JobPage: React.FC<PageProps> = async ({ params }) => {
  const { id } = await params;
  const jobId = parseInt(id, 10);
  const job = await fetchJobById(jobId.toString());

  return (
    <div className="container mx-auto p-4">
      <JobDetails job={job} />
    </div>
  );
};

export default JobPage;
