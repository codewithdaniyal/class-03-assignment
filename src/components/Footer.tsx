// footer.tsx
'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const Footer = () => {
  const route = useRouter();

  return (
    <footer className="flex flex-col items-center justify-center bg-gray-800 text-white p-6 mt-20">
      <p>&copy; Daniyal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
