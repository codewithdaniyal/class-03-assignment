// navbar.tsx
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white p-4">
      <h1 className="text-center text-2xl font-bold mb-4">My Professional App</h1>
      <ul className="flex justify-center gap-10">
        <li className="hover:text-gray-400"><Link href={'/'}>Home</Link></li>
        <li className="hover:text-gray-400"><Link href={'/about'}>About</Link></li>
        <li className="hover:text-gray-400"><Link href={'/contact'}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
