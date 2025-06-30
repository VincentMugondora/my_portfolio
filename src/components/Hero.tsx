import React from 'react'
import Image from 'next/image'

const Navbar: React.FC = () => (
  <nav className="flex justify-center space-x-10 py-8 text-gray-400 text-sm">
    {['Home', 'About', 'Services', 'Case Studies', 'Contact'].map((item, idx) => (
      <a
        key={item}
        href="#"
        className={
          idx === 0
            ? 'text-white border-b-2 border-blue-500 pb-1'
            : 'hover:text-white transition-colors duration-200'
        }
      >
        {item}
      </a>
    ))}
  </nav>
);

export default Navbar;