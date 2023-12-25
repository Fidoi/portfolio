'use client';
import React from 'react';
import { useState } from 'react';
import { Image } from '@nextui-org/react';
import {
  Tabs,
  Tab,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from '@nextui-org/react';
import { UserIcon } from '@/components/icons/UserIcon';

interface Technology {
  nombre: string;
  src: string;
}
interface Projects {
  title: string;
  small: string;
  sub: string;
  ImageUrl: string;
  descriptionTitle: string;
  descriptionImageUrl: string;
  descriptionSentence: string;
  technologies: Technology[];
  githubUrl: string;
  gitHubDescription: string;
}

const Projects = () => {
  const [selected, setSelected] = React.useState('tarificador');
  const projects: { [key: string]: Projects } = {
    tarificador: {
      title: 'Empresa',
      small: 'NextJs',
      sub: 'Tarificador',
      ImageUrl:
        'https://firebasestorage.googleapis.com/v0/b/desarrollo-5753a.appspot.com/o/tarifario.png?alt=media&token=92811471-4132-4906-8f39-0d33697e6da0',
      descriptionTitle: 'Desarrollador Full Stack en Trebol-IT: Tarificador',
      descriptionImageUrl:
        'https://firebasestorage.googleapis.com/v0/b/desarrollo-5753a.appspot.com/o/Logo-Trebol-2020_RGB.png?alt=media&token=239c9d75-09d6-4e19-a0d1-e4a4f74c9166',
      descriptionSentence:
        'En Trebol-IT, contribuí al desarrollo de un tarificador empresarial usando Next.js y TypeScript, enfocándome en el diseño de interfaces y la integración de APIs internas. Destacó mi trabajo en la implementación de soluciones de autenticación segura con NextAuth y Keycloak, mejorando la seguridad y usabilidad del proyecto. Mi rol implicó colaboración con equipos multidisciplinarios, fortaleciendo mis habilidades en desarrollo de software en un contexto empresarial.',
      technologies: [
        {
          nombre: 'NextJs',
          src: 'https://firebasestorage.googleapis.com/v0/b/desarrollo-5753a.appspot.com/o/next-js-icon-logo-EE302D5DBD-seeklogo.com.png?alt=media&token=7db39c1e-cfff-4bd1-8ec6-239e9442bd97',
        },
        {
          nombre: 'NextAuth',
          src: 'https://firebasestorage.googleapis.com/v0/b/desarrollo-5753a.appspot.com/o/logo-sm.png?alt=media&token=954543b1-2f3e-4b1b-903b-3a3dc510bbfd',
        },
        {
          nombre: 'Keycloak',
          src: 'https://firebasestorage.googleapis.com/v0/b/desarrollo-5753a.appspot.com/o/Keycloak_Logo.png?alt=media&token=83f51e9b-096c-483e-af55-bdfbf0c8da2b',
        },
        {
          nombre: 'Typescript',
          src: 'https://firebasestorage.googleapis.com/v0/b/desarrollo-5753a.appspot.com/o/typescript_original_logo_icon_146317.png?alt=media&token=8b56e325-c026-4e2a-9307-45e4b6a70643',
        },
      ],
      githubUrl: 'www.google.cl',
      gitHubDescription: 'Visita el codigo de GitHub ->',
    },
    personal: {
      title: 'Personal',
      small: 'NextJs',
      sub: 'Portafolio',
      ImageUrl:
        'https://firebasestorage.googleapis.com/v0/b/desarrollo-5753a.appspot.com/o/ejemplo.png?alt=media&token=1181cd1f-211a-4025-824e-1b12b59be674',
      descriptionTitle: 'Desarrollador de mi propio projecto personal',
      descriptionImageUrl:
        'https://firebasestorage.googleapis.com/v0/b/desarrollo-5753a.appspot.com/o/Logo-Trebol-2020_RGB.png?alt=media&token=239c9d75-09d6-4e19-a0d1-e4a4f74c9166',
      descriptionSentence: 'trabaje como pude mierdas',
      technologies: [
        {
          nombre: 'Tecnología 1',
          src: 'https://firebasestorage.googleapis.com/v0/b/desarrollo-5753a.appspot.com/o/typescript_original_logo_icon_146317.png?alt=media&token=8b56e325-c026-4e2a-9307-45e4b6a70643',
        },
      ],
      githubUrl: 'www.google.cl',
      gitHubDescription: 'Visita el codigo de GitHub ->',
    },
  };
  const [selectedProject, setSelectedProject] = useState(projects.tarificador);

  const handleSelectionChange = (key: any) => {
    setSelected(key);
    const project = projects[key];
    if (project) {
      setSelectedProject(project);
    }
  };
  return (
    <section id='projects'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-2 px-4 xl:gap-16 sm:py-16 sm:px-16'>
        <Card className='py-4'>
          <Tabs
            aria-label='Options'
            selectedKey={selected}
            onSelectionChange={handleSelectionChange}
            color='primary'
            className='px-2'
          >
            <Tab key='tarificador' title='Tarificador'></Tab>
            <Tab
              key='personal'
              title={
                <div className='flex items-center space-x-2'>
                  <UserIcon />
                  <span>Personal</span>
                </div>
              }
            ></Tab>
          </Tabs>
          <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
            <p className='text-tiny uppercase font-bold'>
              {selectedProject.title}
            </p>
            <small className='text-default-500'>{selectedProject.small}</small>
            <h4 className='font-bold text-large'>{selectedProject.sub}</h4>
          </CardHeader>
          <CardBody className='overflow-visible py-2 flex justify-center items-center'>
            <Image
              isZoomed
              isBlurred
              alt='Logo'
              src={selectedProject.ImageUrl}
              height={500}
              width={500}
            ></Image>
          </CardBody>
        </Card>
        <div>
          <Card className='max-w-[700px] h-[500px]'>
            <CardHeader className='flex gap-3'>
              <div className='flex flex-col '>
                <h1 className=' font-bold mb-5 sm:text-1xl lg:text-2xl'>
                  {selectedProject.descriptionTitle}
                </h1>
                <Image
                  height={100}
                  width={200}
                  src={selectedProject.descriptionImageUrl}
                  alt='Logo Empresa'
                ></Image>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className='justify-center'>
              <p className='text-base md:text:lg'>
                {selectedProject.descriptionSentence}
              </p>
              <div className='flex flex-row mt-8 space-x-4 justify-center'>
                {selectedProject.technologies.map((tecnologia, index) => (
                  <div key={index}>
                    <Image
                      src={tecnologia.src}
                      alt={tecnologia.nombre}
                      width={50}
                      height={50}
                    />
                  </div>
                ))}
              </div>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link isExternal showAnchorIcon href={selectedProject.githubUrl}>
                {selectedProject.gitHubDescription}
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
