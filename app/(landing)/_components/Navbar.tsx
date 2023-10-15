'use client';

import { ModeToggle } from '@/components/mode-toggle';
import { useScrollTop } from '@/hooks/useScrollTop';
import { cn } from '@/lib/utils';
import React from 'react';

export default function Navbar() {
  const scrolled = useScrollTop();

  return (
    <nav
      className={cn(
        'h-14 w-full flex justify-between items-center',
        scrolled && 'border-b shadow-sm',
      )}
    >
      <div>Logo</div>
      <div className='flex gap-5 items-center'>
        <div>Go Here</div>
        <div>Go Here</div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
