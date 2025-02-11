'use client';
import Container from 'components/Res-usable/Container/Container';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import CButton from 'components/LandingPage/Custommade/Cbutton';
import { tabsData } from 'data/data';

interface ROOLER_TAB {
  setTabType:React.Dispatch<React.SetStateAction<string>>;

}

const RollerTabContant = ({setTabType}:ROOLER_TAB) => {
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

  return (
    <>
      <div className="bg-white 2xl:max-w-screen-2xl mx-auto pt-14 pb-5">
        <Container className="grid md:grid-cols-2 md:gap-4 xl:gap-10">
          <div className="space-y-5">
            {/* Tab Buttons */}
            <div className="flex justify-evenly 2xl:justify-normal gap-5 lg:gap-10 px-2">
              {tabsData.map((tab) => (
                <div
                  key={tab.id}
                  className={`flex-col space-y-3 cursor-pointer ${
                    activeTab === tab.id ? 'font-bold' : ''
                  }`}
                  onClick={() => {setActiveTab(tab.id); setTabType(tab.title)}}
                >
                 <div className={`${activeTab ===tab.id ? "bg-secondary" : "bg-[#af7373]"} p-3 rounded-full h-16 w-16 flex justify-center items-center`}>

                    <Image
                      src={tab.iconSrc}
                      alt={`${tab.title} icon`}
                      width={200}
                      height={200}
                      className="h-[49px] w-[32px]"
                    />
                  </div>
                  <h2 className={`border-b-2 ${activeTab === tab.id ? "border-b-secondary" : "border-b-white"} font-black text-[9px] xs:text-10  sm:text-12 lg:text-[14px] xl:text-[17px] 2xl:text-23 font-serif`}>{tab.title}</h2>
                  <p className="font-normal text-10 sm:text-11 lg:text-15 ">
                    {tab.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* Tab Content */}
            <div className='px-2'>
            <h2 className="font-black text-12 sm:text-20 xl:text-22 font-serif mb-3">{tabsData[activeTab].heading} </h2>
            <ul className="list-disc pl-6">{tabsData[activeTab].content.map((item, index) => (<li key={index} className="mb-2 text-10 sm:text-sm leadin-7 lg:text-lg sm:text-16">
            <strong>{item.title1}</strong> {item.description}</li>))}
            </ul>
            </div>
            <div className='sm:pl-6 flex flex-col pb-4 lg:pb-0 sm:flex-row md:flex-wrap lg:flex-nowrap gap-2 sm:gap- lg:gap-2 xl:gap-4 uppercase'>
           <CButton/>
          </div></div>
          <div className="w-full h-auto md:h-full">
            <video
              ref={videoRef}
              src={tabsData[activeTab].videoSrc}
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
