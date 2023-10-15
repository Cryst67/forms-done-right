import React from 'react';

import { cn } from '@/lib/utils';

export default function GradientHeading({
  fromColor,
  viaColor,
  toColor,
  children,
  className = '',
}: {
  fromColor?: string;
  viaColor?: string;
  toColor?: string;
  className?: string;
  children: string;
}) {
  return (
    <h1
      className={cn(
        'inline-block text-transparent bg-clip-text select-none',
        'bg-gradient-to-r',
        `from-${fromColor ? fromColor : 'blue-600'}`,
        `via-${viaColor ? viaColor : 'green-500'}`,
        `to-${toColor ? toColor : 'indigo-400'}`,
        className,
      )}
    >
      {children}
    </h1>
  );
}
