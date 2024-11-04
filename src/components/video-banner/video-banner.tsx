'use client';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { FaPlay } from 'react-icons/fa';

interface BannerProps {
  className?: string;
  title: string;
}

const VideoBanner: React.FC<BannerProps> = ({ className, title }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Function to prevent video control when clicking on the text section
  const handleTextClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div
      className={`relative w-full h-[300px] md:h-[450px] 2xl:h-[681px] overflow-hidden ${className}`}
      onClick={handleVideoClick}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 object-cover w-full h-full"
        src="/assets/video/Agsons.mp4"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      />
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <FaPlay className="text-white text-4xl" />
        </div>
      )}
      <div className="relative  flex items-center h-full z-10">
        <div
          className=" bg-black/35 w-[300px] sm:w-[479px] 2xl:w-[635px] rounded-e-2xl py-2 md:py-5"
          onClick={handleTextClick}
        >
          <div className="py-2 md:py-4 text-start px-2 md:pl-20 2xl:pl-48 text-white drop-shadow-lg">
            <p className="lg:text-[43px] text-25 font-black drop-shadow-lg capitalize">
              {title}
            </p>
            <p className=" text-14 sm:text-17 font-bold capitalize tracking-widest">
              made to measure {title}
            </p>
            <p className="mt-2 sm:mt-4 font-normal text-12 lg:text-16 sm:text-14 w-[96%] uppercase">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
            </p>
            <div className="mt-5">
              <Link
                className="uppercase bg-white text-12 md:text-16 font-medium shadow-md text-black rounded-full px-4 py-3"
                href={'/request-appointment'}
              >
                Book A Free Home Design Visit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
