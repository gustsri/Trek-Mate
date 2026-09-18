import React from 'react';

export interface BadgeProps {
  children?: React.ReactNode;
  variant?: 'count' | 'verified' | 'status';
}

export const Badge: React.FC<BadgeProps> = ({ children }) => {
  return <span>{children}</span>;
};
