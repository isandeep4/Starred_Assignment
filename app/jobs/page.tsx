'use client';

import UserProfile from '../components/UserProfile';
import SavedJobs from '../components/SavedJobs';
import RecommendedJobs from '../components/RecommendedJobs';

export default function JobsPage() {
  const recommendedJobs = [
    { id: 1, title: 'Software Engineer', company: 'Tech Corp', location: 'Remote', description: 'We are looking for a skilled software engineer to join our team...', requirements: 'Experience with React, Node.js, etc.' },
    { id: 2, title: 'Product Manager', company: 'Innovate Ltd', location: 'San Francisco', description: 'Lead product development initiatives...', requirements: 'MBA, 5+ years experience.' },
    { id: 3, title: 'Designer', company: 'Creative Inc', location: 'New York', description: 'Design user interfaces and experiences...', requirements: 'Figma, Adobe Suite.' },
  ];

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-100 p-4 border-r">
        <UserProfile />
        <SavedJobs />
      </div>
      <div className="w-3/4 overflow-y-auto">
        <RecommendedJobs jobs={recommendedJobs} />
      </div>
    </div>
  );
}
