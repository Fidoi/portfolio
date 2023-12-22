import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
import Image from 'next/image';
import ThemeSwitcher from './ThemeSwitcher';

export default function NavBar() {
  return (
    <div>
      <Navbar
        isBordered
        maxWidth='full'
        height={'5rem'}
        className='flex justify-between items-center '
      >
        <Image
          src='https://firebasestorage.googleapis.com/v0/b/desarrollo-5753a.appspot.com/o/logo.png?alt=media&token=a10945db-80e5-45b7-a209-aa9c796ea44d'
          width={75}
          height={75}
          alt='Picture of the author'
        />
        <NavbarBrand></NavbarBrand>
        <NavbarContent className='lg:flex gap-4' justify='center'>
          <NavbarItem>
            <Link color='foreground' href='#'>
              Sobre mi
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link color='foreground' href='/page'>
              Proyectos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color='foreground' href='#'>
              Acerca de
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify='end'>
          <NavbarItem></NavbarItem>
        </NavbarContent>
        <ThemeSwitcher />
      </Navbar>
    </div>
  );
}
