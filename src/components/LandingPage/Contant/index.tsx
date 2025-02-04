'use client'
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from 'components/ui/button'; // Assuming this is your custom button component
import React, { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import CustomButton from '../Custommade/button';
import Link from 'next/link';

// Define the props for the Contant component
interface ContantProps {
  TabData: {
    title: string;
    video: string;
    description: string;
  };
}

const Contant: React.FC<ContantProps> = ({ TabData }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
   const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying); 
    }
  };
  return (
    <>
      <div className={' flex flex-col lg:flex-row gap-5 lg:gap-8 justify-center items-center mx-auto lg:max-w-screen-lg'}>
        <div className=' w-full lg:w-1/2 h-full relative top-10' onClick={handlePlayPause}>
         <video
    onClick={handlePlayPause}
    ref={videoRef}
    src={TabData.video}
    autoPlay
    loop
    muted
    playsInline
    controls={false}
    className='w-full h-[340px] object-cover  '
  />
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
<div className='flex flex-col justify-normal space-y-4 w-full lg:w-1/2'>
<h2 className='pl-6 lg:pl-0 font-serif font-extrabold text-base sm:text-2xl lg:text-3xl pt-10'>
  {TabData.title}</h2>
  <p className='pl-6 lg:pl-0 font-normal text-sm sm:text-base lg:text-lg text-black justify-normal leading-2'>
    {TabData.description}</p>
    <div className='sm:pl-6 flex flex-col justify-center items-center pb-4 lg:pb-0 sm:flex-row gap-2 px-2 sm:gap-4 uppercase'>
     <Link className='w-full' href="/request-appointment/"><Button className='w-full' variant={"black"}>Book An Appointment</Button></Link>
     <Link  className='w-full' href="tel:+971544945339" target='_blank'><Button className='w-full' variant={"Gray"}>Call Now</Button></Link>
     <Link  className='w-full' href="https://wa.me/+971544945339" target='_blank'><Button className='flex w-full items-center justify-center' variant={"Green"}><FaWhatsapp size={25} /><p>Whatsapp</p></Button></Link>   
     </div>
      </div>
      </div>
    </>
  );
};

export default Contant;
