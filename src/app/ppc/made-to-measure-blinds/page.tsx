import Header from 'components/LandingPage/Header'
import VideoSection from 'components/LandingPage/video-section'
import React from 'react'
import Bullets from './bullets'
import LButton from './button';

const page = () => {
  return (
    <>
    <Header/>
    <VideoSection 
       videoSrc="/assets/video/blinds1.mp4"
       title="Transform Your Home with Premium Blinds and Curtains"
       subtitle={<Bullets/>}
       description={<LButton/>}
       width='w-[500px] sm:w-[630px] md:w-[715px] lg:w-[850px] 2xl:w-[990px]'
       height="h-[700px] sm:h-[681px]"/>
    </>
  )
}

export default page