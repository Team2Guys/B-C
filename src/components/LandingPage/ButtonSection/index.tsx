'use client'
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import Container from 'components/Res-usable/Container/Container';

const Button = () => {
  return (
    <Container className='lg:max-w-full 2xl:max-w-full'>
    <div className='flex flex-col sm:flex-row flex-wrap sm:flex-nowrap justify-center items-center gap-2 bg-[#A9B4A4] p-4'>
        <button className='text-white bg-black p-2 rounded-sm font-medium hover:text-black hover:bg-white' onClick={() => alert('Button clicked!')}>
      BOOK AN APPOINTMENT
    </button>
    <button className='text-black bg-white p-2 rounded-sm font-medium hover:text-black hover:bg-white' onClick={() => alert('Button clicked!')}>
      CALL NOW
    </button>
    <button className='text-white flex bg-green-500 p-2 rounded-sm font-medium hover:text-black hover:bg-white' onClick={() => alert('Button clicked!')}>
    <FaWhatsapp className='h-6 w-6' /> WATSAPP 
    </button>
    </div>
    </Container>
  );
};

export default Button;
