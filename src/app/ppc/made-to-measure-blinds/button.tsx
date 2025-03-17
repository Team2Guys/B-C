import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link'
import { IoCallOutline } from 'react-icons/io5';

const LButton = () => {
  return (
    <div className='w-full flex flex-wrap sm:flex-nowrap justify-start items-start gap-2'>
    <Link className='w-full sm:w-fit text-sm sm:text-17 text-white text-center bg-secondary py-3 px-4 rounded-sm font-medium hover:bg-primary' href="/request-appointment/">
    BOOK A FREE APPOINTMENT
    </Link>
    <Link className='w-full flex justify-center items-center  sm:w-fit text-sm sm:text-17 text-center bg-secondary px-4 py-3 rounded-sm font-medium hover:bg-primary text-white' href="tel:+04 252 2025" target='_blank'>
    <IoCallOutline size={20} />CALL US
    </Link>
    <Link className='w-full sm:gap-1 text-sm sm:text-17 sm:w-fit flex justify-center items-center text-white  bg-green-500 py-3 px-4 rounded-sm font-medium hover:bg-primary' href="https://wa.me/+971544945339" target='_blank'>
    <FaWhatsapp size={20} />
    WHATSAPP </Link>
   </div>
  )
}

export default LButton