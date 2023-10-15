'use client';

import React from 'react';

import { SignInButton } from '@clerk/clerk-react';
import { useConvexAuth } from 'convex/react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Spinner from '@/components/spinner';

export default function Heading() {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className='flex flex-col justify-center items-center gap-5 mt-56'>
      <h1
        // fromColor='from-blue-600'
        // viaColor='via-green-600'
        // toColor='to-indigo-400'
        className='text-7xl font-bold py-3'
      >
        Forms Done Right
      </h1>
      <h3>Elegant and minimalist forms for all your data collection needs</h3>
      {isLoading && <Spinner size='lg' />}
      {isAuthenticated && !isLoading && (
        <Button className='w-[142px]' asChild>
          <Link href='/dashboard'>
            Get Started <ArrowRight className='h-5 w-5 ml-2' />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode='modal'>
          <Button>
            Try for Free <ArrowRight className='h-4 w-4 ml-2' />
          </Button>
        </SignInButton>
      )}
    </div>
  );
}
