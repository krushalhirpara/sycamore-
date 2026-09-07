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

  const baseStyles = 'rounded-[30px] p-6 sm:p-8 border-2 border-[#191A23] transition-all duration-200';

  const variantStyles = {
    white: 'bg-white text-[#191A23] shadow-positivus',
    dark: 'bg-[#191A23] text-white shadow-positivus',
    lime: 'bg-[#B9FF66] text-[#191A23] shadow-positivus',
    default: 'bg-white text-[#191A23] shadow-positivus',
    glass: 'bg-[#191A23] text-white shadow-positivus',
    'glass-light': 'bg-[#F3F3F3] text-[#191A23] shadow-positivus',
    'glow-amazon': 'bg-white text-[#191A23] shadow-positivus',
    'glow-flipkart': 'bg-[#F3F3F3] text-[#191A23] shadow-positivus',
    'glow-indigo': 'bg-[#B9FF66] text-[#191A23] shadow-positivus',
  };

  const hoverStyles = hoverEffect ? 'hover:shadow-positivus-lg hover:-translate-y-1' : '';
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
