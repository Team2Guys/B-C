"use client"
import BathroomCategory from 'components/BathroomCategory/BathroomCategory';
import Container from 'components/Res-usable/Container/Container';
import VideoAutomation from 'components/video-Automation/video-Automation';
import VideoBanner from 'components/video-banner/video-banner';
import Support from 'components/Res-usable/support/support';
import React from 'react'
import { infoSectionData } from 'data/data';

const BathroomWindow = () => {
  return (
    <>
    <VideoBanner 
        title="Bathroom Window Blinds" 
        selectedPage={{
          heading: "made to measure  blinds",
          paragraph: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.",
        }} 
      />
    <Container className='my-12'>
    <div className="flex flex-col justify-center items-center space-y-4 px-2">
      <h2 className="text-xl sm:text-30 font-bold border border-b-[#A9B4A4] text-center">
        {infoSectionData.title}
      </h2>
      <p className="font-normal text-xs sm:text-16 leading-7 sm:leading-9 text-center text-[#666768]">
        {infoSectionData.description}
      </p>
    </div>
    <BathroomCategory/>
    </Container>
    <VideoAutomation/>
    <Container>
    <Support/>
    </Container>
    </>
  )
};

export default BathroomWindow;