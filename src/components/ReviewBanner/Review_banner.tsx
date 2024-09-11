'use client';
import React from 'react';
import Slider from 'react-slick';
import { FcGoogle } from 'react-icons/fc';
import { TRSlide } from 'types/interfaces';
import { PiQuotesFill } from 'react-icons/pi';
import { Divider } from 'antd';
import { RatingSlider, slides } from 'data/data';
import Image from 'next/image';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import Container from 'components/Res-usable/Container/Container';

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={"block absolute -right-7 xs:-right-3 bottom-3 font-semibold text-white cursor-pointer"}
      onClick={onClick}>
      <GoArrowRight size={30}  />
    </div>
  );
}

function SamplePrevArrow(props:any) {
  const { className, style, onClick } = props;
  return (
     <div
      className={"block absolute -left-7 xs:-left-3 bottom-3 font-semibold text-white z-10 cursor-pointer"}
      onClick={onClick}>
      <GoArrowLeft size={30} />
    </div>
 
  );
}

export default function Review_banner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <>
      <Container className=" px-2 lg:mt-10 mt-10 relative">
        <div className="bg-[#F6EFE9] px-2 py-12 md:p-10 rounded-lg shadow-lg">
          <div className="lg:grid grid-cols-1 sm:grid-cols-3 gap-12 mb-3 items-center">
            <div className="lg:text-4xl text-2xl font-bold ">
              <h3>Trusted Reviews from Our Customer</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 items-center lg:my-0 mt-10 lg:mb-0 mb-20">
              <a href="" className="">
                <div className="flex items-center gap-3 bg-white h-fit px-3 py-3 rounded-full shadow-lg w-fit">
                  <span>
                    <FcGoogle className="lg:text-3xl text-14" />
                  </span>
                  <span className="font-bold">4.8 |</span>
                  <p className="lg:text-base text-12">See All Reviews</p>
                </div>
              </a>
            </div>
            <div className="bg-primary lg:mt-0 mt-10">
              <div className="container h-auto w-full">
                <Image
                  className="absolute lg:-top-4 top-[43%]  xs:top-[41%] sm:top-[43%] lg:bottom-60  lg:right-[13%] lg:translate-x-[15%] right-[50%] translate-x-[50%] sm:right-[50%] sm:translate-x-[50%]  z-10 "
                  src={RatingSlider.imageUrl}
                  alt=""
                  width={140}
                  height={140}
                />
                <Slider {...settings}>
                  {slides.map((slide, index: any) => (
                    <div
                      key={index}
                      className="sm:px-4 pt-12 bg-primary text-center relative lg:px-5 "
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
                <div className="bg-white w-fit mx-auto px-7 py-1 mt-4 rounded-b-xl shadow-lg -mb-2 ">
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
      </Container>
    </>
  );
}
