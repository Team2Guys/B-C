'use client'
import Image from "next/image";

import { Menuitem } from "data/data";
import Hero from "components/Hero/Hero";

import HomeCard from "./Card/page";


export default function Home() {
  return (
    <>
      <Hero />
  
<div className="bg-primary text-heading">handler page</div>
<HomeCard/>
</>

  );
}
