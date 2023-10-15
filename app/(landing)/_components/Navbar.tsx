'use client';

import React from 'react';

import { useConvexAuth } from 'convex/react';
import { SignInButton, UserButton } from '@clerk/clerk-react';
import { ModeToggle } from '@/components/mode-toggle';
import { useScrollTop } from '@/hooks/useScrollTop';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

import Spinner from '@/components/spinner';

export default function Navbar() {
  const { isAuthenticated, isLoading } = useConvexAuth();
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
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode='modal'>
              <Button variant='ghost' size='sm'>
                Login
              </Button>
            </SignInButton>
            <SignInButton mode='modal'>
              <Button size='sm'>Demo</Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant='ghost' size='sm' asChild>
              <Link href='/dashboard'>Dashboard</Link>
            </Button>
            <UserButton afterSignOutUrl='/' />
          </>
        )}
        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
