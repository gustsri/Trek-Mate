import React from 'react';

export interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterClick?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = () => {
  return null;
};
