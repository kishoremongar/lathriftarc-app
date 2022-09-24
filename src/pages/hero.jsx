import React from 'react';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { Image, Text } from '@mantine/core';

export default function Hero() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel
      mx='auto'
      style={{ width: '100%', maxHeight: '30rem' }}
      withIndicators
      // height={200}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      classNames={{
        control: 'text-white',
      }}
    >
      <Carousel.Slide>
        <Image
          className='bg-cover brightness-50'
          src='https://res.cloudinary.com/fushigina-shinobi/image/upload/v1664032324/slide1_xhwnt4.jpg'
        />
        <div className='absolute left-0 right-0 top-44'>
          <Text className='customH1'>The joy of dressing is an Art.</Text>
          <Text className='customH4 text-2xl'>
            🌍 Vintage - Thrifted - New Clothes
          </Text>
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          className='bg-cover brightness-50'
          src='https://res.cloudinary.com/fushigina-shinobi/image/upload/v1664032325/slide2_uqkhhb.jpg'
        />
        <div className='absolute left-0 right-0 top-44'>
          <Text className='customH1'>
            Clothes mean nothing until someone lives in them.
          </Text>
          <Text className='customH4 text-2xl'>
            🌍 Vintage - Thrifted - New Clothes
          </Text>
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          className='bg-cover brightness-50'
          src='https://res.cloudinary.com/fushigina-shinobi/image/upload/v1664032325/slide3_bpqyjw.jpg'
        />
        <div className='absolute left-0 right-0 top-44'>
          <Text className='customH1'>Reduce, Reuse, Recycle</Text>
          <Text className='customH4 text-2xl'>
            🌍 Vintage - Thrifted - New Clothes
          </Text>
        </div>
      </Carousel.Slide>
    </Carousel>
  );
}
