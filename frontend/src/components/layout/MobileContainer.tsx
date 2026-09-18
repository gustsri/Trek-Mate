import React from 'react';

export interface MobileContainerProps {
  children?: React.ReactNode;
  className?: string;
}

// Simulates a centered mobile device frame (e.g., iPhone screen wrapper) for responsive mobile app design
export const MobileContainer: React.FC<MobileContainerProps> = ({ children }) => {
  return <>{children}</>;
};
