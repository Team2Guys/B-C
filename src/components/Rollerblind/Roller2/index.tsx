'use client'
import Container from 'components/Res-usable/Container/Container';
import { RollerBlindData } from 'data/data';
import { Button } from 'components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';
import React, { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import Image from 'next/image';

const Roller2 = () => {
    const [activeTab, setActiveTab] = useState(0);
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
    <>
      <div className='bg-white 2xl:max-w-screen-2xl mx-auto pt-14 pb-5'>
        <Container>
          <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
            {/* Right Side */}
            <div className='w-full md:w-1/2'>
              {RollerBlindData.map((arr, index) => (
                <div key={index} className='mb-6'>
                  <div className='flex sm:flex-row justify-evenly 2xl:justify-normal pl-5 gap-5 lg:gap-10'>
                    <div className='flex-col space-y-3'>
                        <div className='bg-secondary p-3 rounded-full h-16 w-16 flex justify-center items-center'>

                      <Image
                        src={arr.icon}
                        alt="icon"
                        width={200}
                        height={200}
                        className='h-[49px] w-[32px]'
                      />
                        </div>
                      <h2 className='font-black text-lg sm:text-20 xl:text-22 font-serif'>
                        {arr.heading}
                      </h2>
                      <p className='font-normal text-sm sm:text-15'>{arr.description}</p>
                    </div>
                    <div className='flex-col space-y-3'>
                    <div className='bg-secondary p-3 rounded-full h-16 w-16 flex justify-center items-center'>
                        <Image
                        src={arr.icon}
                        alt="icon"
                        width={200}
                        height={200}
                        className='h-[49px] w-[32px]'/>
                        </div>
                      <h2 className='font-black text-lg sm:text-20 font-serif xl:text-22'>
                        {arr.heading1}
                      </h2>
                      <p className='font-normal text-sm sm:text-15'>{arr.description1}</p>
                    </div>
                  </div>

                  <div className='mt-4 space-y-3 pl-5 sm:space-y-4'>
                    <h2 className='text-18 sm:text-20 font-black font-serif xl:text-22'>Lorem Ipsum Blinds:</h2>
                    <ul className='list-disc pl-5'>
                      {arr.list.map((item, idx) => (
                        <li className='text-sm sm:text-16 lg:text-lg mb-2 leading-7' key={idx}>
                          <strong className='font-bold'>{item.title}</strong> <span>{item.para}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button Group */}
                  <div className='flex flex-wrap md:flex-nowrap gap-2 uppercase lg:pt-4 pl-5'>
                    <Button variant={"black"}>Book An Appointment</Button>
                    <Button variant={"Gray"}>Call Now</Button>
                    <Button className='flex items-center justify-center' variant={"Green"}>
                      <FaWhatsapp size={25} />
                      <p>WhatsApp</p>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Left Side - Video */}
            <div className='w-full md:w-1/2 h-auto relative' onClick={handlePlayPause}>
              <video
                onClick={handlePlayPause}
                ref={videoRef}
                src={"/assets/video/Agsons.mp4"}
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className='object-cover w-full h-auto xl:h-[414px] xl:w-[646px] md:h-[500px]'
              />
               {/* Play/Pause Button */}
               {!isPlaying && (
                <button
                onClick={handlePlayPause}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 transition"
    >
        <div className='border border-white text-white rounded-full p-3 flex justify-center items-center'>
        <FaPlay size={25} />
        </div>
        </button>
    )}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Roller2;