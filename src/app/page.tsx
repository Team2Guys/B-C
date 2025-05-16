
import React from 'react'
import Review_banner from 'components/ReviewBanner/Review_banner';
import type { Metadata } from 'next'
import Script from 'next/script';
import { schema } from 'data/schema';
import MainHero from 'components/Hero/main-hero';
import logo from '../../public/assets/images/blind-curtains-dubai/blinds-curtains-dubai1.png';
import SellerSlider from 'components/BestSellerSlider/SellerCard';
import SimpleSteps from 'components/SimpleSteps/SimpleSteps';
import MotorizeBlindCurtain from 'components/MotorizedBlindCurtains/MotorizedBlindCurtains';
import VideoReelsSlider from 'components/VideoSlider/VideoSlider';

export const metadata: Metadata = {
  metadataBase: new URL("https://blindsandcurtains.ae/"),

  title: 'Blinds and Curtains Dubai | Book a Free Appointment Today',
  description: 'If you are looking for blinds in dubai, or maybe curtains in Dubai, look no further. Our ZERO pressure appointment guarantee will ensure you are.....',
  openGraph: {
    title: 'Blinds and Curtains Dubai | Book a Free Appointment Today',
    description: 'If you are looking for blinds in dubai, or maybe curtains in Dubai, look no further. Our ZERO pressure appointment guarantee will ensure you are.....',
    url: 'https://blindsandcurtains.ae/',
    images: [
      {
        url: `${logo.src}`,
        alt: 'blindsandcurtains',
      },
    ],
  },
  alternates: {
    canonical: 'https://blindsandcurtains.ae/',
  },
}

export default async function Home() {
  return (
    <>
      {schema.map((script: any, index: number) =>
        <Script type="application/ld+json" id="home-json-ld" key={index}>
          {JSON.stringify(script)}

        </Script>
      )}

      <MainHero />
      <Review_banner />
      <SellerSlider />
      <SimpleSteps/>
      <MotorizeBlindCurtain/>
      <VideoReelsSlider />
      
    </>
  );
}
