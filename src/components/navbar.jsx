import React, { useState } from 'react';
import { Burger, MultiSelect, Text, MediaQuery, Header } from '@mantine/core';
import { CgProfile, CgShoppingCart, CgSearch } from 'react-icons/cg';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
// import { Link } from 'react-router-dom';

export default function NavBar() {
  const [opened, setOpened] = useState(false);
  const [searchValue, onSearchChange] = useState('');
  const title = opened ? 'Close navigation' : 'Open navigation';

  return (
    <div>
      <Header
        height={70}
        p='md'
        className='flex fixed top-0 left-0 right-0 bg-darkPink h-16 justify-between items-center border-none'
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
          <Text className='text-white text-center text-xl font-medium tracking-normal font-sans'>
            La Thrift Arc
          </Text>
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
          <Text className='text-white text-2xl'>
            <CgProfile />
          </Text>
        </div>
      </Header>
    </div>
  );
}
