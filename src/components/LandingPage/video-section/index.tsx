'use client';
import React, { useState, useRef } from 'react';
import { FaPlay } from 'react-icons/fa';

interface VideoPageProps {
  videoSrc: string;
  title: string;
  subtitle: string;
  description: string;
}

const VideoSection : React.FC<VideoPageProps>  = ({ videoSrc, title, subtitle, description }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className='max-w-screen-2xl mx-auto'>
    <div className={`relative w-full h-[300px] sm:h-[681px] overflow-hidden`} onClick={handlePlayPause}>
      <video
      onClick={handlePlayPause}
        ref={videoRef}
        className="absolute inset-0 object-cover w-full h-full"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      />

{!isPlaying && (
          <button onClick={handlePlayPause} className='absolute z-20 left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 transition'>
            <div className='border border-white text-white rounded-full h-16 w-16 flex justify-center items-center'>
              <FaPlay size={25} />
            </div>
          </button>
        )}

        <div className='relative z-10 flex items-center h-full'>
          <div className='bg-black/35 w-[300px] sm:w-[479px] 2xl:w-[635px] rounded-e-lg'>
            <div className='py-4 text-start px-2 md:pl-20 2xl:pl-48 text-white drop-shadow-lg'>
              <p className='lg:text-[43px] text-25 font-black drop-shadow-lg capitalize font-serif'>{title}</p>
              <p className='text-17 font-bold capitalize tracking-widest font-serif'>{subtitle}</p>
              <p className='mt-4 font-normal lg:text-14 text-14 w-[96%] text-justify'>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;