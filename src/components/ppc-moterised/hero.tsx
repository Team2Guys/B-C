"use client";
import Container from "components/Res-usable/Container/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

  const HeroBanner = () => {
  return (
    <Container>
        <div className="relative px-2">
            <Image
              src="/assets/images/ppc-blinds/leftvan.png"
              alt="Van Left"
              width={800}
              height={500}
                className="w-full min-h-[400px] md:h-[626px] object-cover"
            />
            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center px-6 md:px-10">
            <div className="text-white space-y-7 max-w-md">
            <h2 className="text-xl md:text-3xl font-juana xl:text-36 font-black xl:leading-10">
            We Bring the Finest to You, In 2-3 days, Right at Your Door!
            </h2>
            <div>
            <Link href="/request-appointment/" className="bg-primary text-black px-5 py-3 xl:text-17 font-semibold rounded-md hover:bg-opacity-90 transition">
            GET A FREE QUOTE
            </Link></div>
              </div>
              <Image
               src="/assets/images/ppc-blinds/vanright.png"
                alt="Van Left"
                width={800}
                height={500}
                className="w-full h-[626px] object-contain hidden md:block"
            />
            </div>
            </div>
    
        </Container>
  );
};

export default HeroBanner; 