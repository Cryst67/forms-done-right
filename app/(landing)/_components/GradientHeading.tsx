import React from 'react';

import { cn } from '@/lib/utils';

export default function GradientHeading({
  fromColor,
  viaColor,
  toColor,
  children,
  className = '',
}: {
  fromColor: string;
  viaColor?: string;
  toColor: string;
  className?: string;
  children: string;
}) {
  return (
    <h1
      className={cn(
        'text-transparent bg-clip-text select-none',
        `bg-gradient-to-r`,
        fromColor,
        !!viaColor && viaColor,
        toColor,
        className,
      )}
    >
      {children}
    </h1>
  );
}
