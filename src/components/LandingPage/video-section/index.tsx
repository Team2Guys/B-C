'use client';
import React, { useState, useRef } from 'react';

interface VideoPageProps {
  videoSrc: string;
  title: string;
  subtitle: string;
  description: string;
}

const VideoSection : React.FC<VideoPageProps>  = ({ videoSrc, title, subtitle, description }) => {
  return (
    <div className={`relative w-full h-[300px] sm:h-[681px] overflow-hidden`} >
      <video
        className="absolute inset-0 object-cover w-full h-full"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      />
   

        <div className='relative z-10 flex items-center h-full'>
        <div
              className=" bg-black/35 w-[300px] sm:w-[579px] 2xl:w-[635px] rounded-e-2xl py-2 md:py-5"
            >
              <div className="py-2 md:py-4 text-start px-2 md:pl-20 2xl:pl-48 text-white drop-shadow-lg">
                <h2 className="lg:text-[44px] text-25 font-black drop-shadow-lg capitalize">
                  {title}
                </h2>
                <h1 className=" text-14 sm:text-17 font-bold capitalize tracking-widest">
                  {subtitle}
                </h1>
                <p className="mt-2 sm:mt-4 font-normal text-12 lg:text-16 sm:text-14 w-[96%] uppercase">
                  {description}
                </p>
              </div>
            </div>
        </div>
      </div>
  );
};

export default VideoSection;