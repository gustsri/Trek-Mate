import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glassmorphism?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};
