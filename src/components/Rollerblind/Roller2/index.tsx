'use client';
import Container from 'components/Res-usable/Container/Container';
import { Button } from 'components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';
import React, { useState, useRef } from 'react';
import Image from 'next/image';

const RollerTabContant = () => {
  const [activeTab, setActiveTab] = useState(0);
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

  const tabs = [
    {
      id: 0,
      title: 'Blackout Roller Blinds',
      subtitle: 'What is Blackout Roller Blind Ibsum?',
      heading: "Lorem Ipsum Blinds:",
      content: [
        {
          title1: 'Automated Scheduling',
          description: 'Set timers to automatically open or close your blinds at specific times for added convenience.'
        },
        {
          title1: 'Enhanced Convenience',
          description: 'Enjoy the ease of controlling your blinds with a remote or smartphone app, eliminating the need for manual adjustments.'
        },
        {
          title1: 'Automated Scheduling',
          description: 'Set timers to automatically open or close your blinds at specific times for added convenience.'
        },
      ],
      iconSrc: '/assets/images/Rollerblind/roller.png',
      videoSrc: '/assets/video/Agsons.mp4', 
    },
    {
      id: 1,
      title: 'Sunscreen Roller Blinds',
      subtitle:'What is Sunscreen Roller Blind Ibsum?',
      heading: "Lorem Ipsum Blinds:",
      content: [
        {
          title1: 'Automated Scheduling',
          description: 'Set timers to automatically open or close your blinds at specific times for added convenience.'
        },
        {
          title1: 'Enhanced Convenience',
          description: 'Enjoy the ease of controlling your blinds with a remote or smartphone app, eliminating the need for manual adjustments.'
        },
        {
          title1: 'Automated Scheduling',
          description: 'Set timers to automatically open or close your blinds at specific times for added convenience.'
        },
      ],
      iconSrc: '/assets/images/Rollerblind/roller.png',
      videoSrc: '/assets/video/Agsons.mp4', 
    },
  ];

  return (
    <>
      <div className="bg-white 2xl:max-w-screen-2xl mx-auto pt-14 pb-5">
        <Container className="grid md:grid-cols-2 md:gap-4 xl:gap-10">
          <div className="space-y-5">
            {/* Tab Buttons */}
            <div className="flex justify-evenly 2xl:justify-normal gap-5 lg:gap-10 px-2">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`flex-col space-y-3 cursor-pointer ${
                    activeTab === tab.id ? 'font-bold' : ''
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                 <div className={`${activeTab ===tab.id ? "bg-secondary" : "bg-[#F8F8F8]"} p-3 rounded-full h-16 w-16 flex justify-center items-center`}>

                    <Image
                      src={tab.iconSrc}
                      alt={`${tab.title} icon`}
                      width={200}
                      height={200}
                      className="h-[49px] w-[32px]"
                    />
                  </div>
                  <h2 className={`border-b-2 ${activeTab === tab.id ? "border-b-secondary" : "border-b-white"} font-black text-10 sm:text-12 lg:text-18 xl:text-22 font-serif`}>{tab.title}</h2>
                  <p className="font-normal text-10 sm:text-11 lg:text-15 ">
                    {tab.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* Tab Content */}
            <div className='px-2'><h2 className="font-black text-12 sm:text-20 xl:text-22 font-serif mb-3">
    {tabs[activeTab].heading} </h2>
    <ul className="list-disc pl-6">
    {tabs[activeTab].content.map((item, index) => (
      <li key={index} className="mb-2 text-10 sm:text-sm leadin-7 lg:text-lg sm:text-16">
       <strong>{item.title1}</strong> {item.description}
     </li>
    ))}
  </ul>
  </div>
  <div className='sm:pl-6 flex flex-col pb-4 lg:pb-0 sm:flex-row gap-2 sm:gap-4 uppercase'>
            <Button variant={"black"}>Book An Appointment</Button>
            <Button variant={"Gray"}>Call Now</Button>
            <Button className='flex items-center justify-center' variant={"Green"}>
              <FaWhatsapp size={25} />
              <p>Whatsapp</p>
            </Button>
          </div>

  </div>

          <div className="w-full h-auto md:h-full">
            <video
              ref={videoRef}
              src={tabs[activeTab].videoSrc}
              className="w-full h-full object-cover"
              autoPlay
              muted playsInline
              controls={false}
              loop
              onClick={handlePlayPause}
            />
            
          </div>
        </Container>
      </div>
    </>
  );
};

export default RollerTabContant;
