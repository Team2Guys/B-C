import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { IProduct } from 'types/types';
import MenuCard from 'components/ui/menu-card';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface EstimatorSliderProps {
  buttonClass?: string;
  className?: string;
  sliderItems: IProduct[];
  onProductSelect: (product: IProduct) => void;
  breakpoints?: any;
  selectedProductId?: number; // New prop to track selected product
}

const EstimatorSlider: React.FC<EstimatorSliderProps> = ({
  buttonClass = '',
  className,
  sliderItems,
  onProductSelect,
  breakpoints,
  selectedProductId, // New prop
}) => {
  return (
    <div className="px-8">
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
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
          sliderItems.map((item) => (
            <SwiperSlide key={item.id}>
              <MenuCard
                src={item.posterImage.imageUrl || ''}
                alt={item.title}
                title={item.title}
                onClick={() => onProductSelect(item)}
                isActive={item.id === selectedProductId} // Check if the product is selected
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className={`flex justify-end ${className} `}>
        <button
          className={`flex justify-center items-center custom-prev ${buttonClass}`}
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

export default EstimatorSlider;
