import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', size = 'md', className = '', onClick, ...props }) => {
  const variants = {
    primary: 'bg-[#f2eedf] text-[#18241b] hover:bg-white',
    secondary: 'bg-[#2d5a3c] text-[#f2eedf] hover:bg-[#396f4a]',
    outline: 'border border-[#f2eedf]/35 text-[#f2eedf] hover:bg-[#f2eedf]/10',
    ghost: 'text-[#c3cbbf] hover:bg-white/10 hover:text-[#f2eedf]',
  };
  const sizes = { sm: 'min-h-9 px-4 text-sm', md: 'min-h-11 px-5 text-base', lg: 'min-h-14 px-7 text-lg' };
  return <button className={`inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`} onClick={onClick} {...props}>{children}</button>;
};
