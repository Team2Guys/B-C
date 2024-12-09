"use client"
import Slider, { SliderSettings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ComponentType, ReactNode } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-color-arrow absolute transform -translate-y-1/2 rounded-full flex justify-center items-center cursor-pointer`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FaArrowRightLong
        size={30}
        className="text-black border-2 border-black rounded-full p-1"
      />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-color-arrow transform -translate-y-1/2 rounded-full flex justify-center items-center cursor-pointer`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FaArrowLeftLong
        size={30}
        className="text-black border-2 border-black rounded-full p-1"
      />
    </div>
  );
}

interface SLIDERPROPS {
  children: ReactNode;
  NextArrow?: ComponentType<any>;
  PrevArrow?: ComponentType<any>;
  className?: string;
  colorSlider?: boolean;
}

function CustomSlider({
  children,
  colorSlider,
  NextArrow,
  PrevArrow,
  className,
}: SLIDERPROPS) {
  const settings:SliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: colorSlider ? 6 : 1,
    slidesToScroll: 1,
    nextArrow: NextArrow ? (
      <NextArrow />
    ) : colorSlider ? (
      <SampleNextArrow />
    ) : undefined,
    prevArrow: PrevArrow ? (
      <PrevArrow />
    ) : colorSlider ? (
      <SamplePrevArrow />
    ) : undefined,
    focusOnSelect: true,
    autoplay: colorSlider ? false : true,
    speed: colorSlider ? 500 : 1000,
    autoplaySpeed: 6000,
    cssEase: 'linear',
    responsive: colorSlider
      ? [
          {
            breakpoint: 1250,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ]
      : [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
  };

  return (
    <div className={`slider-container w-full ${className}`}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default CustomSlider;
