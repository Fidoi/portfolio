import React from 'react';

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-17 place-self-center'>
          <h1 className='tracking-tight inline font-semibold text-[2.1rem] lg:text-5xl'>
            HOLA NAKED
          </h1>
          <p className='text-lg lg:text-xl'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic sequi
            consequatur ipsa deleniti quae, obcaecati suscipit maxime a corporis
            earum dolores harum, voluptas aut ex temporibus. Beatae aliquid
            dignissimos similique.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
