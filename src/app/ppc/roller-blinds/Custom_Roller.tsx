"use client"
import Header from 'components/LandingPage/Header';
import React, { useState } from 'react'
import KeyFeatures from 'components/Rollerblind/KeyFeatures';
import Button from 'components/LandingPage/ButtonSection';
import InstaVideoSection from 'components/LandingPage/InstaVideoSection';
import RollerBlinds from 'components/Rollerblind/Rollersection1';
import RollerTabContant from 'components/Rollerblind/RollerSection2';
import RollerImageSection from 'components/Rollerblind/RollerimagesSection';
import RollerReviews from 'components/Rollerblind/Roller_Reviews';
import RollerGallary from 'components/Rollerblind/BlackoutImages';
import { InstaRollerData } from 'data/data';

const Custom_Roller= () => {
const [tabType, setTabType] = useState<string>("Blackout Roller Blinds");
console.log(tabType,"tabType")
  return (
    <>
    <Header/>
    <RollerBlinds/>
    <RollerTabContant setTabType={setTabType}/>
    <RollerImageSection tabType={tabType}/>
    <KeyFeatures tabType={tabType} />
    <RollerReviews/>
    <RollerGallary/>
    <Button/>
    <InstaVideoSection data={InstaRollerData} />
    </>
  );
};

export default Custom_Roller;