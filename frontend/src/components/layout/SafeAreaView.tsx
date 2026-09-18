import React from 'react';

export interface SafeAreaViewProps {
  children?: React.ReactNode;
}

export const SafeAreaView: React.FC<SafeAreaViewProps> = ({ children }) => {
  return <>{children}</>;
};
