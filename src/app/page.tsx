'use client';
import Hero from 'components/Hero/Hero';

import HomeCard from '../components/Card/page';
import BlindsAndCurtainssection from '../components/Blind&Curtains/blinds&curtains';
import Appointment from 'components/Appointment/Appointment';
import FeatureProduct from 'components/feture-product/feature-product';
import VideoAutomation from 'components/video-Automation/video-Automation';
import Support from 'components/Res-usable/support/support';
import Guarrenty from 'components/Res-usable/guarrenty/guarrenty';
import Testimonial from 'components/slider/testimonial';
import Review_banner from 'components/ReviewBanner/Review_banner';

import Banner from 'components/HomeBanner/Home_Banner';
import OurClient from 'components/Our-Client/OurClient';
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
      <Guarrenty />
      <Testimonial />

      <OurClient />
    </>
  );
}
