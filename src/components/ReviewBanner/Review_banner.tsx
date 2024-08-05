'use client';
import React from 'react';
import Slider from 'react-slick';
import { FcGoogle } from 'react-icons/fc';
import { TRSlide } from 'types/interface';
import { PiQuotesFill } from 'react-icons/pi';

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
      content: 'Lorem ipsum dolor sit amet, consectetur ',
    },
    {
      title: 'Victoria Wotton',
      content: 'Lorem ipsum dolor sit amet, consectetur  ',
    },
    // Add more slides as needed
  ];
  return (
    <>
      <div className="container lg:mt-10">
        <div className="bg-[#F6EFE9] p-10 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-3 items-center">
            <div className="text-4xl font-bold pr-10">
              <h3>Trusted Reviews from Our Customer</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1">
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
            <div className="bg-primary">
              <div className="container  h-auto  w-full">
                <Slider {...settings}>
                  {slides.map((slide, index: any) => (
                    <div
                      key={index}
                      className="p-4 bg-primary text-center relative"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
