import { create } from "zustand";
import { persist } from "zustand/middleware";

interface RecentSearchesState {
  searches: string[];
  addSearch: (keyword: string) => void;
  removeSearch: (keyword: string) => void;
  clearSearches: () => void;
}

export const useRecentSearchesStore = create<RecentSearchesState>()(
  persist(
    (set, get) => ({
      searches: [],
      addSearch: (keyword) => {
        const current = get().searches;
        const updated = [keyword, ...current.filter((k) => k !== keyword)].slice(0, 5); // keep last 5
        set({ searches: updated });
      },
      removeSearch: (keyword) => {
        const current = get().searches;
        const updated = current.filter((k) => k !== keyword);
        set({ searches: updated });
      },
      clearSearches: () => set({ searches: [] }),
    }),
    { name: "recent-searches" }
  )
);
