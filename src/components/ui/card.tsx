'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'white' | 'dark' | 'lime' | 'default' | 'glass' | 'glass-light' | 'glow-amazon' | 'glow-flipkart' | 'glow-indigo';
  hoverEffect?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className = '',
  variant = 'white',
  hoverEffect = true,
  onClick,
}: CardProps) {
  const isClickable = typeof onClick === 'function';

  const baseStyles = 'rounded-[30px] p-6 sm:p-8 border border-[#E5E7EB] transition-all duration-200';

  const variantStyles = {
    white: 'bg-white text-[#131A22] shadow-sm',
    dark: 'bg-[#131A22] text-white shadow-premium',
    lime: 'bg-[#FF9900] text-[#131A22] shadow-premium',
    default: 'bg-white text-[#131A22] shadow-sm',
    glass: 'bg-[#131A22] text-white shadow-premium',
    'glass-light': 'bg-[#F7F7F7] text-[#131A22] shadow-sm',
    'glow-amazon': 'bg-white text-[#131A22] shadow-sm',
    'glow-flipkart': 'bg-[#F7F7F7] text-[#131A22] shadow-sm',
    'glow-indigo': 'bg-[#FF9900] text-[#131A22] shadow-premium',
  };

  const hoverStyles = hoverEffect ? 'hover:shadow-premium-lg hover:border-[#FF9900] hover:-translate-y-1' : '';
  const clickableStyles = isClickable ? 'cursor-pointer select-none' : '';

  return (
    <motion.div
      onClick={onClick}
      whileHover={hoverEffect ? { scale: 1.01 } : undefined}
      transition={{ duration: 0.2 }}
      className={cn(
        baseStyles,
        variantStyles[variant],
        hoverStyles,
        clickableStyles,
        className
      )}
    >
      {children}
    </motion.div>
  );
}
