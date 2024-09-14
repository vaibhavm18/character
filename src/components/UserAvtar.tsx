import React from 'react';

interface UserAvatarProps {
  username: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ username }) => {
  const initial = username.charAt(0).toUpperCase();
  
  return (
    <div className="flex items-center">
      <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold mr-2">
        {initial}
      </div>
      <span className="text-sm text-white">{username}</span>
    </div>
  );
};

export default UserAvatar;