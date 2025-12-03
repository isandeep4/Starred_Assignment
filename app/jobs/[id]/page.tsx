import React from 'react';
import JobDetails from '../../components/JobDetails';

// Mock data - in a real app, this would come from an API or database
const mockJobs = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Tech Corp',
    location: 'San Francisco, CA',
    description: 'We are looking for a skilled software engineer to join our team.',
    requirements: 'Experience with React, Node.js, and TypeScript.'
  },
  {
    id: 2,
    title: 'Product Manager',
    company: 'Innovate Ltd',
    location: 'New York, NY',
    description: 'Lead product development initiatives.',
    requirements: '5+ years of product management experience.'
  },
  {
    id: 3,
    title: 'Designer',
    company: 'Creative Studio',
    location: 'Los Angeles, CA',
    description: 'Create stunning user interfaces.',
    requirements: 'Proficiency in Figma and Adobe Creative Suite.'
  }
];

interface PageProps {
  params: Promise<{ id: string }>;
}

const JobPage: React.FC<PageProps> = async ({ params }) => {
  const { id } = await params;
  const jobId = parseInt(id, 10);
  const job = mockJobs.find(j => j.id === jobId);

  return (
    <div className="container mx-auto p-4">
      <JobDetails job={job || null} />
    </div>
  );
};

export default JobPage;
