'use client'
import Image from "next/image";

// import { Menuitem } from "data/data";
import Hero from "components/Hero/Hero";

import HomeCard from "./Card/page";
import BlindsAndCurtainssection from "./Blind&Curtains/blinds&curtains";


export default function Home() {
  return (
    <>
      <Hero />
  
<div className="bg-primary text-heading">handler page</div>
<HomeCard/>
<BlindsAndCurtainssection/>
</>

  );
}
