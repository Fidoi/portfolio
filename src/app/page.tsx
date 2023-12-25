import * as React from 'react';
import HeroSection from '@/components/HeroSection';
import About from '@/components/About';
import EmailForm from '@/components/EmailForm';

export default function Home() {
  return (
    <main className=''>
      <div className='container mt-24 mx-auto  px-12 py-20'>
        <HeroSection />
      </div>
      <About />
      <EmailForm />
    </main>
  );
}
