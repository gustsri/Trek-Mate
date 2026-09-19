'use client';

import React from 'react';
import { Icon, type IconName } from '../ui/Icon';
import { LogoLockup } from '../brand/LogoLockup';

export interface ScreenHeaderProps {
  title: string;
  icon?: IconName;
  searchValue?: string;
  searchPlaceholder?: string;
  onSearchChange?: (value: string) => void;
  showFilter?: boolean;
  onFilterClick?: () => void;
  backHref?: string;
}

export function ScreenHeader({
  title,
  icon,
  searchValue,
  searchPlaceholder = 'Search',
  onSearchChange,
  showFilter = true,
  onFilterClick,
  backHref,
}: ScreenHeaderProps) {
  return (
    <header className="relative z-10 rounded-b-[2rem] bg-[#f2eedf] px-5 pb-5 pt-4 text-[#18241b] shadow-[0_16px_35px_rgba(0,0,0,0.18)] lg:mx-6 lg:mt-6 lg:rounded-[2rem] lg:px-8 lg:pb-7 lg:pt-7">
      <div className="flex items-center justify-between text-sm font-medium lg:hidden">
        <span>19:02</span>
        <div aria-label="Device status" className="flex items-center gap-1.5">
          <span aria-hidden="true" className="flex items-end gap-0.5">
            <i className="h-2 w-1 rounded-sm bg-[#18241b]" />
            <i className="h-3 w-1 rounded-sm bg-[#18241b]" />
            <i className="h-4 w-1 rounded-sm bg-[#18241b]" />
            <i className="h-5 w-1 rounded-sm bg-[#18241b]" />
          </span>
          <span className="text-lg leading-none">⌁</span>
          <span className="h-3.5 w-7 rounded-[4px] border-2 border-[#18241b] p-0.5"><span className="block h-full w-full rounded-[1px] bg-[#18241b]" /></span>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between lg:mt-0">
        <div className="flex items-center gap-3">
          {backHref ? (
            <a aria-label="Go back" className="grid h-10 w-10 place-items-center rounded-full bg-[#dfe0d4]" href={backHref}>
              <Icon name="arrow-left" size={24} />
            </a>
          ) : (
            <LogoLockup compact />
          )}
          <h1 className="text-[2rem] font-semibold tracking-tight lg:text-4xl">{title}</h1>
        </div>
        <span aria-label="Notifications" className="rounded-full p-2" role="img">
          <Icon name="bell" size={30} strokeWidth={1.8} />
        </span>
      </div>

      {onSearchChange && (
        <div className="relative mt-4 lg:max-w-2xl">
          <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#879084]" name="search" size={21} />
          <input
            aria-label={searchPlaceholder}
            className="h-12 w-full rounded-full bg-white/55 px-12 pr-24 text-base outline-none placeholder:text-[#879084] focus:bg-white/80 focus:ring-2 focus:ring-[#2d5a3c]/30"
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder={searchPlaceholder}
            value={searchValue ?? ''}
          />
          {searchValue && (
            <button aria-label="Clear search" className="absolute right-12 top-1/2 -translate-y-1/2 rounded-full p-2 text-[#879084]" onClick={() => onSearchChange('')} type="button">
              <Icon name="x" size={18} />
            </button>
          )}
          {showFilter && (
            <button aria-label="Open filters" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-[#879084]" onClick={onFilterClick} type="button">
              <Icon name="filter" size={22} />
            </button>
          )}
        </div>
      )}

      {icon && !onSearchChange && <Icon className="absolute left-6 top-8 text-[#18241b]" name={icon} size={38} />}
    </header>
  );
}
