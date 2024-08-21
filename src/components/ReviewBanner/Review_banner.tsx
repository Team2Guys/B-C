'use client';
import React from 'react';
import Slider from 'react-slick';
import { FcGoogle } from 'react-icons/fc';
import { TRSlide } from 'types/interface';
import { PiQuotesFill } from 'react-icons/pi';
import { Divider } from 'antd';
import { RatingSlider } from 'data/data';
import Image from 'next/image';

export default function Review_banner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const slides: TRSlide[] = [
    {
      title: 'Victoria Wotton',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
      title: 'Victoria Wotton',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
    },
  ];
  return (
    <>
      <div className=" max-w-[90%] mx-auto px-2 lg:mt-10 mt-10 relative">
        <div className="bg-[#F6EFE9] p-10 rounded-lg shadow-lg">
          <div className="lg:grid grid-cols-1 sm:grid-cols-3 gap-12 mb-3 items-center">
            <div className="lg:text-4xl text-2xl font-bold max-w-96 ">
              <h3>Trusted Reviews from Our Customer</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 items-center lg:my-0 mt-10 lg:mb-0 mb-20">
              <a href="" className="">
                <div className="flex items-center gap-3 bg-white h-fit px-3 py-3 rounded-full shadow-lg w-fit">
                  <span>
                    <FcGoogle className="text-3xl" />
                  </span>
                  <span className="font-bold">4.8 |</span>
                  <p>See All Reviews</p>
                </div>
              </a>
            </div>
            <div className="bg-primary lg:mt-0 mt-10">
              <div className="container h-auto w-full">
                <Image
                  className="absolute lg:-top-4 top-56 lg:bottom-60  lg:right-[15%] lg:translate-x-[15%] right-[50%] translate-x-[50%] sm:right-[50%] sm:translate-x-[50%]  z-10 "
                  src={RatingSlider.imageUrl}
                  alt=""
                  width={140}
                  height={140}
                />
                <Slider {...settings}>
                  {slides.map((slide, index: any) => (
                    <div
                      key={index}
                      className="px-4 pt-12 bg-primary text-center relative lg:px-5 "
                    >
                      {/* <div className=' bg-white w-fit rotate-180 text-8xl absolute -top-10 left-2/4 z-10 -translate-x-2/4 px-10'>
                        <PiQuotesFill className='z-50 ' />
                        </div> */}
                      <h3 className="text-xl font-semibold text-white">
                        {slide.title}
                      </h3>
                      <p className="mt-2 text-white">{slide.content}</p>
                    </div>
                  ))}
                </Slider>
                <div className="bg-white w-fit mx-auto px-7 py-1 mt-4 rounded-b-xl shadow-lg -mb-2   ">
                  <Image
                    className=""
                    src={RatingSlider.StarImage}
                    alt=""
                    width={70}
                    height={70}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
