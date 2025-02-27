import Header from 'components/LandingPage/Header'
import VideoSection from 'components/LandingPage/video-section'
import React from 'react'
import Bullets from './bullets'
import LButton from './button';
import Shop from 'components/ppc-moterised/shop';
import FeaturesCarousel from 'components/ppc-moterised/features';
import { blindsData, Blindsfeatures } from 'data/data';
import CustomSection from 'components/ppc-moterised/customization';

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
      <Shop/>
      <FeaturesCarousel
      title="What Do Blinds & Curtains Offer You?"
      subtitle="Features"
      features={Blindsfeatures}
      defaultVisibleItems={4}
    />
    <CustomSection data={blindsData} />

    </>
  )
}

export default page