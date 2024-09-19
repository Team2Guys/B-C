'use client'
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const Button = () => {
  return (
    <div className='flex flex-wrap sm:flex-nowrap justify-center items-center gap-2 bg-[#A9B4A4] p-4'>
        <button className='text-white bg-black p-2 rounded-sm font-medium' onClick={() => alert('Button clicked!')}>
      BOOK AN APPOINTMENT
    </button>
    <button className='text-black bg-white p-2 rounded-sm font-medium' onClick={() => alert('Button clicked!')}>
      CALL NOW
    </button>
    <button className='text-white flex gap-2 bg-green-500 p-2 rounded-sm font-medium' onClick={() => alert('Button clicked!')}>
    <FaWhatsapp className='h-6 w-6' /> WATSAPP 
    </button>
    </div>
  );
};

export default Button;
