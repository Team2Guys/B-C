"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Container from "components/Res-usable/Container/Container";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { CarouselProps } from "types/interfaces";

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const swiperRef = useRef<any>(null);
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.update();
    }
  }, []);
  
  return (
    <section className="relative py-8">
      <Container>
        <button className="absolute left-0 xl:left-3 2xl:left-36 top-10 sm:top-20 xl:top-12 text-black z-10" id="prevBtn">
          <IoMdArrowDropleft className="w-10 h-10" />
        </button>
        <button className="absolute right-0 xl:right-3 2xl:right-36 top-10 sm:top-20 xl:top-12 text-black z-10" id="nextBtn">
          <IoMdArrowDropright className="w-10 h-10" />
        </button>

        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          navigation={{
            prevEl: "#prevBtn",
            nextEl: "#nextBtn",
          }}
          className="relative"
        >
          {data.map((item, index) => (
            <SwiperSlide
              key={index}
              className={`flex flex-col items-center lg:border-black lg:border-r px-5 lg:px-0 ${
                (index + 1) % 5 === 0 ? "lg:border-r-0" : ""
              }`}
            >
              <div className="flex justify-center items-start px-5 gap-4">
                <Image src={item.icon} alt={item.title} width={40} height={40} className="w-10 h-10" />
                <div>
                  <h3 className="text-lg lg:text-20 font-bold">{item.title}</h3>
                  <p className="text-sm lg:text-16 text-gray-600">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Carousel;
