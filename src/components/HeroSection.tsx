import { Button } from '@nextui-org/react';
import React from 'react';

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7 place-self-center sm:text-left'>
          <h1 className='tracking-tight inline font-semibold text-[2.1rem] lg:text-6xl '>
            HOLA NAKED
          </h1>
          <p className='text-lg lg:text-xl'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
            exercitationem, deleniti dolorum inventore pariatur facere
            necessitatibus molestiae non sapiente nesciunt error in nobis unde
            numquam possimus harum mollitia ad perspiciatis?
          </p>
          <div>
            <Button color='primary' className='rounded-full px-6 py-3 mr-4'>
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
