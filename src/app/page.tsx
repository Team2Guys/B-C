"use client";
import Hero from "components/Hero/Hero";

import HomeCard from "./Card/page";
import BlindsAndCurtainssection from "./Blind&Curtains/blinds&curtains";
import Appointment from "components/Appointment/Appointment";
import Header from 'components/Res-usable/header/Header';
import Footer from 'components/Res-usable/Footer/Footer';
import Container from "components/Res-usable/Container/Container";

export default function Home() {
  return (
    <>
    <div className="w-full bg-primary">
    <Container>
       <div className="text-white w-[7xl] font-montserrat font-normal tracking-23p leading-18px py-2">
  We can visit you, take measurements, help select fabrics & install in 1-2 days. Call Dubai 04 252 2025 now or email us on connect@twoguys.ae
</div>

    </Container>
    </div>
    <Header />

      <Hero />
      <Appointment />
      <HomeCard />
      <BlindsAndCurtainssection />
    <Footer />

    </>
  );
}
