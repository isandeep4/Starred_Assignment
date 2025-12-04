import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Job } from "../components/JobItem";

interface SavedJobsState {
  savedJobs: Job[];
  addJob: (job: Job) => void;
  removeJob: (job: Job) => void;
  toggleJob: (job: Job) => void;
}

export const useSavedJobsStore = create<SavedJobsState>()(
  persist(
    (set) => ({
      savedJobs: [],
      addJob: (newJob) => set((state) => ({ savedJobs: [...state.savedJobs, newJob] })),
      removeJob: (removeJob) =>
        set((state) => ({ savedJobs: state.savedJobs.filter((job) => job.id !== removeJob.id) })),
      toggleJob: (toggleJob) =>
        set((state) =>
          state.savedJobs.map((job) => job.id).includes(toggleJob.id)
            ? { savedJobs: state.savedJobs.filter((job) => toggleJob.id !== job.id) }
            : { savedJobs: [...state.savedJobs, toggleJob] }
        ),
    }),
    {
      name: "saved-jobs",
    }
  )
);
