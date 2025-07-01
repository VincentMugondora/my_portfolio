import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between w-full py-6 px-4 text-gray-400 text-sm relative">
      {/* Brand Name */}
      <span className="font-extrabold text-white text-lg tracking-wide flex items-center z-20">vincent<span className="text-blue-500 ml-1">.</span></span>
      {/* Hamburger Icon */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-20"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>
      {/* Nav Links Desktop */}
      <div className="hidden md:flex justify-center space-x-10 flex-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={
              router.pathname === item.href
                ? 'text-white border-b-2 border-blue-500 pb-1'
                : 'hover:text-white transition-colors duration-200'
            }
          >
            {item.name}
          </Link>
        ))}
      </div>
      {/* Get a Quote Button Desktop */}
      <div className="hidden md:block ml-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition-colors duration-200">
          Get a Quote
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#18181b] bg-opacity-95 flex flex-col items-center justify-center z-10 transition-transform duration-300 md:hidden ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
      >
        <div className="flex flex-col items-start justify-center w-4/5 max-w-xs space-y-7">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={
                router.pathname === item.href
                  ? 'text-white text-2xl font-bold border-b-2 border-blue-500 pb-1 text-left w-full'
                  : 'text-gray-300 text-2xl font-semibold hover:text-white transition-colors duration-200 text-left w-full'
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 mt-6 w-4/5 max-w-xs mx-auto" onClick={() => setMenuOpen(false)}>
          Get a Quote
        </button>
      </div>
      {/* Overlay for closing menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;