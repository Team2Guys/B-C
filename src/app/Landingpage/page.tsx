import React from 'react';
import KeyFeature from '../../components/LandingPage/KeyFeature';
import MoterizedBlinds from '../../components/LandingPage/Moterized Blinds';
import NavComponent from '../../components/LandingPage/Navbar/Navcomponent';
import CustomPage from '../../components/LandingPage/Custommade';
import VideoSection from 'components/LandingPage/video-section';
import InstaVideoSection from 'components/LandingPage/InstaVideoSection';
import Button from 'components/LandingPage/ButtonSection';
import LoremFeatures from 'components/LandingPage/LoremFeature';
import MoterizedService from 'components/LandingPage/MoterizedService';

const Landinggpage = () => {

  return (
    <>
      <NavComponent />
      <VideoSection />
      <CustomPage />
      <KeyFeature />
      <MoterizedBlinds />
      <MoterizedService/>
      <LoremFeatures/>
      <Button/>
      <InstaVideoSection/>
    </>
  );
};

export default Landinggpage;
