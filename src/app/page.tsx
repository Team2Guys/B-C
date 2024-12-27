
import React from 'react'
import Hero from 'components/Hero/Hero';
import HomeCard from '../components/Card/page';
import BlindsAndCurtainssection from '../components/Blind&Curtains/blinds&curtains';
import Appointment from 'components/Appointment/Appointment';
import FeatureProduct from 'components/feture-product/feature-product';
import VideoAutomation from 'components/video-Automation/video-Automation';
import Support from 'components/Res-usable/support/support';
import Review_banner from 'components/ReviewBanner/Review_banner';
import Banner from 'components/HomeBanner/Home_Banner';
import { bannerData } from 'data/data';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blinds and Curtains in Dubai  | Get A Free Quote Today',
  description: 'If you are looking for custom blinds and curtains in Dubai, we offer the best blinds and curtains for your home, buisness or any other space. Get a free quote today.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Appointment />
      <Review_banner />
      <HomeCard />
      <BlindsAndCurtainssection />
      <div className="mx-auto">
        <Banner data={bannerData} />
      </div>
      <FeatureProduct />
      <VideoAutomation />
      <Support />
    </>
  );
}
