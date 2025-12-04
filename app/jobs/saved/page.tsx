'use client';

import { useEffect, useState } from 'react';
import JobItem, { Job } from '../../components/JobItem';
import { useSavedJobsStore } from '../../store/useSavedJobsStore';
import JobList from '../../components/JobList';

export default function SavedJobsPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const {savedJobs} = useSavedJobsStore();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Saved Jobs</h1>
      <div className="space-y-4">
        <JobList jobs={savedJobs} selectedJob={selectedJob} onJobSelect={setSelectedJob} navigateToJobDetails={true} />
      </div>
    </div>
  );
}
