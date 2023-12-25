import * as React from 'react';
import HeroSection from '@/components/HeroSection';
import Proyects from '@/components/Proyects';
import EmailForm from '@/components/EmailForm';

export default function Home() {
  return (
    <main>
      <div className='container mt-24 mx-auto  px-12 py-20'>
        <HeroSection />
      </div>
      <Proyects />
      <EmailForm />
    </main>
  );
}
