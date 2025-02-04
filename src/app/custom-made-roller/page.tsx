import Header from 'components/LandingPage/Header';
import React from 'react'
import KeyFeatures from 'components/Rollerblind/KeyFeatures';
import Reviews from 'components/Rollerblind/Reviews';
import Button from 'components/LandingPage/ButtonSection';
import InstaVideoSection from 'components/LandingPage/InstaVideoSection';
import RollerBlinds from 'components/Rollerblind/Roller1';
import RollerTabContant from 'components/Rollerblind/Roller2';
import BlackOutRollerBlinds from 'components/Rollerblind/Blackout';
import BlackoutRollerGallary from 'components/Rollerblind/BlackoutImages';

const RollerMain= () => {
  return (
    <>
    <Header/>
    <RollerBlinds/>
    <RollerTabContant/>
    <BlackOutRollerBlinds/>
    <KeyFeatures/>
    <Reviews/>
    <BlackoutRollerGallary/>
    <Button/>
    <InstaVideoSection/>
    </>
  );
};

export default RollerMain;