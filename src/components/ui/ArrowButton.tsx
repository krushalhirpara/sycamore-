'use client';

import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ArrowButtonProps {
  variant?: 'dark' | 'light' | 'lime';
  size?: 'sm' | 'md' | 'lg';
  diagonal?: boolean;
  className?: string;
}

export default function ArrowButton({
  variant = 'dark',
  size = 'md',
  diagonal = false,
  className,
}: ArrowButtonProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
  };

  const variantClasses = {
    dark: 'bg-[#131A22] text-[#FF9900] border border-[#E5E7EB]',
    light: 'bg-white text-[#131A22] border border-[#E5E7EB]',
    lime: 'bg-[#FF9900] text-[#131A22] border border-[#E5E7EB]',
  };

  const IconComponent = diagonal ? ArrowUpRight : ArrowRight;

  return (
    <div
      className={cn(
        'rounded-full flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-105',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <IconComponent
        size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16}
        className="transition-transform duration-200 group-hover:translate-x-1"
      />
    </div>
  );
}
