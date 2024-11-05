'use client'
import React, { useState, useRef } from 'react';
import { InstaData, ProductData } from 'data/data';
import Image from 'next/image';
import { FaPlay, FaPause } from 'react-icons/fa';
import Container from 'components/Res-usable/Container/Container';

const InstaVideoSection = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const handlePlayPause = (index: number) => {
    const videoElement = videoRefs.current[index];
    if (videoElement) {
      if (playingIndex === index) {
        videoElement.pause();
        setPlayingIndex(null); // Set playingIndex to null to indicate no video is playing
      } else {
        // Pause the currently playing video if there is one
        if (playingIndex !== null) {
          const currentVideoElement = videoRefs.current[playingIndex];
          if (currentVideoElement) {
            currentVideoElement.pause();
          }
        }
        videoElement.play();
        setPlayingIndex(index); // Set the index of the currently playing video
      }
    }
  };

  return (
    <>
    <Container className='lg:max-w-full 2xl:max-w-full'>
      <div className='flex flex-col justify-center items-center mx-auto sm:space-y-3 lg:space-y-4 pt-6 bg-white'>
        <h2 className='text-black text-1xl sm:text-3xl lg:text-5xl font-serif font-extrabold'>Instagram</h2>
        <h2 className='text-black text-1xl sm:text-3xl lg:text-5xl font-normal font-serif text-nowrap'>Highlights Videos</h2>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-3 mx-auto pt-10 bg-white'>
        {InstaData.map((item, index) => (
          <div key={index} className='relative' onClick={() => handlePlayPause(index)}>
          
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
              className='w-full object-cover h-full md:h-[614.68px]'
              
            />
            
            <div className='absolute inset-0 flex justify-center items-center'>
              {playingIndex === index ? null : (
                <button
                  className='text-white border border-white p-3 rounded-full'
                  // Use a single function for play/pause
                >
                  <FaPlay size={20} />
                </button>
              )}
              {playingIndex === index && (
                <button
                  className=' p-3 rounded-full'
                >
                  
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      </Container>
    </>
  );
};

export default InstaVideoSection;
