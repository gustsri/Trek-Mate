import React from 'react';

export interface BadgeProps {
  children?: React.ReactNode;
  variant?: 'count' | 'verified' | 'status';
}

export const Badge: React.FC<BadgeProps> = ({ children }) => {
  return <span className="inline-flex min-h-6 items-center rounded-full bg-[#f2eedf] px-2.5 text-xs font-semibold text-[#18241b]">{children}</span>;
};
