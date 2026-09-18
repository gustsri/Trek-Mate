import React from 'react';

export interface ChatSearchBarProps {
  value?: string;
  onChange?: (val: string) => void;
  placeholder?: string;
}

export const ChatSearchBar: React.FC<ChatSearchBarProps> = () => {
  return null;
};
