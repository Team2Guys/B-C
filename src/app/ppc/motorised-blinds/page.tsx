
import React from 'react';
import VideoSection from 'components/LandingPage/video-section';
import InstaVideoSection from 'components/LandingPage/InstaVideoSection';
import Button from 'components/LandingPage/ButtonSection';
import MoterizedService from 'components/LandingPage/MoterizedService';
import Header from 'components/LandingPage/Header';
import { InstablindData, KeyData, MotorisedSellingDataBlinds } from 'data/data';
import { benefits } from 'data/data';
import SellingFeatures from 'components/LandingPage/SellingFeatures';
import { TabData } from 'data/data';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import Container from 'components/Res-usable/Container/Container';
import { fetchProducts } from 'config/fetch';
import { Metadata } from 'next';
import CustomSection from 'components/LandingPage/Custommade';
import MoterizedBlinds from 'components/LandingPage/Moterized Blinds';
import KeyFeature from 'components/LandingPage/KeyFeature';
import { IProduct } from 'types/types';


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

const Custommade_MoterisedBlinds = async () => {
  const [products] = await Promise.all([fetchProducts()]);
  console.log("products",products)
  const blindsTitles = [
    "Roman Blinds",
    "Blackout Roller Blinds",
    "Zebra Blinds",
    "Wooden Blinds"
  ];

  const getBlindsProducts = (filterproduct: IProduct[]) => {
    return filterproduct.filter(product =>
      blindsTitles.includes(product?.title)
    );
  };
  
  const blindsProducts = getBlindsProducts(products || []);

  return (
    <>
      <Header/>
      <VideoSection 
       videoSrc="/assets/video/blinds.mp4"
       title="Motorised Blinds"
       subtitle="Control the light with a tap on your phone screen"
       description="Enjoy the benefits of comfortable modern living coupled with the long lasting style of Roman, Roller and Venetian Blinds."/>
      <CustomSection
      title="Custom-Made"
      subtitle="Motorized Blinds"
      description1="Upgrade your windows with motorized zebra blinds from Blinds & Curtains!"
      description2={[
        "Smart Home Integration",
        "Expert measuring and fitting",
      ]}
      imageSrc="/assets/images/Moterised-ads-blinds/Rectangle.png"
      imageAlt="Motorized Blinds"/>
      <KeyFeature title="Simplify Your Day With Motorised Blinds" data={KeyData} />
      <MoterizedBlinds
      title="Convenience and Privacy" 
      subtitle="at Your Fingertips" 
      imageUrl="/assets/images/Moterised-ads-blinds/Rectangle884.png" 
      benefits={benefits.motorized_blinds}  />

      
      <MoterizedService TabData={TabData.motorized_blinds}/>
      <SellingFeatures data={MotorisedSellingDataBlinds}/>
      <Button/>
      <InstaVideoSection data={InstablindData}/>
      <Container className="mt-10 md:mt-20">
      <RelatedProducts products={blindsProducts || []} limit={4} bgcolor={true}/>
      </Container>
    </>
  );
};

export default Custommade_MoterisedBlinds;