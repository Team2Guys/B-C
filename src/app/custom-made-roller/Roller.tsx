"use client"

import Header from 'components/LandingPage/Header';
import React, { useState } from 'react'
import KeyFeatures from 'components/Rollerblind/KeyFeatures';
import Reviews from 'components/Rollerblind/Reviews';
import Button from 'components/LandingPage/ButtonSection';
import InstaVideoSection from 'components/LandingPage/InstaVideoSection';
import RollerBlinds from 'components/Rollerblind/Roller1';
import RollerTabContant from 'components/Rollerblind/Roller2';
import BlackOutRollerBlinds from 'components/Rollerblind/Blackout';
import BlackoutRollerGallary from 'components/Rollerblind/BlackoutImages';

const Roller= () => {
const [tabType, setTabType] = useState<string>("Blackout Roller Blinds");
console.log(tabType,"tabType")
  return (
    <>
    <Header/>
    <RollerBlinds/>
    <RollerTabContant setTabType={setTabType}/>
    <BlackOutRollerBlinds tabType={tabType}/>
    <KeyFeatures tabType={tabType} />
    <Reviews/>
    <BlackoutRollerGallary/>
    <Button/>
    <InstaVideoSection/>
    </>
  );
};

export default Roller;