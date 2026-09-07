import React from 'react';
import * as Lucide from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function DynamicIcon({ name, className = '', size = 24 }: DynamicIconProps) {
  // Safe lookup for icons in the lucide-react package
  const IconComponent = (Lucide as any)[name];

  if (!IconComponent) {
    // Return a fallback search or check icon if not found
    const Fallback = Lucide.HelpCircle;
    return <Fallback className={className} size={size} />;
  }

  return <IconComponent className={className} size={size} />;
}
