'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import SliderModal from './SliderModal';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { heroSlider } from 'data/data';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Container from 'components/Res-usable/Container/Container';

const SliderInfo = () => {
  const [showModel, setshowModel] = useState<string>('');
  return (

    <Swiper
      loop={true}
      pagination={{
        enabled: true,
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper hero-pagination"
    >
      {heroSlider.map((item: any, index: number) => (
        <SwiperSlide key={index}>
          <Container className="flex flex-wrap items-center md:flex-nowrap gap-5 w-full max-md:pt-7 md:py-8 2xl:py-20">
            <div className="w-full md:w-6/12 xl:w-5/12">
              <div className="w-full flex items-center justify-center md:justify-start ">
                <div className="hidden sm:block w-8 border-b-2 border-black" />
                <h2 className="text-black font-gotham mb-2 xs:mb-0 text-16 sm:text-20 md:text-[20px] lg:text-[30px] font-light ">
                  Blinds & Curtains Dubai
                </h2>
              </div>
              {index === 0 ? (
              <h1 className="text-black font-extrabold mb-2 xs:mb-0 text-20 md:text-[18px] lg:text-[29px] xl:text-[43px] 2xl:text-[53px] sm:text-3xl leading-[30px] md:leading-[30px] lg:leading-[43px] text-center md:text-start 2xl:leading-[58px]">
                {item.heading}{' '}
                <br />
                {item.subheading}
              </h1>
            ) : (
              <h2 className="text-black font-extrabold mb-2 xs:mb-0 text-20 md:text-[18px] lg:text-[29px] xl:text-[43px] 2xl:text-[53px] sm:text-3xl leading-[30px] md:leading-[30px] lg:leading-[43px] text-center md:text-start 2xl:leading-[58px]">
                {item.heading}{' '}
                <br />
                {item.subheading}
              </h2>
            )}
              <p className="font-normal text-13 xs:text-14 mt-0 md:mt-5 mb-2 md:mb-5 text-center md:text-start">
                {item.content}
              </p>
              <Link
                aria-label="Book A Free Home Design Visit"
                className="uppercase bg-secondary hidden md:block mx-auto md:mx-0 text-12 sm:text-14 lg:text-16 font-semibold shadow-md text-white hover:bg-primary rounded-full px-6 py-4  w-fit"
                href={'/request-appointment'}
              >
                Book A Free Home Design Visit
              </Link>
            </div>
            <div className=" space-y-4 mx-auto w-full  md:w-6/12 xl:w-7/12">
              <div className="relative mb-3 xs:mb-0">
                {showModel == '1_model' && (
                  <SliderModal
                    className="-top-28 md:top-12 sm:top-12 xl:top-16"
                    setshowModel={setshowModel}
                  />
                )}
                <div
                  id="modalHandler"
                  onClick={() => setshowModel('1_model')}
                  className="cursor-pointer absolute bg-black rounded-full w-9 h-9 text-white p-1 -left-2 2xl:left-6
            top-10
            sm:top-28
            md:top-16 lg:top-20 xl:top-32
            text-10 text-center "
                >
                  <span id="modalHandler">why us?</span>
                </div>
                <Image
                  className="w-full h-full
                   object-cover max-sm:object-contain
                   "
                  loading="eager"
                  priority
                  width={800}
                  height={800}
                  alt={item.name || 'Image'}
                  src={item.imageUrl}
                />
                <div
                  id="modalHandler"
                  onClick={() => setshowModel('2_model')}
                  className="cursor-pointer absolute bg-black rounded-full w-9 h-9 text-white p-1  bottom-2 xs:bottom-10 right-0 xs:-right-1 md:right-0 lg:right-8 2xl:lg:right-10 text-10 text-center"
                >
                  <span id="modalHandler">why us?</span>
                </div>

                {showModel == '2_model' && (
                  <SliderModal
                    modelType={showModel}
                    setshowModel={setshowModel}
                    className="-top-28 md:top-10 lg:top-16 xl:top-36 2xl:top-44 right-0"
                  />
                )}
              </div>

              <div className="pt-5 pb-5 mx-auto text-center">
                <Link
                  aria-label="Book A Free Home Design Visit"
                  className="uppercase bg-white md:hidden mx-auto md:mx-0 text-12 sm:text-14 md:text-16 font-semibold shadow-md text-black rounded-full px-6 py-4 lg:mb-0"
                  href={'/request-appointment'}
                >
                  Book A Free Home Design Visit
                </Link>
              </div>
            </div>
          </Container>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderInfo;
