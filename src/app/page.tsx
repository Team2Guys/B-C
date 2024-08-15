'use client';
import Hero from 'components/Hero/Hero';

import HomeCard from '../components/Card/page';
import BlindsAndCurtainssection from '../components/Blind&Curtains/blinds&curtains';
import Appointment from 'components/Appointment/Appointment';
import Header from 'components/Res-usable/header/Header';
import Footer from 'components/Res-usable/Footer/Footer';
import Container from 'components/Res-usable/Container/Container';
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
      <OurClient />
    </>
  );
}