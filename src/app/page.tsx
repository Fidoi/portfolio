<<<<<<< HEAD
'use client';

import * as React from 'react';

export default function Home() {
  return (
    <section className='py-36'>
      <div className='container flex items-center justify-center'></div>
    </section>
=======
import * as React from 'react';
import HeroSection from '@/components/HeroSection';
import Projects from '@/components/Projects';
import EmailForm from '@/components/EmailForm';
import About from '@/components/About';

export default function Home() {
  return (
    <main className='container mt-24 mx-auto px-12 py-20'>
      <div className='mb-40'>
        <HeroSection />
      </div>
      <About />
      <Projects />
      <EmailForm />
    </main>
>>>>>>> develop
  );
}
