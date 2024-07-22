'use client'
import Image from "next/image";

// import { Menuitem } from "data/data";
import Hero from "components/Hero/Hero";

import HomeCard from "./Card/page";
import BlindsAndCurtainssection from "./Blind&Curtains/blinds&curtains";
import Appointment from "components/Appointment/Appointment";

export default function Home() {
  return (
    <>
      <Hero />
      <Appointment />
      <HomeCard />
<BlindsAndCurtainssection/>
    </>
  );
}
