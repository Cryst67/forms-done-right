import React from 'react';

import FormEditor from './_components/FormEditor';
import FormPreview from './_components/FormPreview';
import SplitScreen from '@/components/layout/SplitScreen';

export default function page() {
  return (
    <SplitScreen rightWeight={2}>
      <FormEditor />
      <FormPreview />
    </SplitScreen>
  );
}
