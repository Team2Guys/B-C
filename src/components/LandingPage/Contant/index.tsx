'use client'
import { FaWhatsapp } from 'react-icons/fa';
import { Button } from 'components/ui/button'; // Assuming this is your custom button component
import React, { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

// Define the props for the Contant component
interface ContantProps {
  TabData: {
    title: string;
    video: string;
    description: string;
  };
}

const Contant: React.FC<ContantProps> = ({ TabData }) => {
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
      <div className={' flex flex-col lg:flex-row gap-5 lg:gap-8 justify-center items-center mx-auto lg:max-w-screen-lg  border border-t-black'} onClick={handlePlayPause}>
        {/* First Flex Item - Video */}
        <div className=' w-full lg:w-1/2 h-full relative top-10'>
  <video
    onClick={handlePlayPause}
    ref={videoRef}
    src={TabData.video} // Use dynamic video
    autoPlay
    loop
    muted
    playsInline
    controls={false}
    className='w-full h-[323px] object-cover  '
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

        {/* Second Flex Item - Content */}
        <div className='flex flex-col justify-normal space-y-4 py-6 w-full lg:w-1/2'>
          <h2 className='font-serif font-extrabold text-sm sm:text-2xl lg:text-3xl'>
            {TabData.title} {/* Dynamic Title */}
          </h2>
          <p className='font-normal text-sm sm:text-base lg:text-lg text-black justify-normal'>
            {TabData.description} {/* Dynamic description */}
          </p>

          <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 uppercase'>
            <Button variant={"black"}>Book An Appointment</Button>
            <Button variant={"Gray"}>Call Now</Button>
            <Button className='flex items-center justify-center' variant={"Green"}>
              <FaWhatsapp size={25} />
              <p>Whatsapp</p>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contant;
