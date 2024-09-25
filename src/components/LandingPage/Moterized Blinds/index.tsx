import React from 'react';
import Image from 'next/image';
import Container from 'components/Res-usable/Container/Container';

const MoterizedBlinds = () => {
  return (
    <div className='mb-5 px-0 max-w-screen-2xl mx-auto'>
      <div className="w-full flex flex-col sm:flex-row items-center justify-between">
        {/* Left side */}
        <div className="w-full sm:w-1/2 flex items-center">
          <div className='bg-secondary h-auto sm:h-80 md:h-[380px] lg:h-96 xl:h-96 sm:w-5'></div>
          <div className='w-full md:w-12/12'>
          <Image
            src="/assets/images/Landing/Rectangle8.png"
            alt="Motorized Blinds"
            width={800}
            height={500}
            className="h-full sm:h-[350px] md:h-[400px] lg:h-[420px]  w-full  object-cover"
          />
          </div>
        </div>

        {/* Right side */}
        <div className="pt-2 md:pl-7 sm:w-1/2 sm:h-80 md:h-[380px] lg:h-96 xl:h-96 mt-2 lg:pt-7 md:pt-4 px-4 space-y-5 text-white w-full xl:w-[840px] bg-secondary">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-light font-serif text-nowrap xl:mt-6">
            Benefits Of <br /> 
            <span className='text-1xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-serif font-extrabold'>
              Motorized Blinds
            </span>
          </h2>

          {/* Unordered list with custom white bullets */}
          <ul className="list-outside pl-5 space-y-3" style={{ listStyleType: 'circle', color: 'white' }}>
            <li className="font-semibold text-sm md:text-base lg:text-lg">
              Automated Scheduling
              <span className="font-light"> Set timers to automatically open or close your blinds at specific times for added convenience.</span>
            </li>
            <li className="font-semibold text-sm md:text-base lg:text-lg">
              Enhanced Convenience
              <span className="font-light"> Enjoy the ease of controlling your blinds with a remote or smartphone app, eliminating the need for manual adjustments.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MoterizedBlinds;