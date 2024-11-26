'use client';
import Container from 'components/Res-usable/Container/Container';
import CustomSlider from 'components/slider/Slider';
import { colorData } from 'data/data';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();
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

  if (!selectedPage) {
    return null;
  }
  const handleNavigation = (event: React.MouseEvent, path: string) => {
    event.stopPropagation();
    if (event.ctrlKey || event.metaKey) {
      window.open(path, '_blank');
    } else {
      router.push(path);
    }
  };
  return (
    <div
      className={`relative w-full ${colorSlider ? 'h-[700px]' : 'h-[300px] md:h-[450px] 2xl:h-[681px]'}  overflow-hidden ${className}`}
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
      <div
        className={`relative flex ${colorSlider ? 'flex-col justify-end' : 'items-center'} h-full z-10`}
      >
        <div
          className=" bg-black/35 w-[300px] sm:w-[479px] 2xl:w-[635px] rounded-e-2xl py-2 md:py-5"
          onClick={handleTextClick}
        >
          <div className="py-2 md:py-4 text-start px-2 md:pl-20 2xl:pl-48 text-white drop-shadow-lg">
            <p className="lg:text-[44px] text-25 font-black drop-shadow-lg capitalize">
              {title}
            </p>
            <p className=" text-14 sm:text-17 font-bold capitalize tracking-widest">
              {selectedPage?.heading}
            </p>
            <p className="mt-2 sm:mt-4 font-normal text-12 lg:text-16 sm:text-14 w-[96%] uppercase">
              {selectedPage?.paragraph}
            </p>
            {showButton ? (
              <div className="mt-5">
                <Link
                  className="uppercase bg-white text-12 md:text-16 font-medium shadow-md text-black rounded-full px-4 py-3"
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
        {colorSlider && (
          <div className="bg-[#ffffffab] pt-10 mt-5">
            <Container>
              <div className="text-center">
                <h3 className="font-bold text-2xl">Shutters By Color</h3>
              </div>
              <CustomSlider
                className="Hero-slider custom-color-silder z-40 mb-5 pt-10"
                colorSlider={colorSlider}
              >
                {colorData.map((item, index) => (
                  <div
                    className="flex flex-col gap-2 mb-10 cursor-pointer"
                    key={index}
                    onClick={(event) =>
                      handleNavigation(
                        event,
                        item.url,
                      )
                    }
                  >
                    <div
                      className={`w-36 h-16 ${item.color} border border-black rounded-md`}
                    ></div>
                    <p className="w-36 text-13 text-center">{item.name}</p>
                  </div>
                ))}
              </CustomSlider>
            </Container>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoBanner;
