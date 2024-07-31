'use client';
import { Nav, Footer, Hero, Projects } from '@src/components';
import Education from '@src/components/education';
import Events from '@src/components/event';
import Interiors from '@src/components/interior';
import { ScrollArea } from '@src/components/ui/scroll-area';
import React, { useEffect } from 'react';

const Page = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <ScrollArea className="bg-backgrond">
      <Nav isLoaded={isMounted} />
      <Hero />
      <Projects />
      <Events />
      <Interiors />
      <Education />
      <Footer />
    </ScrollArea>
  );
};

export default Page;
