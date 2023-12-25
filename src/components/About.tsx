import React from 'react';
import { Image } from '@nextui-org/react';

const About = () => {
  return (
    <section id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>Sobre Mi</h2>
          <p className='text-base lg:text-lg'>
            Soy un desarrollador web full stack con una pasión por crear
            aplicaciones web interactivas y receptivas. Tengo experiencia
            trabajando con TypeScript, React, Next.js, Node.js, PostgreSQL,
            HTML, CSS y Git. Soy un aprendiz rápido y siempre estoy buscando
            expandir mi conocimiento y conjunto de habilidades. Me considero un
            jugador de equipo y estoy emocionado de colaborar con otros para
            crear aplicaciones asombrosas.
          </p>
        </div>
        <Image
          src='https://firebasestorage.googleapis.com/v0/b/desarrollo-5753a.appspot.com/o/_2990c70f-55ba-43ad-907d-b07ae2ee4aea.jfif?alt=media&token=6c81b9f7-c21b-487e-98a2-3cb9a9ddc599'
          isBlurred
          width={500}
          height={500}
          alt='Logo'
        />
      </div>
    </section>
  );
};
export default About;
