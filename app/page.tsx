
import UserProfile from './components/UserProfile';
import SavedJobs from './components/SavedJobs';
import RecommendedJobs from './components/RecommendedJobs';
import RecentSearches from './components/RecentSearches';

export default function Page() {
  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-100 p-4 border-r-1 border-gray-200">
        <UserProfile />
        <SavedJobs />
      </div>
      <div className="w-3/4 overflow-y-auto p-6">
        <RecommendedJobs />
        <RecentSearches />
      </div>
    </div>
  );
}
