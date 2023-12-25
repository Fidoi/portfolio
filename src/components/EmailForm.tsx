'use client';
import React from 'react';
import { Button, Input, Textarea, Link, Image } from '@nextui-org/react';
import GithubIcon from '../../public/next.svg';
import { useState } from 'react';

const EmailForm = () => {
  const [buttonState, setButtonState] = useState('normal');

  const handleSubmit = async (e: any) => {
    setButtonState('loading');
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/send';
    const options = {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSONdata,
    };
    const response = await fetch(endpoint, options);

    if (response.status === 200) {
      console.log('Message sent.');
      setButtonState('success');
    }
  };

  return (
    <section
      className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative px-3'
      id='contact'
    >
      <div className='flex flex-col justify-center items-center'>
        <h5 className='text-xl font-bold my-3'>Manten el contacto</h5>
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
        <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
          <div className='flex flex-shrink gap-5'>
            <Input
              isClearable
              isRequired
              name='email'
              type='email'
              label='Email'
              placeholder='you@example.com'
              className='max-w-xs'
            />
            <Input
              name='subject'
              isClearable
              type='text'
              label='Nombre'
              id='subject'
              placeholder='Juanito perez'
              className='max-w-xs'
            />
          </div>
          <Textarea
            name='message'
            id='message'
            type='message'
            className='max-w'
            label='Mensaje'
            placeholder='Ingresa tu mensaje'
            description='Escribe acá tu mensaje'
          />

          {buttonState === 'loading' ? (
            <Button color='secondary' isLoading>
              Enviando...
            </Button>
          ) : buttonState === 'success' ? (
            <Button color='success' variant='shadow'>
              Enviado!
            </Button>
          ) : (
            <Button type='submit' className='py-2.5 px-5' color='secondary'>
              {' '}
              Enviar mensaje
            </Button>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailForm;
