import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glassmorphism?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, glassmorphism = false, className = '', ...props }) => {
  return <div className={`rounded-[1.75rem] bg-[#142217] text-[#f2eedf] shadow-[0_14px_35px_rgba(0,0,0,0.2)] ${glassmorphism ? 'border border-white/10 bg-[#142217]/65 backdrop-blur-xl' : ''} ${className}`} {...props}>{children}</div>;
};
