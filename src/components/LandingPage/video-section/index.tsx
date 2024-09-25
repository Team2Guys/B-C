'use client'
import React, { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa'; // Importing play and pause icons
import Container from 'components/Res-usable/Container/Container';

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null); // Ref to the video element
  const [isPlaying, setIsPlaying] = useState(true); // State to track if video is playing

  // Function to toggle play/pause
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying); // Toggle play/pause state
    }
  };

  return (
    <div className='max-w-screen-2xl mx-auto'>
    <div className={`relative w-full h-[300px] sm:h-[681px] overflow-hidden`} onClick={handlePlayPause}>
      {/* Video Element */}
      <video
      onClick={handlePlayPause}
        ref={videoRef}
        className="absolute inset-0 object-cover w-full h-full"
        src="/assets/video/Agsons.mp4"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      />

      {/* Play/Pause Button */}
      <button
        onClick={handlePlayPause}
        className="absolute z-20 left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 transition"
      >
        {isPlaying ? ""  :<div className='border border-white text-white rounded-full h-16 w-16 flex justify-center items-center'>
          <FaPlay size={25} />
        </div>}
      </button>

      {/* Text Section Overlay */}
      <div className="relative z-10 flex items-center h-full">
        <div className="bg-black/35 w-[300px] sm:w-[479px] 2xl:w-[635px] rounded-e-lg">
          <div className="py-4 text-start px-2 md:pl-20 2xl:pl-48 text-white drop-shadow-lg">
            <p className="lg:text-[43px] text-25 font-black drop-shadow-lg capitalize font-serif">
              Motorized Blinds
            </p>
            <p className="text-17 font-bold capitalize tracking-widest font-serif">
              Made to Measure Motorized Blinds
            </p>
            <p className="mt-4 font-normal lg:text-14 text-14 w-[96%] text-justify">
              Motorized Blinds Or Electric Blinds Are Typically Operated By A Remote Control.You Can Even Add Smartphone Control Funcctionality To Allow You Total Control Functionality To Allow You Total Control Of Your Blinds, Home or Away.
            </p>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
};

export default VideoSection;