'use client';
import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import ThemeSwitcher from './ThemeSwitcher';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = ['Sobre mi', 'Proyectos', 'Tecnologias'];

  return (
    <nav>
      <Navbar
        isBordered
        maxWidth='full'
        height={'5rem'}
        className='flex justify-between items-center '
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className='sm:hidden'
          />
          <Image
            isZoomed
            isBlurred
            src='https://firebasestorage.googleapis.com/v0/b/desarrollo-5753a.appspot.com/o/logo.png?alt=media&token=a10945db-80e5-45b7-a209-aa9c796ea44d'
            width={75}
            height={75}
            alt='Logo'
          />
        </NavbarContent>
        <NavbarContent className='hidden sm:flex gap-4' justify='center'>
          <NavbarItem>
            <Link color='foreground' href='#about'>
              Sobre mi
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href='#projects' aria-current='page'>
              Proyectos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color='foreground' href='#contact'>
              Contacto
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify='end'>
          <ThemeSwitcher />
        </NavbarContent>
        <NavbarMenu className='flex flex-col items-center justify-center h-1/2'>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 1
                    ? 'primary'
                    : index === menuItems.length - 1
                    ? 'danger'
                    : 'foreground'
                }
                className='w-full my-2 text-lg'
                href={`/${item}`}
                size='lg'
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </nav>
  );
}
