'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import Container from 'components/Res-usable/Container/Container';
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import { ReviewsData } from 'data/data';
import { FcGoogle } from "react-icons/fc";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Reviews = () => {
  return (
    <div className='grid grid-cols-2 justify-center items-center my-10 bg-light'>
      
      {/* Left Side */}
      <div className='bg-light flex flex-col'>
        <Container className='space-y-24'>
          <Link href='/'>
            <div className='bg-white w-fit h-fit rounded-full shadow-lg py-3 px-3 flex justify-center items-center gap-3'>
              <FcGoogle className='h-[27.22px] w-[28.57px]' />
              <p className='text-16 font-bold'>4.8 |<span className='font-normal'> see all reviews</span></p>
            </div>
          </Link>
          
          <div className='relative'>
            <Swiper
            loop={true}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              {ReviewsData.map((arr, index) => (
                <SwiperSlide key={index}>
                  <div className='flex flex-col bg-white px-2 py-3 max-w-96 mx-auto w-fit'>
                    <div className='flex justify-between items-center'>
                      <h3 className='text-17 md:text-4 font-medium font-gotham'>{arr.name}</h3>
                      <p className='text-11 font-normal font-gotham'>{arr.date}</p>
                    </div>
                    <p className='flex gap-1 text-yellow-500 mb-4 text-10 md:text-10'>
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </p>
                    <p className='font-light italic text-15 leading-5 text-gray-600'>{arr.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className='absolute left-0 right-0 -top-5 transform -translate-y-1/2 flex justify-between px-4'>
              <FaCircleArrowLeft className="custom-prev cursor-pointer text-3xl text-primary z-40" />
              <FaCircleArrowRight className="custom-next cursor-pointer text-3xl text-primary z-40" />
            </div>
          </div>

        </Container>
      </div>
      
      {/* Right Side */}
      <div className='h-auto w-full mr-10'>
        <Image className='h-[550px]' src='/assets/images/Rollerblind/Rectangle898.png' alt="img" height={550} width={703} />
      </div>
    </div>
  );
};

export default Reviews;
