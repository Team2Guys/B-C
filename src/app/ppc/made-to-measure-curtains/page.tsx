import Header from 'components/LandingPage/Header'
import VideoSection from 'components/LandingPage/video-section'
import React from 'react'
import Shop from 'components/ppc-moterised/shop';
import FeaturesCarousel from 'components/ppc-moterised/features';
import {banners, chooseuscurtain, consultationblindData, Curtainbannerfeatures, curtaincrousal, Curtainfeatures, curtainImages, curtainsData, CurtainTabData, CurtainvideoData, explorecurtainData, serviceLocationsData, Tab2categories, workingProcesscurtainData} from 'data/data';
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
import Bullets from '../made-to-measure-blinds/bullets';
import LButton from '../made-to-measure-blinds/button';
import HeroBanner from 'components/ppc-moterised/hero';
import ImageGallery from 'components/ppc-moterised/Grid';


const Made_to_Measure_Curtains = async () => {
  const locationData = serviceLocationsData[1];
  const [products] = await Promise.all([fetchProducts()]);
    const getBlindsProducts = (filterproduct: IProduct[]) => {
      return filterproduct.filter(product =>
        product.category?.title?.toLowerCase() === "curtains"
      );
    };
    const Products = getBlindsProducts(products || []);

  return (
    <>
    <Header/>
    <VideoSection 
       videoSrc="/assets/video/curtains.mp4"
       title="Fastest, Made-To-Measure Curtain Service In Dubai"
       subtitle={<Bullets features={Curtainbannerfeatures}/>}
       description={<LButton/>}
       width='w-[500px] sm:w-[630px] md:w-[715px] lg:w-[850px] 2xl:w-[990px]'
       height="h-[700px] sm:h-[681px]"/>
      <Shop/>
      <FeaturesCarousel
      title="What Do Blinds & Curtains Offer You?"
      subtitle="Features"
      features={Curtainfeatures}
      defaultVisibleItems={4}
    />
    <CustomSection data={curtainsData} />
    <Videoblind videos={CurtainvideoData} heading="Our Recent Curtains Dubai Projects" />
    <Blindtype heading="Browse Our Top-Selling Products" />
    <BlindsTabs blindsData={CurtainTabData} tabCategories={Tab2categories} />
    <WhyChooseUs
     paragraph="Choosing Blinds & Curtains Dubai means getting custom-made window treatments, with transparent pricing and hassle free a-z service. With over 20 years of experience, our expert team guarantees a top-notch fit.  Customer satisfaction and quality have earned us hundreds of 5-star reviews."
     features={chooseuscurtain}
     backgroundImage="/assets/images/ppc-blinds/chooseus.png"/>
    <ExploreBlinds data={explorecurtainData[0]} />
    <ExploreBlinds data={explorecurtainData[1]} reverse />
    <WorkingProcess
      title="Our Working Process"
      description="Hassle-free process from selection to installation. We make choosing and installing blinds effortless with our simple, step-by-step process."
      data={workingProcesscurtainData}
    />
      <ExploreBlinds data={consultationblindData[0]} reverse  imageHeight={"xl:521px"} hideViewMore  hidefeatures/>
      <Carousel data={curtaincrousal} />
      <Blindtype heading="Professional Installation Services For Your Interior" className='text-white' />
      <ImageGallery images={curtainImages} columns={4} />
      <HeroBanner/>
      <div className='bg-white'>
      <Container className="lg:mt-10 my-5 lg:mb-14 py-5 md:py-10 bg-white">
      <RelatedProducts className='font-serif font-black' products={Products} limit={4}/>
      </Container></div>
      <Blindtype heading="LOCATION" />
      <ServiceLocations {...locationData} />
      <RollerReviews/>
      <div className='bg-white py-3 md:py-9'></div>
      <Banner {...banners.Curtain} />
      <BookingForm />
    </>
    
  )
}

export default Made_to_Measure_Curtains 