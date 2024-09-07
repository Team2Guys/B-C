import { OurClientImage } from 'data/data';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const OurClient = () => {
  return (
    <>
      <div className="lg:pt-20 lg:pb-10 pt-16 pb-10 max-w-screen-2xl mx-auto">
        <h2 className="text-center font-semibold text-xl uppercase tracking-widest">
          our clients
        </h2>
        <p className="text-center text-lg tracking-widest lg:w-2/5 mx-auto px-10 pt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. 
        </p>
      </div>
      <div className="bg-white">
        <div className="slider-container max-w-screen-2xl mx-auto">
          <Swiper
            slidesPerView={5}
            loop={true}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
           
            modules={[Autoplay]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            {OurClientImage.map((image: any, index: any) => (
              <SwiperSlide className="" key={index}>
                <div
                  className="py-7 active:border-none active:outline-none shadow-none focus:border-transparent active:border-transparent border border-white"
                  key={index}
                >
                  <Image
                    key={index}
                    className="w-full px-10 h-16 object-cover active:border-none active:outline-none shadow-none focus:border-transparent active:border-transparent"
                    src={image.src}
                    alt={image.alt}
                    width={250}
                    height={400}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default OurClient;
