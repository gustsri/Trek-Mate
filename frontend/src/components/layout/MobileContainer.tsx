import React from 'react';

export interface MobileContainerProps {
  children?: React.ReactNode;
  className?: string;
}

// Simulates a centered mobile device frame (e.g., iPhone screen wrapper) for responsive mobile app design
export const MobileContainer: React.FC<MobileContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`mx-auto flex min-h-screen w-full flex-col overflow-hidden bg-[#0e1811] shadow-2xl ${className}`}>
      {children}
    </div>
  );
};
