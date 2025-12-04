import React from 'react';

const UserProfile: React.FC = () => {
  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
      <h3 className="text-lg font-semibold text-center">{user.name}</h3>
      <p className="text-sm text-gray-600 text-center">{user.email}</p>
    </div>
  );
};

export default UserProfile;
