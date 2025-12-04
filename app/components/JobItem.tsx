import React from 'react';

interface Job {
  id: number;
  title: string;
  company: string;
  location?: string;
  description: string;
  requirements?: string;
}

interface JobItemProps {
  job: Job;
  isSelectable?: boolean;
  onSelect?: (job: Job) => void;
  showDetails?: boolean;
  isSelected?: boolean;
}

const JobItem: React.FC<JobItemProps> = ({
  job,
  isSelectable = false,
  onSelect,
  showDetails = false,
  isSelected = false
}) => {
  const handleClick = () => {
    if (isSelectable && onSelect) {
      onSelect(job);
    }
  };

  const baseClasses = "p-4 rounded shadow hover:shadow-md transition";
  const selectableClasses = isSelectable ? "cursor-pointer" : "";
  const selectedClasses = isSelected ? "bg-gray-200 border-l" : "hover:bg-gray-100";
  const classes = `${baseClasses} ${selectableClasses} ${selectedClasses}`;

  return (
    <div className={classes} onClick={handleClick}>
      <h3 className="font-semibold">{job.title}</h3>
      <p className="text-gray-600">{job.company}</p>
    </div>
  );
};

export default JobItem;
export type { Job };
