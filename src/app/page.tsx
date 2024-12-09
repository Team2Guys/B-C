'use client';
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
