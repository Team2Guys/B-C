
import React, { Suspense } from 'react'
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
import InfoTabs from 'components/NewHomecomponents/info';
import ComparisonTable from 'components/NewHomecomponents/comparisontabble';
import OurClient from 'components/Our-Client/OurClient';
import { fetchProducts } from 'config/fetch';
import { tabData } from 'data/Homedata/tabdata';

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
  const products = await fetchProducts();
  return (
    <>
      {schema.map((script: any, index: number) =>
        <Script type="application/ld+json" id="home-json-ld" key={index}>
          {JSON.stringify(script)}

        </Script>
      )}

      <MainHero />
      <Review_banner />
      <InfoTabs tabData={tabData} isHome />
      <ComparisonTable />
      <Suspense fallback='loading ...'>
        <SellerSlider products={products} />
      </Suspense>
      <SimpleSteps />
      <MotorizeBlindCurtain />
      <VideoReelsSlider />
      <OurClient />
    </>
  );
}
