'use client';
import ProjectPage from '@src/components/projects';
import React, { Suspense } from 'react';

export default function page() {
  return (
    <Suspense>
      <ProjectPage />
    </Suspense>
  );
}
