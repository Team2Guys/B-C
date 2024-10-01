import Header from 'components/LandingPage/Header';
import Rollerpage from 'components/Rollerblind/Roller1';
import React from 'react'
import Roller2 from 'components/Rollerblind/Roller2';
import BlackOut from 'components/Rollerblind/Blackout';
import KeyFeatures from 'components/Rollerblind/KeyFeatures';
import Reviews from 'components/Rollerblind/Reviews';
import BlackoutRoller from 'components/Rollerblind/BlackoutImages';


const RollerMain= () => {
  return (
    <>
    <Header/>
    <Rollerpage/>
    <Roller2/>
    <BlackOut/>
    <KeyFeatures/>
    <Reviews/>
    <BlackoutRoller/>
    </>
  );
};

export default RollerMain;