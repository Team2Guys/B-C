import React from 'react';
import { NavData } from 'data/data';
import Image from 'next/image';
import { LuPhone } from "react-icons/lu";
import Link from 'next/link';
import { IoMailOpenOutline } from "react-icons/io5";
import SocialLink from 'components/Res-usable/social-link/social-link';
import Container from 'components/Res-usable/Container/Container';

const Header = () => {
  return (
    <div className='grid grid-cols-12 lg:grid-cols-10 gap-1 bg-white text-white max-w-screen-2xl mx-auto'>
      {NavData.map((arr, index) => (
        <div className='col-span-4 md:col-span-4 lg:col-span-2 bg-black w-full space-y-1' key={index}>
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
            <div className='text-10 sm:text-14 lg:text-base font-medium text-center'>{arr.title}</div>
            <div className='text-10 text-gray-400 sm:text-12 xl:text-14 text-center'>{arr.description}</div></div>
        </div>
      ))}

      {/* Contact Info Section */}
      <div className='flex-col justify-center items-center space-y-3 bg-black col-span-6 md:col-span-6 lg:col-span-2 pt-6'>
        <div className='flex gap-2 justify-center'>
          <LuPhone className='text-10 sm:text-14 text-center xl:text-16' />
          <Link href="tel:+042522025" className='text-10 sm:text-14 text-center xl:text-16'>
            04 252 2025
          </Link>
        </div>
        <div className='flex gap-2 justify-center'>
          <IoMailOpenOutline className='text-10 sm:text-14 text-center xl:text-16' />
          <a href="mailto:connect@twoguys.ae" className='text-10 sm:text-14 text-center xl:text-16'>
            connect@twoguys.ae
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className='bg-black col-span-6 md:col-span-6 lg:col-span-2 flex justify-center items-center'>
        <SocialLink />
      </div>
    </div>
  );
};

export default Header;
