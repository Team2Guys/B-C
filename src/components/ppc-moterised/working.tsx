"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Container from "components/Res-usable/Container/Container";
import { CgArrowLongRight } from "react-icons/cg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import { WorkingProcessProps } from "types/types";

const WorkingProcess: React.FC<WorkingProcessProps> = ({data }) => {
  const swiperRef = useRef<any>(null);
  return (
    <section className="py-12 bg-white ">
      <Container className="!px-6">
        <div className="sm:grid sm:grid-cols-2 flex flex-col items-center md:gap-3">
          <h2 className="text-3xl xl:text-[48px] font-serif font-black text-black mb-8 text-center lg:text-start leading-[48px]">
          Our Working Process
          </h2>
          <p className="lg:text-20 font-normal font-proxima text-center lg:text-start leading-[26px]">
          Hassle-free process from selection to installation. We make choosing and installing blinds effortless with our simple, step-by-step process.
          </p>
        </div>
        <div className="relative mt-7">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="px-10"
          >
            {data.map((step, index) => (
              <SwiperSlide key={index}>
                <div className="relative bg-secondary p-6 border border-black flex flex-col items-center text-center mx-8 sm:mx-10 lg:mx-4 xl:mx-7 sm:h-[250px] xl:h-[335px] ">
                  <Image src={step.icon} alt={step.title} width={50} height={50} className="xl:h-16 xl:w-16"/>
                  <h3 className="text-lg xl:text-24 font-bold mt-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm xl:text-20 font-normal font-juana text-white mt-2 leading-6">
                    {step.description}
                  </p>
                  {/* Decorative Arrows */}
                  {index !== data.length - 1 && (
                    <div className="absolute top-[20%] right-[-20px] transform -translate-y-1/2 text-black z-20 hidden xs:block">
                      <CgArrowLongRight size={45} />
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute top-[50%] transform -translate-y-1/2 z-10 
              left-0 md:left-[-20px] lg:left-[-30px] 
              w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[45px] lg:h-[45px] flex items-center justify-center"
          >
            <IoMdArrowDropleft className="w-10 h-10" />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute top-[50%] transform -translate-y-1/2 z-10 
              right-0 md:right-[-20px] lg:right-[-30px] 
              w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[45px] lg:h-[45px] flex items-center justify-center"
          >
            <IoMdArrowDropright className="w-10 h-10" />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default WorkingProcess;
