import Header from 'components/LandingPage/Header'
import VideoSection from 'components/LandingPage/video-section'
import React from 'react'
import Bullets from './bullets'
import LButton from './button';
import Shop from 'components/ppc-moterised/shop';
import FeaturesCarousel from 'components/ppc-moterised/features';
import { blindsData, Blindsfeatures, BlindsTabData, BlindvideoData, consultationblindData, exploreblindData, Tab1categories, workingProcessblindData} from 'data/data';
import CustomSection from 'components/ppc-moterised/customization';
import Videoblind from 'components/ppc-moterised/videosection';
import Blindtype from 'components/ppc-moterised/blindtype';
import BlindsTabs from 'components/ppc-moterised/Tabcomponnet';
import WhyChooseUs from 'components/ppc-moterised/whychoose';import ExploreBlinds from 'components/ppc-moterised/blindsrange';
import WorkingProcess from 'components/ppc-moterised/working';
import BlindsCarousel from 'components/ppc-moterised/blindcrousal';


const page = () => {
  return (
    <>
    <Header/>
    <VideoSection 
       videoSrc="/assets/video/blinds1.mp4"
       title="Transform Your Home with Premium Blinds and Curtains"
       subtitle={<Bullets/>}
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
    <Videoblind videos={BlindvideoData} heading="Video of Our Real-Time Installed Blinds" />
    <Blindtype heading="Explore our wide range of blind by room blind by type" />
    <BlindsTabs blindsData={BlindsTabData} tabCategories={Tab1categories} />;
    <WhyChooseUs/>
    <ExploreBlinds data={exploreblindData[0]} />;
    <ExploreBlinds data={exploreblindData[1]} reverse />;
    <WorkingProcess
      title="Our Working Process"
      description="Remote control options available Remote control options available Remote options available Remote control options"
      data={workingProcessblindData}
    />
      <ExploreBlinds data={consultationblindData[1]} reverse  imageHeight={"xl:521px"} hideViewMore  hidefeatures/>;
      <BlindsCarousel/>
    </>
    
  )
}

export default page