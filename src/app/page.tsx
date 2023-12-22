import * as React from 'react';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col justify-center'>
      <div className='container mx-auto py-4 px-12'>
        <HeroSection />
      </div>
    </main>
  );
}
