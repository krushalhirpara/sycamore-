'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  title,
  description,
  className,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 mb-12 md:mb-16',
        align === 'center' && 'md:justify-center text-center md:text-center',
        className
      )}
    >
      {/* Lime Badge Title */}
      <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#131A22] leading-tight shrink-0">
        <span className="brand-label shadow-xs">{title}</span>
      </h2>

      {/* Description Text */}
      {description && (
        <p className="text-[#5F6368] text-sm sm:text-base font-medium max-w-xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
