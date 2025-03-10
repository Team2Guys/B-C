'use client';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { ISelectedPage } from 'types/types';
interface BannerProps {
  className?: string;
  title: string;
  selectedPage?: ISelectedPage | null;
  showButton?: boolean;
  colorSlider?: boolean;
}

const VideoBanner: React.FC<BannerProps> = ({
  className,
  title,
  selectedPage,
  showButton,
  colorSlider,
}) => {
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

  const handleTextClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  if (!selectedPage) {
    return null;
  }

  return (
    <div
      className={`relative w-full ${colorSlider ? 'h-full' : 'h-full  md:h-[55vh] lg:h-[65vh] xl:h-[75vh] 2xl:h-[84vh]'}  overflow-hidden ${className}`}
      onClick={handleVideoClick}
    >
        <>
          <video
            ref={videoRef}
            className="absolute object-fill w-full h-full md:h-[55vh] lg:h-[65vh] xl:h-[75vh] 2xl:h-[84vh]"
            src={selectedPage.src ? selectedPage.src : "/assets/video/blinds.mp4"}
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
          <div
            className={`relative flex ${colorSlider ? 'flex-col justify-end' : 'items-center'} h-full z-10`}
          >
            <div
              className=" bg-black/35 w-[300px] sm:w-[579px] 2xl:w-[635px] rounded-e-2xl py-2 md:py-5"
              onClick={handleTextClick}
            >
              <div className="py-2 md:py-4 text-start px-2 md:pl-20 2xl:pl-48 text-white drop-shadow-lg">
                <h2 className="lg:text-[44px] text-25 font-black drop-shadow-lg capitalize">
                  {title}
                </h2>
                <h1 className=" text-14 sm:text-17 font-bold capitalize tracking-widest">
                  {selectedPage?.heading}
                </h1>
                <p className="mt-2 sm:mt-4 font-normal text-12 lg:text-16 sm:text-14 w-[96%] uppercase">
                  {selectedPage?.paragraph}
                </p>
                {showButton ? (
                  <div className="mt-5">
                    <Link
                    aria-label='Book A Free Home Design Visit'
                        aria-hidden="true"
                      className="uppercase bg-secondary hover:bg-primary text-12 md:text-16 font-medium shadow-md text-white rounded-full px-4 py-3"
                      href={'/request-appointment'}
                    >
                      Book A Free Home Design Visit
                    </Link>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </>
    </div>
  );
};

export default VideoBanner;
