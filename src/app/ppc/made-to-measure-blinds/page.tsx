import Header from 'components/LandingPage/Header'
import VideoSection from 'components/LandingPage/video-section'
import React from 'react'
import Bullets from './bullets'
import LButton from './button';
import Shop from 'components/ppc-moterised/shop';
import FeaturesCarousel from 'components/ppc-moterised/features';
import {banners, Blindbannerfeatures, blindcrousal, blindsData, Blindsfeatures, BlindsTabData, BlindvideoData, consultationblindData, exploreblindData, serviceLocationsData, Tab1categories, workingProcessblindData} from 'data/data';
import CustomSection from 'components/ppc-moterised/customization';
import Videoblind from 'components/ppc-moterised/videosection';
import Blindtype from 'components/ppc-moterised/blindtype';
import BlindsTabs from 'components/ppc-moterised/Tabcomponnet';
import WhyChooseUs from 'components/ppc-moterised/whychoose';
import ExploreBlinds from 'components/ppc-moterised/blindsrange';
import WorkingProcess from 'components/ppc-moterised/working';
import Carousel from 'components/ppc-moterised/blindcrousal';
import Container from 'components/Res-usable/Container/Container';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import { IProduct } from 'types/types';
import { fetchProducts } from 'config/fetch';
import ServiceLocations from 'components/ppc-moterised/servicelocation';
import RollerReviews from 'components/Rollerblind/Roller_Reviews/Review';
import Banner from 'components/HomeBanner/Home_Banner';
import BookingForm from 'components/ppc-moterised/Bookingform';
import HeroBanner from 'components/ppc-moterised/hero';
import ImageGallery from 'components/ppc-moterised/Grid';


const Made_to_Measure_Blinds = async () => {
  const locationData = serviceLocationsData[0];
  const [products] = await Promise.all([fetchProducts()]);
    const getBlindsProducts = (filterproduct: IProduct[]) => {
      return filterproduct.filter(product =>
        product.category?.title?.toLowerCase() === "blinds"
      );
    };
    const Products = getBlindsProducts(products || []);
  return (
    <>
    <Header/>
    <VideoSection 
       videoSrc="/assets/video/blinds1.mp4"
       title="Stylish, Customised Blinds – Free Measurement & Installation"
       subtitle={<Bullets features={Blindbannerfeatures}/>}
       description={<LButton/>}
       width='w-[500px] sm:w-[630px] md:w-[715px] lg:w-[850px] 2xl:w-[990px]'
       height="h-[700px] sm:h-[681px]"/>
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
    <WhyChooseUs/>
    <ExploreBlinds data={exploreblindData[0]} />
    <ExploreBlinds data={exploreblindData[1]} reverse />
    <WorkingProcess
      title="Our Working Process"
      description="Hassle-free process from selection to installation. We make choosing and installing blinds effortless with our simple, step-by-step process."
      data={workingProcessblindData}
    />
      <ExploreBlinds data={consultationblindData[1]} reverse  imageHeight={"xl:521px"} hideViewMore  hidefeatures/>
      <Carousel data={blindcrousal} />
      <Blindtype heading="Professional Installation Services For Your Interior" />
      <ImageGallery/>
      <HeroBanner/>
      <div className='bg-white'>
      <Container className="lg:mt-10 my-5 lg:mb-14 py-5 md:py-10 bg-white">
      <RelatedProducts products={Products} limit={4}/>
      </Container></div>
      <Blindtype heading="LOCATION" />
      <ServiceLocations {...locationData} />
      <RollerReviews/>
      <div className='bg-white py-3 md:py-9'></div>
      <Banner {...banners.Blind} />
      <BookingForm />
    </>
    
  )
}

export default Made_to_Measure_Blinds