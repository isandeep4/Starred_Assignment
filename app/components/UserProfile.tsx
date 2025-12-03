import React from 'react';

const UserProfile: React.FC = () => {
  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://via.placeholder.com/100',
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <img src={user.avatar} alt="Profile" className="w-16 h-16 rounded-full mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-center">{user.name}</h3>
      <p className="text-sm text-gray-600 text-center">{user.email}</p>
    </div>
  );
};

export default UserProfile;
