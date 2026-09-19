import React from 'react';

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  hasBorder?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt = 'User', size = 'md', hasBorder = false }) => {
  const sizeClasses = {
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-14 w-14 text-base',
    xl: 'h-24 w-24 text-xl',
  };

  return (
    <span className={`inline-grid shrink-0 place-items-center overflow-hidden rounded-full bg-[#49654c] text-[#f2eedf] ${sizeClasses[size]} ${hasBorder ? 'ring-2 ring-[#f2eedf]/80 ring-offset-2 ring-offset-[#142217]' : ''}`}>
      {src ? <img alt={alt} className="h-full w-full object-cover" src={src} /> : alt.charAt(0).toUpperCase()}
    </span>
  );
};
