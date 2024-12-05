"use client"
import { OurClientImage } from 'data/data';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Autoplay,  } from 'swiper/modules';

const OurClient = () => {
  return (
    <>
      <div className="lg:pt-20 lg:pb-10 pt-16 pb-10 max-w-screen-2xl mx-auto">
        <h2 className="text-center font-semibold text-xl uppercase tracking-widest">
          our clients
        </h2>
        <p className="text-center text-sm tracking-widest lg:w-2/5 mx-auto px-10 pt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="bg-white">
        <div className="slider-container max-w-screen-2xl mx-auto">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
           
            modules={[Autoplay]}
            className="mySwiper"
            breakpoints={{
              // 320: {
              //   slidesPerView: 1,
              //   spaceBetween: 5,
              // },
              440: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              600: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
              1000: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            {OurClientImage.map((image: any, index: any) => (
              <SwiperSlide className=" py-4" key={index}>
                <div
                  className="active:outline-none shadow-none focus:border-transparent active:border-transparent border border-white active:border-none"
                  key={index}
                >
                  <Image
                    key={index}
                    className="w-full px-5 h-10 object-contain active:border-none active:outline-none shadow-none focus:border-transparent active:border-transparent brightness-100 contrast-50 saturate-0 blur-0 hue-rotate-0"
                    src={image.src}
                    alt={image.alt}
                    width={400}
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
