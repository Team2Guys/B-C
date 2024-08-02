'use client';
import Hero from 'components/Hero/Hero';

import HomeCard from './Card/page';
import BlindsAndCurtainssection from './Blind&Curtains/blinds&curtains';
import Appointment from 'components/Appointment/Appointment';
import Header from 'components/Res-usable/header/Header';
import Footer from 'components/Res-usable/Footer/Footer';
import Container from 'components/Res-usable/Container/Container';

export default function Home() {
  return (
    <>
    <div className='bg-lightgrey'>
      <Hero />
      <Appointment />
      <HomeCard />
      <BlindsAndCurtainssection />
    </div>
      <Footer />

    </>
  );
}
