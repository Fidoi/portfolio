import * as React from 'react';
import CardText from '@/components/CardText';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <main className='flex h-screen justify-center  items-center py-4 px-12 container mx-auto'>
      <HeroSection />
    </main>
  );
}
