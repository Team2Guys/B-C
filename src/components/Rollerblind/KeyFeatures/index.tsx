'use client'
import {KeyFeaturesRoller,KeyFeaturesSunScreen  } from 'data/data';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
interface KeyfeatureProps {
  tabType:string

}
  const KeyFeatures = ({tabType}:KeyfeatureProps) => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  return (
    <div className="bg-secondary px-2 pb-7">
      <h2 className="font-serif font-normal text-22 xs:text-25 sm:text-4xl lg:text-37 text-white text-center pt-7">
        Key Features
      </h2>
      <div className="md:mt-5 text-white relative">
        <div ref={prevRef} className="absolute left-2  md:left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white">
          <BiSolidLeftArrow className="text-base lg:text-xl" />
        </div>
        <div ref={nextRef} className="absolute right-2 md:right-5 top-[50%] -translate-y-1/2 z-10 cursor-pointer text-white">
          <BiSolidRightArrow className="text-base lg:text-xl" />
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current, 
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          loop={true}
          modules={[Navigation]}
          breakpoints={{
            480: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
          }}
          className="mySwiper">
           {(tabType === "Sunscreen Roller Blinds" ? KeyFeaturesSunScreen : KeyFeaturesRoller).map((arr, index) => (
            <SwiperSlide key={index}>
              <div className="space-y-4 flex flex-col justify-center items-center mx-3 p-4 lg:p-6">
                <Image
                  className="h-[70px] w-[65.62px]"
                  src={arr.icon}
                  alt=""
                  height={1024}
                  width={1024}
                />
                <h2 className="font-normal text-18 xs:text-20 md:text-20 font-serif text-center px-1 xl:px-5 xl:text-23">
                  {arr.heading}
                </h2>
                <p className="text-12 font-normal text-center leading-6 xl:px-5">{arr.para}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default KeyFeatures;
