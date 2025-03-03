"use client";
import Container from "components/Res-usable/Container/Container";
import Image from "next/image";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <Container>
        <div className="relative">
            <Image
             src="/assets/images/ppc-blinds/back.png"
              alt="Van Left"
              width={800}
              height={500}
              className="w-full h-[626px] object-contain"
            />
            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center px-6 md:px-10">
              <div className="text-white space-y-4 max-w-md">
                <h2 className="text-xl md:text-3xl font-bold">
                  We Can Make, And Fit Curtains And Blinds Within 
                  <span className="text-primary"> 12-24 Hours </span> 
                  After Your Order Confirmation
                </h2>
                <button className="bg-primary text-white px-5 py-2 rounded-md font-medium hover:bg-opacity-90 transition">
                  GET A FREE QUOTE
                </button>
              </div>
              <Image
               src="/assets/images/ppc-blinds/vanright.png"
                alt="Van Left"
                width={800}
                height={500}
                className="w-full h-[626px] object-contain"
            />
            </div>
        </div>
        </Container>
  );
};

export default HeroSection; 