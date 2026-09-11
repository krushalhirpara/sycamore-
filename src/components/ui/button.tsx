'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-heading font-extrabold rounded-2xl transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2',
    md: 'text-sm px-6 py-3.5',
    lg: 'text-base px-8 py-4',
  };

  const variantStyles = {
    primary: 'bg-[#FF9900] text-[#131A22] hover:bg-[#E88B00] hover:text-white shadow-premium-hover',
    secondary: 'bg-[#131A22] text-white hover:bg-[#232F3E] shadow-premium-hover',
    accent: 'bg-[#FF9900] text-[#131A22] hover:bg-[#E88B00] hover:text-white shadow-premium-hover',
    outline: 'bg-transparent text-[#131A22] border border-[#131A22] hover:bg-[#131A22] hover:text-white',
  };

  const content = (
    <motion.span
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block no-underline">
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className="focus:outline-none bg-transparent border-0 p-0">
      {content}
    </button>
  );
}
