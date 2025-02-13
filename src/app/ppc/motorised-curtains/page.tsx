
import React from 'react';
import VideoSection from 'components/LandingPage/video-section';
import InstaVideoSection from 'components/LandingPage/InstaVideoSection';
import Button from 'components/LandingPage/ButtonSection';
import MoterizedService from 'components/LandingPage/MoterizedService';
import Header from 'components/LandingPage/Header';

import { InstacurtainData, KeyData, MotorisedSellingDataCurtain } from 'data/data';
import { benefits } from 'data/data';
import SellingFeatures from 'components/LandingPage/SellingFeatures';
import { TabData } from 'data/data';
import { fetchProducts } from 'config/fetch';
import Container from 'components/Res-usable/Container/Container';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import { Metadata } from 'next';
import CustomSection from 'components/LandingPage/Custommade';
import MoterizedBlinds from 'components/LandingPage/Moterized Blinds';
import KeyFeature from 'components/LandingPage/KeyFeature';

export const metadata:Metadata  = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const Custommade_MoterisedCurtains= async () => {
  const [products,  ] = await Promise.all([
      fetchProducts(),
    ]);
  return (
    <>
      <Header/>
      <VideoSection 
       videoSrc="/assets/video/curtains.mp4"
       title="Motorised Curtains"
       subtitle="Experience luxury and convenience with a single tap!"
       description="Wake up to sunlight naturally with automated timers and easy-to-use control options like remotes, wall switches, and smartphone apps."/>
      <CustomSection
      title="Custom-Made"
      subtitle="Motorised Curtains"
      description1="Our customers tell us they can’t imagine going back to manual curtains—and we know you’ll feel the same. Why we are different:"
      description2={[
        "Smart Home Integration",
        "Expert measuring and fitting",
      ]}
      imageSrc="/assets/images/Moterised-ads-blinds/Rectangle.png"
      imageAlt="Motorized Curtains"/>
      <KeyFeature title="Make Every Day More Comfortable" data={KeyData} />
      <MoterizedBlinds
      title="Convenience and Privacy" 
      subtitle="at Your Fingertips" 
      imageUrl="/assets/images/Moterised-ads-blinds/curtain.jpg" 
      benefits={benefits.motorized_curtains}  />
      <MoterizedService TabData={TabData.motorized_curtains}/>
      <SellingFeatures data={MotorisedSellingDataCurtain}/>
      <Button/>
      <InstaVideoSection data={InstacurtainData}  />
      <Container className="mt-10 md:mt-20">
      <RelatedProducts products={products || []} limit={4} bgcolor={true} />
      </Container>
      
    </>
  );
};

export default Custommade_MoterisedCurtains;