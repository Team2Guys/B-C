'use client'
import React from 'react'
import Container from 'components/Res-usable/Container/Container';
import { FaArrowRight } from "react-icons/fa6";

const Rollerpage= () => {
  return (
    <div className='bg-white 2xl:max-w-screen-2xl mx-auto '>
    <Container className='flex flex-col justify-center items-center pt-6 space-y-6'>
    <h2 className='text-3xl md:text-4xl xl:text-5xl font-serif font-black underline decoration-secondary decoration-2 text-center'>Roller Blinds</h2>
    <p className='font-normal md:text-16 lg:text-lg text-center leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
    <button className='text-white bg-secondary py-2 px-2 flex gap-2 text-18 font-bold' onClick={() => alert('Button clicked!')}>
        <FaArrowRight/>
        See All Collection</button>
    </Container>
    </div>
  );
};

export default Rollerpage;