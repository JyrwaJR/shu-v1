'use client';
import { Nav } from '@src/components';
import React, { useEffect, useState } from 'react';

export default function projectLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <>
      <Nav isLoaded={isLoaded} />
      <div className=" pt-[5rem]">{children}</div>
    </>
  );
}
