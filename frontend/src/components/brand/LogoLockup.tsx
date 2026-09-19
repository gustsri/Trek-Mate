import React from 'react';

export interface LogoLockupProps {
  inverse?: boolean;
  compact?: boolean;
  className?: string;
}

export function LogoLockup({ inverse = false, compact = false, className = '' }: LogoLockupProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        alt=""
        className={`${compact ? 'h-8 w-8' : 'h-10 w-10'} object-contain`}
        src={inverse ? '/assets/logo-light.png' : '/assets/logo-dark.png'}
      />
      {!compact && <span className="text-xl font-semibold tracking-tight">TrekMate</span>}
    </div>
  );
}
