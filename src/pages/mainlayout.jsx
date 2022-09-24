import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/navbar';
import ProductCards from '../components/productCards';
import { Navbar, Text } from '@mantine/core';
import Hero from './hero';

export default function Mainlayout() {
  // const [opened, setOpened] = useState(false);
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 400 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };
  return (
    <div>
      <NavBar />
      <div className='hero w-full bg-primaryColor'>
        <Hero />
      </div>
      <div className='flex'>
        <Navbar
          p='md'
          hiddenBreakpoint='sm'
          // hidden={!opened}
          width={{ sm: 200, lg: 300 }}
          className={`navbar bg-white border-tertiaryColor ${stickyClass}`}
        >
          <Text>Sidebar</Text>
        </Navbar>
        <ProductCards />
      </div>
      <Outlet />
    </div>
  );
}
