'use client';
import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';
const Button = () => {
  return (
      <div className='flex flex-col text-sm sm:text-xs w-full sm:flex-row flex-wrap sm:flex-nowrap justify-center items-center gap-2 bg-[#A9B4A4] p-4'>
        <Link className='w-full sm:w-fit text-white text-center bg-black py-3 px-4 rounded-sm font-medium hover:bg-primary' href="/request-appointment/">
          BOOK A FREE APPOINTMENT
        </Link>
        <Link className='w-full  sm:w-fit text-center text-black bg-white p-3 rounded-sm font-medium hover:bg-primary hover:text-white' href="tel:+971544945339" target='_blank'>
            CALL NOW
        </Link>
        <Link className='w-full sm:gap-1 sm:w-fit justify-center items-center text-white flex bg-green-500 py-3 px-4 rounded-sm font-medium hover:bg-primary' href="https://wa.me/+971544945339" target='_blank'>
        <FaWhatsapp size={20} />WATSAPP </Link>
        </div>
  );
};

export default Button;

