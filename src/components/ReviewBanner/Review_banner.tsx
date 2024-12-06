'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FcGoogle } from 'react-icons/fc';
import { RatingSlider, slides } from 'data/data';
import Image from 'next/image';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import Container from 'components/Res-usable/Container/Container';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Review_banner() {
  return (
    <>
      <Container className="px-2 lg:mt-10 mt-10 relative">
        <div className="bg-[#F6EFE9] px-2 py-12 md:p-10 rounded-xl shadow-md drop-shadow-md">
          <div className="lg:grid grid-cols-1 sm:grid-cols-3 gap-12 mb-3 items-center">
            <div className="lg:text-4xl text-2xl font-bold text-center">
              <h3>
                Trusted Partner
                <br /> in Every Detail
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 items-center lg:my-0 mt-10 lg:mb-0 mb-20">
              <Link href="/" className="w-fit mx-auto">
                <div className="flex items-center gap-3 bg-white h-fit px-3 py-3 rounded-full shadow-lg w-fit">
                  <span>
                    <FcGoogle className="lg:text-3xl text-14" />
                  </span>
                  <p className="lg:text-base text-12">
                    With Over 750 5-Star Reviews
                  </p>
                </div>
              </Link>
            </div>
            <div className="bg-primary lg:mt-0 mt-10 relative">
              <div className="container h-auto w-full">
                {/* <Image
                  className="absolute lg:-top-4 top-[43%]  xs:top-[41%] sm:top-[43%] lg:bottom-72  lg:right-[36%] lg:translate-x-[15%] 2xl:right-[14%] right-[50%] translate-x-[50%] sm:right-[50%] sm:translate-x-[50%]  z-10 "
                  src={RatingSlider.imageUrl}
                  alt=""
                  width={140}
                  height={140}
                /> */}
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  loop={true}
                  speed={500}
                  className="relative"
                >
                  {slides.map((slide, index: any) => (
                    <SwiperSlide key={index}>
                      <div className="sm:px-4 pt-12 bg-primary text-center relative lg:px-5">
                        <h3 className="text-xl font-semibold text-white">
                          {slide.title}
                        </h3>
                        <p className="mt-2 text-white">{slide.content}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="bg-white w-fit mx-auto px-7 py-1 mt-4 rounded-b-xl shadow-lg -mb-2">
                  <Image
                    className=""
                    src={RatingSlider.StarImage}
                    alt=""
                    width={70}
                    height={70}
                  />
                </div>
                {/* Navigation Buttons */}
                <div className="block absolute -left-7 top-20 xs:-left-0 bottom-3 font-semibold text-white z-10 cursor-pointer">
                  <GoArrowLeft size={30} />
                </div>
                <div className="block absolute -right-7 top-20 xs:-right-0 bottom-3 font-semibold text-white cursor-pointer">
                  <GoArrowRight size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
