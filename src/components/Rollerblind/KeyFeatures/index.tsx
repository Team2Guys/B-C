'use client'
import { KeyFeaturesData } from 'data/data';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

interface ChildProps {
  className?: string;
}

const KeyFeatures: React.FC<ChildProps> = ({ className }) => {
  const prevRef = useRef<HTMLDivElement | any>(null);
  const nextRef = useRef<HTMLDivElement | any>(null);

  return (
    <div className="bg-secondary relative 2xl:max-w-screen-2xl mx-auto px-2 pb-7">
      <h2 className="font-serif font-normal text-25 sm:text-4xl lg:text-37 text-white text-center pt-7">
        Key Features
      </h2>
      <div className="mt-5 text-white">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          modules={[Navigation]}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4}, // 4 columns for larger screens
          }}
          className="w-full" // Ensures the Swiper is responsive
        >
          {KeyFeaturesData.map((arr, index) => (
            <SwiperSlide key={index}>
              <div className="space-y-4 flex flex-col justify-center items-center mx-10 p-4">
                <Image
                  className="h-[70px] w-[65.62px]"
                  src={arr.icon}
                  alt=""
                  height={1024}
                  width={1024}
                />
                <h2 className="font-normal text-23 sm:text-29 font-serif text-center">
                  {arr.heading}
                </h2>
                <p className="text-14 font-normal text-center leading-6">{arr.para}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Next Button */}
        <div
            ref={nextRef}
            className="custom-next absolute top-1/2 right-8 transform -translate-y-1/2 z-10 cursor-pointer"
          >
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[15px] border-white"></div>
          </div>

        {/* Previous Button */}
        <div
            ref={prevRef}
            className="custom-prev absolute top-1/2 left-8 transform -translate-y-1/2 z-10 cursor-pointer"
          >
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[15px] border-white"></div>
          </div>
      </div>
    </div>
  );
};

export default KeyFeatures;