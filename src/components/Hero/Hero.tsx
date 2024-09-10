'use client';
import Container from 'components/Res-usable/Container/Container';
import CustomSlider from 'components/slider/Slider';
import { heroSlider } from 'data/data';
import Image from 'next/image';
import SliderModal from './SliderModal';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function Hero() {
  const [showModel, setshowModel] = useState<string>('');
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const id = target.id;
      console.log('Document clicked', id);
      if (id !== 'modalHandler') {
        setshowModel('');
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <Container>
      <CustomSlider className="Hero-slider z-40 mb-10 lg:mb-3 md:mb-5">
        {heroSlider.map((item: any, index) => {
          return (
            <div key={item.id}>
              <div
                className=" flex flex-wrap md:flex-nowrap  lg:px-0 px-4"
                
              >
                <div className=" left-side w-full md:w-1/2 flex flex-col justify-center gap-1">
                  <div className="w-full flex items-center gap-2 lg:mt-0 mt-12">
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

                    <h5 className="text-black font-gotham text-20 md:text-[30px] font-light ">
                      Latest Designs
                    </h5>
                  </div>
                  <h1 className="text-black font-extrabold lg:text-[53px] text-3xl leading-[50px] md:leading-[60px]">
                    Custom Window <br />
                    Blinds & Curtains
                  </h1>
                  <p className="font-normal text-14 mt-0 md:mt-5 mb-5">
                    Lorem Ipsum is simply dummy text of the <br /> and
                    typesetting industry.
                  </p>
                  <Link href={'./gallery'}>
                    <button className="uppercase bg-white text-16 font-semibold text-black rounded-full px-6 py-4 lg:mb-0 mb-12">
                    Book now 
                  </button>
                  </Link>
                </div>

                <div className="rigt-side w-full md:w-1/2 flex flex-col  justify-center border !z-50">
                  <div  className="relative">
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