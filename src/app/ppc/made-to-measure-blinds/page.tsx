
import React from 'react'
import Bullets from './bullets'
import LButton from './button';
import {banners, Blindbannerfeatures, blindcrousal, blindimages, blindsData, Blindsfeatures, BlindsTabData, BlindvideoData, Chooseusblind, chooseusblind, consultationblindData, exploreblindData, serviceLocationsData, Tab1categories, workingProcessblindData} from 'data/data';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

//Dynamic imports
const CustomSection = dynamic(() => import('components/ppc-moterised/customization'));
const FeaturesCarousel = dynamic(() => import('components/ppc-moterised/features'));
const VideoSection = dynamic(() => import('components/LandingPage/video-section'));
const Header = dynamic(() => import('components/LandingPage/Header'));
const Videoblind = dynamic(() => import('components/ppc-moterised/videosection'));
const Blindtype = dynamic(() => import('components/ppc-moterised/blindtype'));
const BlindsTabs = dynamic(() => import('components/ppc-moterised/Tabcomponnet'));
const WhyChooseUs = dynamic(() => import('components/ppc-moterised/whychoose'));
const ExploreBlinds = dynamic(() => import('components/ppc-moterised/blindsrange'));
const WorkingProcess = dynamic(() => import('components/ppc-moterised/working'));
const Carousel  = dynamic(() => import('components/ppc-moterised/blindcrousal'));
const ServiceLocations = dynamic(() => import('components/ppc-moterised/servicelocation'));
const RollerReviews = dynamic(() => import('components/Rollerblind/Roller_Reviews/Review'));
const Banner = dynamic(() => import('components/HomeBanner/Home_Banner'));
const BookingForm = dynamic(() => import('components/ppc-moterised/Bookingform'));
const HeroBanner = dynamic(() => import('components/ppc-moterised/hero'));
const ImageGallery = dynamic(() => import('components/ppc-moterised/Grid'));
const Shop = dynamic(() => import('components/ppc-moterised/shop'));

export const metadata: Metadata = {
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

const Made_to_Measure_Blinds = async () => {
  const locationData = serviceLocationsData[0];
  return (
    <>
    <Header/>
    <div id="Main">
    <VideoSection 
       videoSrc="https://res.cloudinary.com/drqv25wjx/video/upload/v1741848607/blinds1_cdiar8.mp4"
       title="Stylish, Customised Blinds – Free Measurement & Installation"
       subtitle={<Bullets features={Blindbannerfeatures}/>}
       description={<LButton/>}
       width='w-[500px] sm:w-[630px] md:w-[715px] lg:w-[850px] 2xl:w-[990px]'
       height="h-[700px] sm:h-[681px]"/>
      </div>
      <Shop/>
      <FeaturesCarousel
      title="What Do Blinds & Curtains Offer You?"
      subtitle="Features"
      features={Blindsfeatures}
      defaultVisibleItems={4}
    />
    <CustomSection data={blindsData} />
    <Videoblind videos={BlindvideoData} heading="Our Recent Blinds Dubai Projects" />
    <Blindtype heading="Browse Our Top-Selling Products" />
    <BlindsTabs blindsData={BlindsTabData} tabCategories={Tab1categories} />
    <WhyChooseUs
     paragraph={Chooseusblind.text}
     features={chooseusblind}
     backgroundImage="https://res.cloudinary.com/drqv25wjx/image/upload/v1741847309/chooseus_ptz9id.png"/>
    <ExploreBlinds data={exploreblindData[0]} />
    <ExploreBlinds data={exploreblindData[1]} reverse />
    <WorkingProcess data={workingProcessblindData}/>
    <ExploreBlinds data={consultationblindData[1]} reverse className='h-auto lg:!h-[370px] xl:!h-[370px]' buttonsClassName='xl:!mt-20' hideViewMore  hidefeatures/>
    <Carousel data={blindcrousal} />
    <Blindtype heading="Professional Installation Services For Your Interior" className='text-white' />
    <ImageGallery images={blindimages} columns={4}/>
    <HeroBanner/>
    <Blindtype heading="LOCATION" />
    <ServiceLocations {...locationData} />
    <RollerReviews imageSrc='https://res.cloudinary.com/drqv25wjx/image/upload/v1741862530/blinds_vrysqv.jpg'/>
    <div className='bg-white py-3 md:py-9'></div>
    <Banner {...banners.Blind} />
    <div id="booking-form">
    <BookingForm />
    </div>
    </>  
  )
}

export default Made_to_Measure_Blinds