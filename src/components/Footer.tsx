import React from 'react';
import { Divider } from '@nextui-org/react';

const Footer = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <footer>
      <Divider />
      <div>
        <p>&copy; {currentYear} Fidoing. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
