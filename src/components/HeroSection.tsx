'use client';
import { Button } from '@nextui-org/react';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-8 place-self-center sm:text-left justify-self-start text-center'>
          <h1 className=' mb-4 text-4xl sm:text-6xl lg:text-8xl font-semibold tracking-tight inline'>
            <span className='text-transparen bg-clip-text'>Hola soy {''}</span>
            <br></br>
            <TypeAnimation
              sequence={['Fidel', 1500, 'Developer', 1500, 'Full-stack', 1500]}
              speed={50}
              repeat={Infinity}
              wrapper='span'
            />
          </h1>
          <p className='text-lg lg:text-xl'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
            exercitationem, deleniti dolorum inventore pariatur facere
            necessitatibus molestiae non sapiente nesciunt error in nobis unde
            numquam possimus harum mollitia ad perspiciatis?
          </p>
          <div>
            <Button
              color='primary'
              className='rounded-full px-6 py-3 mr-4'
              variant='shadow'
            >
              Contacta
            </Button>
            <Button className='rounded-full'>Descargar cv</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
