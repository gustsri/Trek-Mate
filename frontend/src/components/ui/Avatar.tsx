import React from 'react';

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  hasBorder?: boolean;
}

export const Avatar: React.FC<AvatarProps> = () => {
  return null;
};
