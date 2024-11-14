import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ComponentType, ReactNode } from 'react';
import { Autoplay } from 'swiper/modules';

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;

  return null;
}

interface SLIDERPROPS {
  children: ReactNode;
  PextArrow?: ComponentType<any>;
  PrevArrow?: ComponentType<any>;
  className?: string;
}

function CustomSlider({
  children,
  PextArrow,
  PrevArrow,
  className,
}: SLIDERPROPS) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: PextArrow ? <PextArrow /> : undefined,
    prevArrow: PrevArrow ? <PrevArrow /> : undefined,
    focusOnSelect: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    cssEase: "linear"
  };

  return (
    <div className={`slider-container w-full ${className}`}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default CustomSlider;
