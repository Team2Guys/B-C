'use client';
import Hero from 'components/Hero/Hero';
import Appointment from 'components/Appointment/Appointment';
import Footer from 'components/Res-usable/Footer/Footer';

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <Appointment />
      </div>
      <Footer />
    </>
  );
}
