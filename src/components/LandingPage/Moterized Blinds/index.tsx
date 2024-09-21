import React from 'react';
import Image from 'next/image';

const MoterizedBlinds = () => {
  return (
    <div className='mb-4 mx-0 px-0'>
      <div className="w-full flex flex-col sm:flex-row items-center justify-between">
        {/* Left side */}
        <div className="sm:w-1/2 flex items-center">
          <div className='bg-secondary h-72 lg:h-96 xl:h-72 w-5'></div>
          <Image
            src="/assets/images/Landing/Rectangle8.png"
            alt="Motorized Blinds"
            width={800}
            height={500}
            className="w-full object-cover max-h-96"
          />
        </div>

        {/* Right side */}
        <div className="pt-2 sm:w-1/2 h-72 md:h-80 lg:h-96 xl:h-72 mt-2 lg:pt-7 md:pt-4 px-4 space-y-3 text-white w-full bg-secondary">
          <h2 className="text-1xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-normal font-serif text-nowrap">
            Benefits Of <br /> 
            <span className='text-1xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-serif font-extrabold'>
              Motorized Blinds
            </span>
          </h2>

          {/* Unordered list with custom white bullets */}
          <ul className="list-outside pl-5" style={{ listStyleType: 'circle', color: 'white' }}>
            <li className="font-semibold text-base md:text-lg lg:text-xl">
              Automated Scheduling
              <span className="font-normal"> Set timers to automatically open or close your blinds at specific times for added convenience.</span>
            </li>
            <li className="font-semibold text-base md:text-lg lg:text-xl">
              Enhanced Convenience
              <span className="font-normal"> Enjoy the ease of controlling your blinds with a remote or smartphone app, eliminating the need for manual adjustments.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MoterizedBlinds;