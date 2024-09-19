'use client'
import React, { useState, useRef } from 'react';
import { InstaData, ProductData } from 'data/data';
import Image from 'next/image';
import { FaPlay, FaPause } from 'react-icons/fa'; // Import icons from react-icons

const InstaVideoSection = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const handlePlay = (index: number) => {
    setPlayingIndex(index);
    const videoElement = videoRefs.current[index];
    if (videoElement) {
      videoElement.play();
    }
  };

  const handlePause = (index: number) => {
    setPlayingIndex(null);
    const videoElement = videoRefs.current[index];
    if (videoElement) {
      videoElement.pause();
    }
  };

  return (
    <>
      <div className='flex flex-col justify-center items-center mx-auto sm:space-y-3 lg:space-y-4 pt-6 bg-white'>
        <h2 className='text-black text-1xl sm:text-3xl lg:text-4xl font-serif font-extrabold'>Instagram</h2>
        <h2 className='text-black text-1xl sm:text-3xl lg:text-4xl font-normal font-serif text-nowrap'>Highlights Videos</h2>
      </div>
      <div className='grid grid-cols-3 justify-center items-center gap-3 mx-auto p-5 bg-white'>
        {InstaData.map((item, index) => (
          <div key={index} className='relative'>
            <video
              ref={(el: HTMLVideoElement | null) => {
                if (el) videoRefs.current[index] = el;
              }}
              src={item.video}
              autoPlay={false}
              loop
              muted
              playsInline
              controls={false}
              className='w-ful max-h-72'
            />
          <div className='absolute inset-0 flex justify-center items-center'>
              {playingIndex === index ? (
                <button
                  
                  onClick={() => handlePause(index)}
                >
                  
                </button>
              ): (
                <button
                  className='text-white border border-white p-3 rounded-full'
                  onClick={() => handlePlay(index)}
                >
                  <FaPlay size={20} />
                 
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className='lg:max-w-[90%] max-w-screen-2xl 2xl:max-w-screen-2xl mx-auto justify-start items-start p-5 space-y-1 sm:space-y-3 lg:space-y-4'>
        <h2 className='font-serif font-extrabold text-1xl sm:text-2xl lg:text-4xl '>Related Products</h2>
        <p className='font-normal text-xs sm:text-base md:text-lg text-justify 2xl:text-xl'>
          Lectus pulvinar tincidunt accumsun ullamcorper dolor acsed facilisis molestile aliquam.
        </p>
        <div className='grid grid-cols-3 justify-between items-center border pt-3 gap-4'>
          <div className='relative'>
            <Image
              src={"/assets/images/Landing/Rectangle 8.png"}
              alt="img"
              width={600}
              height={600}
            />
            <div className='absolute bottom-0 left-0 w-[100%] h-auto rounded-md py-2 flex justify-between items-center px-2 bg-white text-black'>
              <p className='font-normal text-xs md:text-base'>Vertical Blinds</p>
              <button
                className='bg-white border border-primary text-xs md:text-sm p-1 rounded-sm'
                onClick={() => alert('Button clicked!')}
              >
                View More
              </button>
            </div>
          </div>
          {ProductData.map((arr, index) => (
            <Image
              key={index}
              src={arr.image}
              alt="image"
              width={600}
              height={600}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default InstaVideoSection;