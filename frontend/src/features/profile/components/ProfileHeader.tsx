import React from 'react';
import { UserProfile } from '../types/profile.types';

export interface ProfileHeaderProps {
  profile?: UserProfile;
}

// IG-style header: Avatar, username, verified badge, friends count, trip count, options (...)
export const ProfileHeader: React.FC<ProfileHeaderProps> = () => {
  return null;
};
