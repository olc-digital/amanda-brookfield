'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navLinks = [
  { to: '/', text: 'Home', name: 'books', mobileOnly: true },
  { to: '/books', name: 'books', text: 'Books' },
  { to: '/author', name: 'author', text: 'Author' },
  { to: '/blog', name: 'blog', text: 'Blog' },
  { to: '/features', name: 'features', text: 'Features' },
  { to: '/events', name: 'events', text: 'Events' },
];

const NavItem: React.FC<{
  text: string;
  to: string;
  name: string;
  handleClick?: () => void;
  isActive: boolean;
}> = ({ text, to, handleClick = () => {}, isActive }) => (
  <div className="mx-0 md:mx-2.5" key={text}>
    <Link
      href={to}
      onClick={handleClick}
      className={`text-gray-800 no-underline hover:text-red-600 ${
        isActive ? 'text-red-600' : ''
      }`}
    >
      <div className="hidden md:block">
        {/* Placeholder for sketch icon */}
        <div className="w-8 h-8 mx-auto mb-1 bg-gray-200 rounded"></div>
      </div>
      <h2 className={`
        m-0 py-4 px-0 border-b border-gray-300 md:p-0 md:border-b-0 md:text-center md:mt-2
        ${isActive ? 'text-red-600' : ''}
      `}>
        {text}
      </h2>
    </Link>
  </div>
);

const Nav: React.FC = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const pathname = usePathname();

  const hideMobileNav = () => setIsMobileNavVisible(false);
  const showMobileNav = () => setIsMobileNavVisible(true);

  return (
    <div>
      {/* Mobile hamburger menu */}
      <button
        onClick={showMobileNav}
        className="absolute left-6 top-6 w-5 h-5 bg-contain bg-no-repeat md:hidden"
        style={{ backgroundImage: 'url(/images/menu-icon.svg)' }}
      />

      {/* Mobile backdrop */}
      {isMobileNavVisible && (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 z-10"
          onClick={hideMobileNav}
        />
      )}

      {/* Mobile nav */}
      <nav
        className={`
          fixed top-0 left-0 grid grid-rows-min w-55 h-screen px-6 py-0
          transform transition-transform duration-200 ease-in
          bg-white shadow-lg z-20 md:hidden
          ${isMobileNavVisible ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <button
          onClick={hideMobileNav}
          className="w-4 h-4 my-6 mx-0 p-0 cursor-pointer"
        >
          <Image
            src="/images/cursive-close.svg"
            alt="Close"
            width={16}
            height={16}
          />
        </button>
        
        {navLinks.map((item) => (
          <NavItem
            key={item.text}
            {...item}
            handleClick={hideMobileNav}
            isActive={pathname === item.to || (item.to !== '/' && pathname.startsWith(item.to))}
          />
        ))}
      </nav>

      {/* Desktop nav */}
      <nav className="hidden md:flex justify-center my-8 mx-auto max-w-4xl justify-around px-5">
        {navLinks.map(
          (item) =>
            !item.mobileOnly && (
              <NavItem
                key={item.text}
                {...item}
                isActive={pathname === item.to || (item.to !== '/' && pathname.startsWith(item.to))}
              />
            )
        )}
      </nav>
    </div>
  );
};

export default Nav;