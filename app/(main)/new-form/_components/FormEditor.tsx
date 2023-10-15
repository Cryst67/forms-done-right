'use client';

import React from 'react';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

export default function FormEditor() {
  return (
    <Card className='m-5'>
      <CardHeader>
        <CardTitle>New Form</CardTitle>
        <CardDescription>This is your new form</CardDescription>
      </CardHeader>
    </Card>
  );
}
