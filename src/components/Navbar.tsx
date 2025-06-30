import React from 'react'
import Link from 'next/link'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => (
  <nav className="flex items-center justify-between max-w-6xl mx-auto py-8 px-4 text-gray-400 text-sm w-full">
    {/* Brand Name */}
    <span className="font-extrabold text-white text-lg tracking-wide flex items-center">vincent<span className="text-blue-500 ml-1">.</span></span>
    {/* Nav Links */}
    <div className="flex justify-center space-x-10 flex-1">
      {navItems.map((item, idx) => (
        <Link
          key={item.name}
          href={item.href}
          className={
            idx === 0
              ? 'text-white border-b-2 border-blue-500 pb-1'
              : 'hover:text-white transition-colors duration-200'
          }
        >
          {item.name}
        </Link>
      ))}
    </div>
    {/* Get a Quote Button */}
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition-colors duration-200 ml-6">
      Get a Quote
    </button>
  </nav>
);

export default Navbar;