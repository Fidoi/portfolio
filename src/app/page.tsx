import * as React from 'react';
import HeroSection from '@/components/HeroSection';
import Projects from '@/components/Projects';
import EmailForm from '@/components/EmailForm';
import About from '@/components/About';

export default function Home() {
  return (
    <main>
      <div className='container mt-24 mx-auto px-12 py-20'>
        <HeroSection />
      </div>
      <About />
      <Projects />
      <EmailForm />
    </main>
  );
}
