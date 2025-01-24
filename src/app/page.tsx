
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
import { fetchCategories, fetchProducts } from 'config/fetch';

export const metadata: Metadata = {
  title: 'Blinds and Curtains Dubai | Book a Free Appointment Today',
  description: 'If you are looking for blinds in dubai, or maybe curtains in Dubai, look no further. Our ZERO pressure appointment guarantee will ensure you are.....',
  openGraph: {
    title: 'Blinds and Curtains Dubai | Book a Free Appointment Today',
    description: 'If you are looking for blinds in dubai, or maybe curtains in Dubai, look no further. Our ZERO pressure appointment guarantee will ensure you are.....',
    url: 'https://blindsandcurtains.ae/why-choose-blinds-curtains/',
    images: [
      {
        url: 'https://blindsandcurtains.ae/blindsandcurtains.jpg',
        alt: 'blindsandcurtains',
      },
    ],
  },
  alternates: {
    canonical: 'https://blindsandcurtains.ae/why-choose-blinds-curtains/',
  },
}

export default async function Home() {
  const [products, categories] = await Promise.all([fetchProducts(), fetchCategories()]);
  
  return (
    <>
      <Hero />
      <Appointment />
      <Review_banner />
      <HomeCard categories={categories} />
      <BlindsAndCurtainssection />
      <Banner data={bannerData} />
      <FeatureProduct products={products} categories={categories} />
      <VideoAutomation />
      <Support />
    </>
  );
}
