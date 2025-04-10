"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        title: 'About',
        path: '#about'
    },
    {
        title: 'Projects',
        path: '#projects'
    },
    {
        title: 'Contact',
        path: '#contact'
    }
]

const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#03071E] opacity-90'>
      <div className='flex  container lg:p-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <Link 
            href={'/'} className='text-2xl text-white font-semibold'
        >
            Portfolio
        </Link>
        <div className="mobile-menu block md:hidden">
            {
                !isOpen ? (
                    <button onClick={() => setIsOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white hover:cursor-pointer'><Bars3Icon className='h-5 w-5'/></button>
                ) : (
                    <button onClick={() => setIsOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white hover:cursor-pointer'><XMarkIcon className='h-5 w-5'/></button>
                )
            }
        </div>
        <div className="menu hidden md:block md:w-auto" id='navbar'>
            <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8'>
                {
                    navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title}/>
                        </li>
                    ))
                }
            </ul>
        </div>
      </div>
      {isOpen ? <MenuOverlay links={navLinks}/> : null}
    </nav>
  )
}

export default Navbar;
