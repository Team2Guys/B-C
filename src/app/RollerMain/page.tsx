import Header from 'components/LandingPage/Header';
import Rollerpage from 'components/Rollerblind/Roller1';
import React from 'react'
import Roller2 from 'components/Rollerblind/Roller2';
import BlackOut from 'components/Rollerblind/Blackout';

const RollerMain= () => {
  return (
    <>
    <Header/>
    <Rollerpage/>
    <Roller2/>
    <BlackOut/>
    </>
  );
};

export default RollerMain;