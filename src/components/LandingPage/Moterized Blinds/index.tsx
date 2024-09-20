import React from 'react'
import Image from 'next/image';

const MoterizedBlinds = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between bg-[#A9B4A4] px-6 mt-2 my-8">
  <div className="sm:w-1/2">
        <Image
          src="/assets/images/Landing/Rectangle8.png" 
          alt="Motorized Blinds"
          width={800}
          height={500}
          className="w-full object-cover max-h-96"
        />
      </div>
    <div className="sm:w-1/2 p-8 space-y-3 text-white">
        <h2 className="text-1xl sm:text-3xl  lg:text-4xl font-normal font-serif text-nowrap">Benefits Of <br /> <span className='text-1xl sm:text-3xl lg:text-4xl font-serif font-extrabold '>Motorized Blinds</span></h2>
        
        <p className="font-semibold text-lg">
          Automated Scheduling
          <span className="font-normal"> Set timers to automatically open or close your blinds at specific times for added convenience.</span>
        </p>

        <p className="font-semibold text-lg">
          Enhanced Convenience
          <span className="font-normal"> Enjoy the ease of controlling your blinds with a remote or smartphone app, eliminating the need for manual adjustments.</span>
        </p>
      </div>
    </div>
  );
};

export default MoterizedBlinds;