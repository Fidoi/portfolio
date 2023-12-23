import * as React from 'react';
import HeroSection from '@/components/HeroSection';
import About from '@/components/About';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col justify-center'>
      <div className='container mx-auto py-4 px-12'>
        <HeroSection />
      </div>
      <About />
    </main>
  );
}
