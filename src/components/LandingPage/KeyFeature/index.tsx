'use client'
import React from 'react';
import Image from 'next/image';
import { KeyData } from 'data/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // Navigation module styles
import 'swiper/css/pagination'; // Pagination module styles

const KeyFeature = () => {
  return (
    <div className='relative w-full h-full grid grid-cols-1 mx-auto justify-center items-center text-center py-4'>
      {/* Static Background Image */}
      <div className='absolute inset-0'>
        <Image
          className="w-full h-auto object-cover"
          src={"/assets/images/Landing/Rectangle28.png"}
          alt="img"
          width={2880}
          height={287}
        />
      </div>

      {/* Heading and Swiper */}
      <div className='relative z-10'>
        <h2 className='font-serif font-extrabold text-1xl sm:text-2xl lg:text-4xl text-black'>
          Key Features
        </h2>

        {/* Swiper Container */}
        <div className='mt-8'>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation={true} // Enable navigation arrows
            pagination={{ clickable: true }} // Enable pagination dots
            // Add Navigation and Pagination modules
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 }, // 4 columns for larger screens
            }}
            className="w-full" // Ensures the Swiper is responsive
          >
            {KeyData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className='flex flex-col items-center p-4 lg:text-lg font-normal'>
                  <Image
                    src={item.image}
                    alt={`Feature ${index}`}
                    width={50}
                    height={50}
                    className='rounded-lg'
                  />
                  <p className='mt-4 text-sm'>{item.para}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default KeyFeature;