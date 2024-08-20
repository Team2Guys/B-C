import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MenuCard from 'components/ui/menu-card';

interface CardSliderProps {
  buttonClass?: string;
  previousLabel?: any;
  nextLabel?: any;
  className?: string;
  sliderItems: { key: number; src: any; alt: string; title: string }[];
  onClick?: any;
}

const CardSlider: React.FC<CardSliderProps> = ({
  buttonClass = '',
  previousLabel = 'Previous',
  nextLabel = 'Next',
  className,
  sliderItems,
  onClick,
}) => {
  const sliderRef = useRef<Slider>(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container space-y-4 px-4">
      <Slider ref={sliderRef} {...settings}>
        {sliderItems.map((item) => (
          <div key={item.key} className="pl-4" onClick={onClick}>
            <MenuCard src={item.src} alt={item.alt} title={item.title} />
          </div>
        ))}
      </Slider>
      <div className={` ${className} flex justify-end `}>
        <button
          className={`flex justify-center items-center ${buttonClass}`}
          onClick={previous}
        >
          {previousLabel}
        </button>
        <button
          className={`flex justify-center items-center ${buttonClass}`}
          onClick={next}
        >
          {nextLabel}
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
