'use client'
import React, { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa'; // Importing play and pause icons

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
    <div className={`relative w-full h-[300px] sm:h-[681px] overflow-hidden mb-10`} onClick={handlePlayPause}>
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
        {isPlaying ? ""  :<div className='bg-white/60 rounded-full h-16 w-16 flex justify-center items-center'>
          <FaPlay size={25} />
        </div>}
      </button>

      {/* Text Section Overlay */}
      <div className="relative z-10 flex items-center h-full">
        <div className="bg-black/35 w-[300px] sm:w-[479px] 2xl:w-[635px] rounded-e-lg">
          <div className="py-4 text-start px-2 md:pl-20 2xl:pl-48 text-white drop-shadow-lg">
            <p className="lg:text-[43px] text-25 font-black drop-shadow-lg capitalize">
              Long Established
            </p>
            <p className="text-17 font-bold capitalize tracking-widest">
              Made to measure long established
            </p>
            <p className="mt-4 font-normal lg:text-16 text-14 w-[96%] uppercase">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;