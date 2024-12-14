'use client';
import Container from 'components/Res-usable/Container/Container';
import CustomSlider from 'components/slider/Slider';
import { heroSlider } from 'data/data';
import Image from 'next/image';
import SliderModal from './SliderModal';
import React, { useState } from 'react';
import Link from 'next/link';

function Hero() {
  const [showModel, setshowModel] = useState<string>('');

  return (
    <Container>
      <CustomSlider className="Hero-slider z-40 mb-0 lg:mb-3 sm:mb-5 md:pt-10 md:pb-5">
        {heroSlider.map((item: any) => {
          return (
            <div key={item.id}>
              <div className=" flex flex-wrap md:flex-nowrap lg:px-0 px-4 lg:h-110 h-full">
                <div className="h-full w-full md:w-1/2 flex flex-col lg:justify-start justify-center gap-1  ">
                  <div className="w-full flex items-center justify-center md:justify-start gap-2 lg:mt-0 mt-5">
                    <svg
                      width="34"
                      height="2"
                      viewBox="0 0 34 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        y1="1"
                        x2="34"
                        y2="1"
                        stroke="black"
                        color="black"
                      />
                    </svg>

                    <h5 className="text-black font-gotham text-16 sm:text-20 md:text-[30px] font-light ">
                      Blinds & Curtains Dubai
                    </h5>
                  </div>
                  <h1 className="text-black font-extrabold text-25 md:text-[27px] lg:text-[33px] xl:text-[43px] 2xl:text-[53px] sm:text-3xl leading-[30px] md:leading-[45px] lg:leading-[60px] text-center md:text-start">
                    {/* Custom Window <br />
                    Blinds & Curtains */}
                    {item.heading}<br />
                    {item.subheading}
                  </h1>
                  <p className="font-normal text-14 mt-0 md:mt-5 mb-2 md:mb-5 text-center md:text-start">
                    {/* Lorem Ipsum is simply dummy text of the <br className='hidden md:block' /> and
                    typesetting industry. */}
                    {item.content}
                  </p>
                  <Link className='uppercase bg-white hidden md:block mx-auto md:mx-0 text-12 sm:text-14 md:text-16 font-semibold shadow-md text-black rounded-full px-6 py-4 lg:mb-0 mb-12 w-fit' href={'/request-appointment'}>
                    Book A Free Home Design Visit
                  </Link>
                </div>

                <div className="h-full w-full md:w-1/2 flex flex-col gap-3 sm:gap-5 md:gap-0 lg:justify-start justify-center !z-50 ">
                  <div className="relative">
                    {showModel == '1_model' && (
                      <SliderModal
                        className="-top-28 md:top-12 sm:top-12 xl:top-16"
                        setshowModel={setshowModel}
                      />
                    )}
                    <div
                      id="modalHandler"
                      onClick={() => setshowModel('1_model')}
                      className="cursor-pointer absolute bg-black rounded-full w-9 h-9 text-white p-1 
                      top-16
                      sm:top-28
                       md:top-16 lg:top-20 xl:top-32
                       text-10 text-center "
                    >
                      <span id="modalHandler">why us?</span>
                    </div>
                    <Image
                      className="w-full h-full object-cover"
                      width={500}
                      height={500}
                      alt={item.name}
                      src={item.imageUrl}
                    />
                    <div
                      id="modalHandler"
                      onClick={() => setshowModel('2_model')}
                      className="cursor-pointer absolute bg-black rounded-full w-9 h-9 text-white p-1  max-xs:right-0 max-xl:top-[53px] max-lg:top-[30px] bottom-10 right-10 text-10 text-center"
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
                  <Link className='uppercase bg-white md:hidden mx-auto md:mx-0 text-12 sm:text-14 md:text-16 font-semibold shadow-md text-black rounded-full px-6 py-4 lg:mb-0 mb-4 sm:mb-8 w-fit' href={'/request-appointment'}>
                    Book A Free Home Design Visit
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </CustomSlider>
    </Container>
  );
}

export default Hero;
