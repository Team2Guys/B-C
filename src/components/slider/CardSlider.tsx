import React from 'react';

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
import { useRouter } from 'next/navigation';
import { generateSlug } from 'data/data';

interface CardSliderProps {
  buttonClass?: string;
  className?: string;
  sliderItems: IProduct[];
  onClick?: any;
  title?: string;
  breakpoints?: any;
  setIsOpen?: any;
}

const CardSlider: React.FC<CardSliderProps> = ({
  buttonClass = '',
  className,
  sliderItems,
  onClick,
  title,
  setIsOpen,
  breakpoints,
}) => {
  const route = useRouter();

  return (
    <div className="px-4">
      <Swiper
        slidesPerView={8}
        spaceBetween={20}
        loop={true}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={breakpoints}
      >
        {sliderItems &&
          sliderItems.map((item) => {
            //@ts-expect-error
            const parent = generateSlug(title);
            return (
              <SwiperSlide
                key={item.id}
                className=""
                onClick={() => {
                  route.push(
                    `/${parent === 'shutter' ? `${parent}s-range` : parent}/${generateSlug(item.title)}`,
                  );
                  setIsOpen(false);
                }}
              >
                <MenuCard
                  src={item.posterImage.imageUrl || ''}
                  alt={item.title}
                  title={item.title}
                />
              </SwiperSlide>
            );
          })}
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
  );
};

export default CardSlider;
