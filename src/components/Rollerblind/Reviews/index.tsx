'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import Container from 'components/Res-usable/Container/Container';
import { FcGoogle } from "react-icons/fc";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import { fetchReviewsHandler } from 'config/fetch';

const getExcerpt = (text: string, wordLimit: number) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

const Reviews = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  useEffect(() => {
    fetchReviewsHandler(setTestimonials);
  }, []);

  const filteredTestimonials = testimonials.filter(
    (testimonial: any) => testimonial.rating >= 4
  );
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center my-5 testimonial-back 2xl:max-w-screen-2xl mx-auto'>
      
      <div className='bg-light flex flex-col'>
        <Container className='max-w-[80%] sm:max-w-[80%] space-y-24 mt-4 mb-4'>
          <Link href='/'>
            <div className='bg-white w-fit h-fit rounded-full shadow-lg py-3 px-3 flex justify-center items-center gap-3'>
              <FcGoogle className='h-[27.22px] w-[28.57px]' />
              <p className='text-16 font-bold'>4.9 |<span className='font-normal'> see all reviews</span></p>
            </div>
          </Link>
          
          <div className='w-full lg:max-w-screen-sm'>
          <div className='  flex justify-between px-4'>
              <div className='flex justify-center items-center testimonial-prev cursor-pointer h-7 w-7 bg-white rounded-full z-40'><FaArrowLeftLong /></div>
              <div className='flex justify-center items-center testimonial-next cursor-pointer h-7 w-7 bg-white rounded-full z-40'><FaArrowRightLong /></div>
            </div>
            <Swiper
            loop={true}
            slidesPerView={1}
              navigation={{
                prevEl: ".testimonial-prev",
                nextEl: ".testimonial-next",
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              {filteredTestimonials.map((testimonial: any, index: number) => (
                <SwiperSlide key={index}>
                  <div className='flex flex-col bg-white px-2 py-3 max-w-96 mx-auto w-fit my-4'>
                    <div className='flex justify-between items-center'>
                      <h3 className='text-17 md:text-4 font-medium font-gotham'>{testimonial.author_name}</h3>
                      <p className='text-11 font-normal font-gotham'>{testimonial.relative_time_description}</p>
                    </div>
                    <p className='flex gap-1 text-yellow-500 mb-4 text-10 md:text-10'>
                     {[...Array(testimonial.rating)].map((_, i) => (
                                         <FaStar key={i} />
                                       ))}
                    </p>
                    <p className='font-light italic text-15 leading-5 text-gray-600'>{isExpanded ? testimonial.text : getExcerpt(testimonial.text, 20)}<button className="underline" onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? "Read Less" : "Read More"}
                     </button></p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
           
          </div>

        </Container>
      </div>
      
      {/* Right Side */}
      <div className='h-auto w-full '>
        <Image className='h-[570px] w-full px-2 lg:w-[703px]' src='/assets/images/Rollerblind/Rectangle898.png' alt="img" height={550} width={703} />
      </div>
    </div>
  );
};

export default Reviews;
