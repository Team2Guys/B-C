'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { EsProduct, EstimatorProps } from 'types/interfaces';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const EstimatorProduct: React.FC<EstimatorProps> = ({
  selectProduct,
  setActiveProduct,
  activeProduct,
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleProductSelect = (product: EsProduct) => {
    setActiveProduct(product);
  };

  return (
    <div className="relative">
      {/* Custom Arrows */}
      <button
        ref={prevRef}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-secondary rounded-full shadow-md flex justify-center items-center size-6"
      >
        <MdKeyboardArrowLeft className='text-white text-2xl' />
      </button>
      <button
        ref={nextRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-secondary rounded-full shadow-md flex justify-center items-center size-6"
      >
        <MdKeyboardArrowRight className='text-white text-2xl' />
      </button>

      <Swiper
        modules={[Navigation]}
        // spaceBetween={10}
        slidesPerView={5}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          480: { slidesPerView: 4 },
          640: { slidesPerView: 5 },
        }}
      >
        {selectProduct?.map((product, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <div
              onClick={() => handleProductSelect(product)}
              className={`cursor-pointer mt-2 sm:mt-0 ${activeProduct?.id === product.id ? 'font-semibold' : ''
                }`}
            >
              <div className='size-28'>
                <Image
                  className={`w-full h-full !relative border-4 ${activeProduct?.id === product.id
                      ? 'border-secondary'
                      : 'border-white'
                    }`}
                    fill
                  loading="eager"
                  src={product.posterImage?.imageUrl}
                  alt={product.title || 'Product Image'}
                />
              </div>
              <div
                className={`mt-2 text-center text-14 xl:text-16 px-1 ${activeProduct?.id === product.id
                    ? 'border-b-2 border-secondary w-fit mx-auto'
                    : ''
                  }`}
              >
                {product.title.split(' ').map((word, i) => (
                  <p key={i}>{word}</p>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EstimatorProduct;
