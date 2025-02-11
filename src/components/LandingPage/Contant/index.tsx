'use client'
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from 'components/ui/button'; 
import React, {useRef } from 'react';
import { GiPauseButton } from "react-icons/gi";
import Link from 'next/link';
interface ContantProps {
  TabData: {
    title: string;
    video: string;
    description: string;
  };
}

const Contant: React.FC<ContantProps> = ({ TabData }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <>
      <div className={' flex flex-col lg:flex-row gap-5 lg:gap-8 justify-center items-center mx-auto'}>
      <div className="w-full lg:w-1/2 h-full relative top-10">
        <video
          ref={videoRef}
          src={TabData.video}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          className="w-full h-[340px] object-cover"
        />
        <div className="absolute top-4 left-4 z-20 transition">
        <div className="border p-1 rounded-full border-black text-black flex justify-center items-center">
            <GiPauseButton size={20} />
        </div>
        </div>
      </div>
      <div className='flex flex-col justify-normal space-y-4 xl:space-y-6 w-full lg:w-1/2'>
      <h2 className='pl-6 lg:pl-0 font-serif font-extrabold text-base sm:text-2xl lg:text-3xl pt-10'>
        {TabData.title}</h2>
        <p className='pl-6 lg:pl-0 font-normal text-sm sm:text-base lg:text-lg text-black justify-normal leading-2'>
          {TabData.description}</p>
        <div className='md:pl-6 lg:pl-0 flex flex-col justify-center items-center pb-4 lg:pb-0 sm:flex-row gap-2 md:px-2 lg:px-0 sm:gap-4 uppercase xl:pt-4'>
      <Link className='w-full' href="/request-appointment/"><Button className='w-full' variant={"black"}>Book An Appointment</Button></Link>
      <Link  className='w-full' href="tel:+971544945339" target='_blank'><Button className='w-full' variant={"Gray"}>Call Now</Button></Link>
      <Link  className='w-full' href="https://wa.me/+971544945339" target='_blank'><Button className='flex w-full items-center justify-center' variant={"Green"}><FaWhatsapp size={25} /><p>Whatsapp</p></Button></Link></div>
      </div>
      </div>
    </>
  );
};

export default Contant;
