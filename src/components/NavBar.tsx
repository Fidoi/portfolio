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
    <Navbar>
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
    </Navbar>
  );
}
