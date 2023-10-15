import React from 'react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import Link from 'next/link';

type footerLink = {
  url: string;
  name: string;
};

const footerLinks: footerLink[] = [
  {
    url: '/privacy',
    name: 'Privacy Policy',
  },
  {
    url: '/terms',
    name: 'Terms & Conditions',
  },
];

export default function Footer() {
  return (
    <footer className='m-2 flex justify-between items-center bg-background z-50'>
      <div className='ml-2'>Logo</div>
      <div className='flex items-center'>
        {footerLinks.map((link, i) => {
          return (
            <React.Fragment key={i}>
              {i > 0 && <Separator className='h-4' orientation='vertical' />}
              <Button variant='ghost'>
                <Link href={link.url}>{link.name}</Link>
              </Button>
            </React.Fragment>
          );
        })}
      </div>
    </footer>
  );
}
