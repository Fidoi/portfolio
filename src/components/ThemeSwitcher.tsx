'use client';

import React, { useEffect, useState } from 'react';
import { Switch } from '@nextui-org/react';
import { MoonIcon } from './icons/MoonIcon';
import { SunIcon } from './icons/SunIcon';
import { useTheme } from 'next-themes';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

<<<<<<< HEAD
  if (!isMounted) return null;
=======
  if (!isMounted) return <></>;
>>>>>>> develop

  return (
    <Switch
      defaultSelected={theme === 'dark' ? false : true}
      size='lg'
<<<<<<< HEAD
      color='default'
=======
      color='secondary'
>>>>>>> develop
      onChange={handleToggleTheme}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    ></Switch>
  );
}
