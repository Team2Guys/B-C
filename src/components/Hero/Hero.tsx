'use client';
import Container from 'components/Res-usable/Container/Container';
import CustomSlider from 'components/slider/Slider';
import { heroSlider } from 'data/data';
import Image from 'next/image';
import SliderModal from './SliderModal';
import React, { useEffect, useState } from 'react';

function Hero() {
  const [showModel, setshowModel] = useState<string>('');

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const id = target.id;

      console.log('Document clicked', id);
      if (id !== 'modalHandler') {
        return setshowModel('');
      }
    };
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <Container>
      <section className="border w-full flex flex-wrap lg:flex-nowrap">
        <div className=" min-w-[500px] left-side w-1/2 flex flex-col justify-center gap-3 ">
          <div className="w-full flex items-center gap-2">
            <svg
              width="34"
              height="2"
              viewBox="0 0 34 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="1" x2="34" y2="1" stroke="black" stroke-width="2" />
            </svg>

            <h5 className="text-black font-gotham text-[25x] font-extralight">
              {' '}
              Latest Designs
            </h5>
          </div>
          <h1 className="text-black font-extrabold text-[30px] lg:text-[53px]">
            Custom Window <br />
            Blinds & Curtains
          </h1>
          <p className="font-normal text-14">
            Lorem Ipsum is simply dummy text of the <br /> and typesetting
            industry.
          </p>
          <button className="Upper w-fit bg-white text-14 font-semibold text-black rounded-full px-6  py-2">
            SEE ALL
          </button>
        </div>

        <div className="rigt-side w-full lg:w-1/2 flex flex-col justify-center">
          <CustomSlider className="Hero-slider">
            {heroSlider.map((item: any, index: number) => {
              return (
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
              );
            })}
          </CustomSlider>
        </div>
      </section>
    </Container>
  );
}

export default Hero;
