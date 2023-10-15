import { ModeToggle } from '@/components/mode-toggle';
import React from 'react';

export default function Navbar() {
  return (
    <nav className='h-14 w-full flex justify-between items-center'>
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
