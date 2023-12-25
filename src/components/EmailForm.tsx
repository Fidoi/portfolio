import React from 'react';
import { Button, Input, Textarea, Link, Image } from '@nextui-org/react';
import GithubIcon from '../../public/next.svg';

const EmailForm = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative px-3'>
      <div className='flex flex-col justify-center items-center'>
        <h5 className='text-xl font-bold my-3'>Manten un contacto</h5>
        <p className='mb-4 max-w-md'>
          {' '}
          En búsqueda de nuevas oportunidades y siempre con la bandeja de
          entrada abierta. Si tienes alguna pregunta o solo quieres saludar,
          ¡haré lo posible por responderte!
        </p>
        <div className='socials flex flex-row gap-2'>
          <Link href='github.com'>
            <Image src={GithubIcon} alt='Github Icon' />
          </Link>
          <Link href='linkedin.com'>
            <Image src={GithubIcon} alt='Linkedin Icon' />
          </Link>
        </div>
      </div>
      <div>
        <form className='flex flex-col gap-5'>
          <div className='flex flex-shrink gap-5'>
            <Input
              isClearable
              isRequired
              type='email'
              label='Email'
              placeholder='you@example.com'
              className='max-w-xs'
            />
            <Input
              isClearable
              type='text'
              label='Nombre'
              id='subject'
              placeholder='Buenas!'
              className='max-w-xs'
            />
          </div>
          <Textarea
            type='message'
            id='message'
            className='max-w'
            label='Mensaje'
            placeholder='Ingresa tu mensaje'
            description='Escribe aca tu mensaje'
          />
          <Button type='submit' className='py-2.5 px-5' color='secondary'>
            {' '}
            Enviar mensaje
          </Button>
        </form>
      </div>
    </section>
  );
};

export default EmailForm;
