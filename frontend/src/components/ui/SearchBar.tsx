import React from 'react';

export interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterClick?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'Search', value = '', onChange, onFilterClick }) => {
  return (
    <div className="relative">
      <input aria-label={placeholder} className="h-12 w-full rounded-full bg-[#f2eedf] px-5 pr-14 text-[#18241b] outline-none placeholder:text-[#879084] focus:ring-2 focus:ring-[#b9d1b7]" onChange={onChange} placeholder={placeholder} value={value} />
      {onFilterClick && <button aria-label="Open filters" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-[#879084]" onClick={onFilterClick} type="button">☷</button>}
    </div>
  );
};
