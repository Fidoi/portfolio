'use client';
import Link from 'next/link';
import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`fixed inset-y-0 left-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } w-64 bg-gray-800 p-5 transition-transform`}
    >
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Sidebar</button>
      <nav>
        <ul>
          <li className='text-white'>
            <Link href='/'>Default Link</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
