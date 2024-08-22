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
      <CustomSlider className="Hero-slider lg:mb-3 mb-5">
        {heroSlider.map((item: any, index: number) => {
          return (
            <>
              <div
                className=" max-w-screen-2xl mx-auto w-full flex max-sm:flex-wrap xs:overflow-auto lg:px-0 px-4"
                key={index}
              >
                <div className=" min-w-[500px] left-side w-1/2 flex flex-col justify-center gap-3 ">
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

                    <h5 className="text-black font-gotham text-[25x] font-extralight ">
                      Latest Designs
                    </h5>
                  </div>
                  <h1 className="text-black font-extrabold lg:text-[53px] text-3xl leading-normal">
                    Custom Window <br />
                    Blinds & Curtains
                  </h1>
                  <p className="font-normal text-14">
                    Lorem Ipsum is simply dummy text of the <br /> and
                    typesetting industry.
                  </p>
                  <Link href={'./gallery'}>
                    <button className="Upper w-fit bg-white text-14 font-semibold text-black rounded-full px-6 py-2 lg:mb-0 mb-12">
                      SEE ALL
                    </button>
                  </Link>
                </div>

                <div className="rigt-side w-1/2 sm:flex flex-col hidden justify-center border">
                  <div key={index} className="relative">
                    {showModel == '1_model' && (
                      <SliderModal setshowModel={setshowModel} />
                    )}
                    <div
                      id="modalHandler"
                      onClick={() => setshowModel('1_model')}
                      className="cursor-pointer absolute bg-black rounded-full w-9 h-9 text-white p-1 max-xl:top-[53px] max-lg:top-[30px] top-[141px] text-10 text-center"
                    >
                      <span id="modalHandler">why us?</span>
                    </div>
                    <Image
                      key={index}
                      className="w-full h-full object-cover"
                      width={500}
                      height={500}
                      alt={item.name}
                      src={item.imageUrl}
                    />
                    <div
                      id="modalHandler"
                      onClick={() => setshowModel('2_model')}
                      className="cursor-pointer absolute bg-black rounded-full w-9 h-9 text-white p-1 max-xl:top-[53px] max-lg:top-[30px] bottom-10 right-10 text-10 text-center"
                    >
                      <span id="modalHandler">why us?</span>
                    </div>

                    {showModel == '2_model' && (
                      <SliderModal
                        setshowModel={setshowModel}
                        className="top-20 right-0"
                      />
                    )}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </CustomSlider>
    </Container>
  );
}

export default Hero;
