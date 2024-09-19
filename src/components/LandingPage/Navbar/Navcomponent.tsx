import React from 'react';
import { NavData } from 'data/data';
import Image from 'next/image';
import { LuPhone } from "react-icons/lu";
import Link from 'next/link';
import { IoMailOpenOutline } from "react-icons/io5";
import SocialLink from 'components/Res-usable/social-link/social-link';

const NavComponent = () => {
  return (
    <>
      <div className='grid grid-cols-12 lg:grid-cols-10 gap-1 bg-white text-white'>
        {NavData.map((arr, index) => (
          <div className='col-span-4 md:col-span-3 lg:col-span-2 bg-black w-full' key={index}>
            <div className='flex flex-col justify-center items-center space-y-3 py-3'>
            <Image 
            className='text-center h-[28px] w-[41px]'
            height={100} 
            width={100} 
            src={arr.image} 
            alt={arr.title || 'default alt text'}  // Provide a fallback value
/>
              <div className='text-sm md:text-base lg:text-lg font-medium text-center'>{arr.title}</div>
              <div className='text-14 text-gray-400 text-justify xl:text-16'>{arr.description}</div>
            </div>
          </div>
        ))}

        {/* Contact Info Section */}
        <div className='flex-col justify-center items-center space-y-3 bg-black col-span-4 md:col-span-3 lg:col-span-2 border pt-6'>
          <div className='flex gap-2 justify-center items-center'>
            <LuPhone className='text-14 text-center xl:text-16' />
            <div className='text-14 text-center xl:text-16'>
              <Link href="tel:042522025">04 252 2025</Link>
            </div>
          </div>
          <div className='flex gap-2 justify-center'>
            <IoMailOpenOutline className='text-14 text-center xl:text-16' />
            <div className='text-14 text-center xl:text-16'>
              <Link href="mailto:connect@twoguys.ae">connect@twoguys.ae</Link>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className='bg-black col-span-8 md:col-span-3 lg:col-span-2 flex justify-center items-center'>
          <SocialLink />
        </div>
      </div>
    </>
  );
};

export default NavComponent;