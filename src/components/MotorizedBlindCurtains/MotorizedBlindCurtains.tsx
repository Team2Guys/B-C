"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motorizeBlindData } from "data/SellerSlider";

export default function MotorizeBlindCurtain() {
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="motorizedblindcurtains mt-5 md:mt-10">
      <h2 className="text-center font-serif text-xl sm:text-4xl font-semibold mb-10 text-gray-800">
        {motorizeBlindData.heading}
      </h2>

      <div className="relative w-full mx-auto overflow-hidden sm:h-[744px]">
        <video
          src={motorizeBlindData.videoUrl}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        />
        <div className="absolute inset-0 flex flex-col sm:flex-row justify-end sm:justify-center items-center sm:items-end sm:pb-6 pb-3 gap-3 sm:gap-4 sm:pr-6">
          {motorizeBlindData.buttons.map(({ label, link }, i) => (
            <Link
              key={i}
              href={link}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-5 rounded-md shadow-md sm:text-base text-12 transition"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className="py-5 hidden sm:flex flex-wrap justify-center gap-20 text-center bg-[#FFFFF0]">
        {motorizeBlindData.features.map(({ icon, label }, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 relative">
              <Image src={icon} alt={label} fill className="object-contain" />
            </div>
            <p className="text-lg text-gray-700 font-medium">{label}</p>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="sm:py-10 pb-8 pt-5 sm:hidden bg-[#FFFFF0]">
        <Slider {...sliderSettings}>
          {motorizeBlindData.features.map(({ icon, label }, i) => (
            <div key={i} className="flex flex-col items-center gap-2 px-2">
              <div className="sm:w-20 sm:h-20 w-10 h-10 relative mx-auto">
                <Image src={icon} alt={label} fill className="object-contain" />
              </div>
              <p className="text-10 text-gray-700 font-medium text-center mt-2">{label}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
