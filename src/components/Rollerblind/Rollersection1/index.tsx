'use client';
import React from 'react';
import Container from 'components/Res-usable/Container/Container';
import { FaArrowRight } from 'react-icons/fa6';
import Link from 'next/link';

const rollerSection1= [
    {
      title: 'Made-to-measure Roller Blinds',
      description:
        'Our custom-made roller blind collection is made to last and expertly fitted to make you smile. Our roller blinds are both practical and stylish, with options like blackout, sunscreen, and even translucent to suit every window in your home.',
      linkText: 'See All Collection',
      linkHref: '/',
    },
  ];
  
const RollerBlinds = () => {
  return (
    <div className="bg-white 2xl:max-w-screen-2xl mx-auto">
      {rollerSection1.map((blind,index) => (
        <Container key={index} className="flex flex-col justify-center items-center pt-6 space-y-4 md:space-y-6 text-center">
          <h2 className="text-20 sm:text-3xl xl:text-5xl font-serif font-black underline decoration-secondary decoration-2">
            {blind.title}
          </h2>
          <p className="text-center px-2 font-normal text-12 sm:text-14 lg:text-lg leading-5 sm:leading-6 max-w-screen-lg xl:max-w-screen-xl">
            {blind.description}
          </p>
          <Link
            href={blind.linkHref}
            className="flex items-center gap-2 bg-secondary text-white p-2 text-10 sm:text-14 font-bold hover:bg-opacity-90 transition-all"
          >
            <FaArrowRight />
            {blind.linkText}
          </Link>
        </Container>
      ))}
    </div>
  );
};

export default RollerBlinds;
