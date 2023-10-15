'use client';

import React from 'react';
import GradientHeading from './GradientHeading';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Heading() {
  return (
    <div className='flex flex-col justify-center items-center gap-5 mt-56'>
      <GradientHeading className='text-7xl font-bold py-3'>
        Forms Done Right
      </GradientHeading>
      <h3>Elegant and minimalist forms for all your data collection needs</h3>
      <Button className='w-[142px]'>
        Get Started <ArrowRight className='h-5 w-5 ml-2' />
      </Button>
    </div>
  );
}
