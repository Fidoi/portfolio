'use client';
import { Button } from '@nextui-org/react';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link, Image } from '@nextui-org/react';

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-8 place-self-center sm:text-left justify-self-start text-center '>
          <h1 className='mb-4 text-4xl sm:text-6xl lg:text-8xl font-semibold tracking-tight inline'>
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
          <div className='mt-5'>
            <Button
              color='primary'
              className='rounded-full px-6 py-3 mr-4'
              variant='shadow'
              as={Link}
              href='#contact'
            >
              Contacta
            </Button>
            <Button
              className='rounded-full'
              variant='bordered'
              as={Link}
              isExternal
              href={
                'https://firebasestorage.googleapis.com/v0/b/desarrollo-5753a.appspot.com/o/FULLSTACK%20CV.pdf?alt=media&token=f9994961-bab7-481a-adbe-96a3cc8f8343'
              }
            >
              Descargar cv
            </Button>
          </div>
        </div>
        <div className='col-span-4 justify-self-end'>
          <Image
            isZoomed
            isBlurred
            src='https://firebasestorage.googleapis.com/v0/b/desarrollo-5753a.appspot.com/o/mitaka_asa_ka.gif?alt=media&token=aeff2b74-79ef-4c15-bf3c-1f2930d110c2'
            alt='Mitaka_Asa'
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
