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
    // autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    cssEase: 'linear',
  };

  return (
    <div className={`slider-container w-full ${className}`}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default CustomSlider;
