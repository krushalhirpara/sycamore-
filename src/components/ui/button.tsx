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
    'inline-flex items-center justify-center font-heading font-extrabold rounded-2xl border-2 border-[#191A23] transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2',
    md: 'text-sm px-6 py-3.5',
    lg: 'text-base px-8 py-4',
  };

  const variantStyles = {
    primary: 'bg-[#191A23] text-white hover:bg-[#191A23]/90 shadow-positivus-hover',
    secondary: 'bg-white text-[#191A23] hover:bg-[#F3F3F3] shadow-positivus-hover',
    accent: 'bg-[#B9FF66] text-[#191A23] hover:bg-[#a3f048] shadow-positivus-hover',
    outline: 'bg-transparent text-[#191A23] hover:bg-[#B9FF66]',
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
