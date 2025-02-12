import React from 'react';
import { NavData } from 'data/data';
import Image from 'next/image';
import { LuPhone } from "react-icons/lu";
import Link from 'next/link';
import { IoMailOpenOutline } from "react-icons/io5";
import SocialLink from 'components/Res-usable/social-link/social-link';

const Header = () => {
  return (
    <div className='bg-black'>
    <div className='bg-black 2xl:max-w-screen-2xl mx-auto'>
    <div className='grid grid-cols-12 lg:grid-cols-10 gap-1 bg-white text-white lg:max-w-[97%] 2xl:max-w-screen-full mx-auto'>
      {NavData.map((arr, index) => (
        <div className='col-span-4 md:col-span-4 lg:col-span-2 bg-black w-full h-auto pb-1' key={index}>
          <div className='flex flex-col justify-center items-center py-3'>
            <Image 
              className='text-center sm:h-[30px] sm:w-[36px] h-5 w-5'
              height={500} 
              width={500} 
              src={arr.image} 
              alt={arr.title || 'default alt text'}  
            />
            </div>
            <div>
            <div className='text-10 sm:text-12 font-medium text-center'>{arr.title}</div>
            <div className='text-10 text-gray-400 sm:text-12 text-center'>{arr.description}</div></div>
        </div>
      ))}

      <div className='flex-col justify-center items-center space-y-3 bg-black col-span-12 md:col-span-6 lg:col-span-2 py-3 sm:pt-8'>
        <div className='flex gap-2 justify-center'>
          <LuPhone className='text-12 xs:text-14 text-center sm:text-16 md:text-18' />
          <Link target='blank' href="tel:+971544945339" className='text-10 sm:text-12 md:text-14 text-center'>
          +971 54 494 5339
          </Link>
        </div>
        <div className='flex gap-1 xs:gap-2 justify-center items-center'>
          <IoMailOpenOutline className='text-12 xs:text-14 text-center sm:text-16 md:text-18 lg:hidden xl:block' />
          <Link href="mailto:sales@blindsandcurtains.ae" className='text-10 sm:text-14 lg:text-13 xl:text-14 text-center'>
          sales@blindsandcurtains.ae
          </Link>
        </div>
      </div>
      <div className='bg-black col-span-6 md:col-span-6 lg:col-span-2 md:flex justify-center items-center pt-2 lg:pr-3 hidden'>
        <SocialLink />
      </div>
    </div>
    </div>
    </div>
  );
};

export default Header;
