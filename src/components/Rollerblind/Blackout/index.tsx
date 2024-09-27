"use client"
import React, { useState } from 'react';
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { IoArrowForward,IoArrowBack} from "react-icons/io5";
import Image from 'next/image';

const images = [
  "/assets/images/Rollerblind/Rectangle895.png",
  "/assets/images/Static/commercial-electric-blinds-hero-1_1.png",
  "/assets/images/Rollerblind/Rectangle895.png"
];

const BlackOut = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the previous image
  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next image
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className='2xl:max-w-screen-2xl mx-auto'>
        <h2 className='font-serif text-23 sm:text-4xl font-black bg-white pt-5 flex justify-center items-center gap-2 text-center pb-7'>
          <HiArrowLongLeft />
          Blackout
          <span className='font-normal flex text-nowrap'>Roller Blinds</span>
          <HiArrowLongRight />
        </h2>

        <div className='relative w-full h-auto'>
          {/* Overlay text */}
          <div className='absolute bottom-2 sm:bottom-4 px-6 lg:px-14 xl:px-20 text-white'>
            <h2 className='font-normal text-16 sm:text-22 lg:text-26 font-serif'>
              Lorem Ipsum Dolor Sit Amit
            </h2>
            <p className='font-normal text-10'>Loremipsum</p>
          </div>

          {/* Image Slider */}
          <Image
            className='2xl:w-[1600px]'
            src={images[currentImageIndex]}
            alt="image"
            width={1441}
            height={477}
          />

          {/* Previous and Next buttons */}
          <div className='absolute inset-1 sm:inset-2 lg:inset-7 flex justify-between items-center'>
            <button
              onClick={handlePrevious}
              className='bg-white bg-opacity-50 text-black lg:p-2 rounded-full ml-2 hover:bg-opacity-75'
            >
              
              <IoArrowBack className='text-20 md:text-30' />
            </button>
            <button
              onClick={handleNext}
              className='bg-white bg-opacity-50 text-black lg:p-2 rounded-full mr-2 hover:bg-opacity-75'
            >
             <IoArrowForward className='text-20 md:text-30'/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlackOut;