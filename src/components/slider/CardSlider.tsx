
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { IProduct } from 'types/types';
import MenuCard from 'components/ui/menu-card';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface CardSliderProps {
  buttonClass?: string;
  className?: string;
  sliderItems: IProduct[]; 
  onClick?: any;
}

const CardSlider: React.FC<CardSliderProps> = ({
  buttonClass = '',
  className,
  sliderItems,
  onClick,
}) => {
  return (
    <div className='px-4'>
        <Swiper
          slidesPerView={8}
          spaceBetween={20}
          loop={true}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          modules={[ Navigation]}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 8,
              spaceBetween: 30,
            },
          }}
        >
           {sliderItems && sliderItems.map((item) => (
          <SwiperSlide key={item.id} className="pl-4" onClick={onClick}>
            <MenuCard src={item.posterImage.imageUrl || ""} alt={item.title} title={item.title} />
          </SwiperSlide>
        ))}
        </Swiper>
        <div className={`flex justify-end ${className} `}>
        <button
          className={`flex justify-center items-center  custom-prev ${buttonClass}`}
        >
         <IoIosArrowBack />
        </button>
        <button
          className={`flex justify-center items-center custom-next ${buttonClass}`}
        >
          <IoIosArrowForward />
        </button>
      </div>
   
      </div>
  )
}

export default CardSlider

