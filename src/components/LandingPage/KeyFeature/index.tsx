'use client';
import Image from 'next/image';
import { KeyData } from 'data/data';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Container from 'components/Res-usable/Container/Container';

const KeyFeature = () => {
  const prevRef = useRef<HTMLDivElement | any>(null);
  const nextRef = useRef<HTMLDivElement | any>(null);

  return (
    <div className='w-full h-full text-center pt-4 bg-keyimage bg-cover max-w-screen-2xl mx-auto'>
      <Container>
      <div>
        <h2 className='font-serif font-extrabold text-1xl sm:text-2xl md:text-3xl lg:text-4xl text-black'>
          Key Features
        </h2>

        {/* Custom Navigation Buttons */}
        <div className="relative mt-8">
          {/* Custom Prev Button */}
          <div
            ref={prevRef}
            className="custom-prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer"
          >
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[15px] border-black"></div>
          </div>

          {/* Swiper Container */}
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            modules={[Navigation]}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper:any) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1440: { slidesPerView: 4 }, // 4 columns for larger screens
            }}
            className="w-full" // Ensures the Swiper is responsive
          >
            {KeyData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className='flex flex-col justify-center items-center lg:text-lg font-normal mx-10 p-4'>
                  <Image
                    src={item.image}
                    alt={`Feature ${index}`}
                    width={50}
                    height={50}
                    className='rounded-lg'
                  />
                  <p className='mt-4 text-sm leading-7 text-center'>{item.para}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Next Button */}
          
          <div
            ref={nextRef}
            className="custom-next absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer"
          >
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[15px] border-black"></div>
          </div>
        </div>
      </div>
      </Container>
    </div>
  );
};

export default KeyFeature;