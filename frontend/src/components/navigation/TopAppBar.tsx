import React from 'react';

export interface TopAppBarProps {
  title?: string;
  showMenu?: boolean;
  showNotification?: boolean;
  rightAction?: React.ReactNode;
}

export const TopAppBar: React.FC<TopAppBarProps> = () => {
  return null;
};
