'use client'
import React from 'react'
import Container from 'components/Res-usable/Container/Container';
import { FaArrowRight } from "react-icons/fa6";

const RollerBlinds= () => {
  return (
    <div className='bg-white 2xl:max-w-screen-2xl mx-auto '>
    <Container className='flex flex-col justify-center items-center pt-6 space-y-6'>
    <h2 className='text-20 sm:text-3xl xl:text-5xl font-serif font-black underline decoration-secondary decoration-2 text-center'>Made-to-measure Roller Blinds</h2>
    <p className='font-normal text-12 sm:text-14 lg:text-lg text-center leading-5 sm:leading-6 max-w-screen-2xl'> Our custom-made roller blind collection is made to last and expertly fitted to make you smile. Our roller blinds are both practical and stylish, with options like blackout, sunscreen and even translucent to suit every window in your home.
    </p>
    <button className='text-white bg-secondary py-2 px-2 flex gap-2 text-10 sm:text-14 font-bold' onClick={() => alert('Button clicked!')}>
        <FaArrowRight/>
        See All Collection</button>
    </Container>
    </div>
  );
};
export default RollerBlinds;