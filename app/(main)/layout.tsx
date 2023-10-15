import React from 'react';

export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='h-full'>{children}</div>;
}
