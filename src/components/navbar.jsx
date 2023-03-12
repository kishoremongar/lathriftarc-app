import React, { useState } from 'react';
import { Burger, MultiSelect, Text, MediaQuery, Header } from '@mantine/core';
import { CgProfile, CgShoppingCart, CgSearch } from 'react-icons/cg';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { ReactComponent as Logo } from '../asset/logo.svg';
import { Link } from 'react-router-dom';

export default function NavBar({ location }) {
  const [opened, setOpened] = useState(false);
  const [searchValue, onSearchChange] = useState('');
  // const [showLinks, setShowLinks] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';
  // let windowHeight = window.scrollY;
  // let activeStyle = {
  //   color: "var(--border-bottom)",
  //   borderBottom: "1px solid var(--border-bottom)",
  // };
  // const toggle = (e) => {
  //   e.preventDefault();
  //   setShowLinks((prev) => !prev);
  // };

  return (
    <div className='h-[5vh]'>
      <Header
        height={70}
        p='md'
        className={`flex fixed top-0 left-0 right-0 h-16 justify-between duration-300 transition-all ease-in items-center border-none bg-darkPink`}
      >
        <div
          className='flex justify-between items-center gap-x-10 ml-6'
          style={{ height: '100%' }}
        >
          <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              title={title}
              size='sm'
              mr='xl'
              color='white'
            />
          </MediaQuery>
          <div className='w-[10rem] mt-6'>
            <Link to='/'>
              <Logo />
            </Link>
          </div>
          <Text className='text-white text-center text-xl font-medium tracking-normal font-sans'></Text>
          <Text className='text-white text-center text-md font-medium tracking-normal font-sans'>
            Catalogs
          </Text>
          <Text className='text-white text-center text-md font-medium tracking-normal font-sans'>
            About
          </Text>
          <Text className='text-white text-center text-md font-medium tracking-normal font-sans'>
            Connect Us
          </Text>
        </div>
        <div className='flex gap-x-6 mr-6 items-center'>
          <MultiSelect
            data={['']}
            // label='Your favorite frameworks/libraries'
            placeholder='Search...'
            searchable
            clearable
            creatable
            searchValue={searchValue}
            onSearchChange={onSearchChange}
            rightSection={<CgSearch />}
            nothingFound='Nothing found'
            classNames={{
              input: 'bg-tertiaryColor border-none',
            }}
          />
          <Text className='text-white text-2xl'>
            <MdOutlineFavoriteBorder />
          </Text>
          <Text className='text-white text-2xl'>
            <CgShoppingCart />
          </Text>
          <Link to='/login'>
            <CgProfile />
          </Link>
        </div>
      </Header>
    </div>
  );
}
