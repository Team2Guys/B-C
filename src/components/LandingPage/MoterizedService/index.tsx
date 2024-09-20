'use client';
import Image from 'next/image';
import { TabData } from 'data/data';
import React, { useState } from 'react';
import Contant from '../Contant';// Ensure Contant is correctly imported

const MoterizedService: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0); // Track the active tab

  return (
    <>
      <div className='flex flex-col justify-center items-center space-y-4 mx-auto bg-light mb-4 px-4 sm:px-6 lg:px-8 pt-3'>
        <h2 className='font-serif text-black text-center text-lg sm:text-2xl lg:text-4xl'>
          So, What do <span className='font-extrabold'>Moterization systems</span> Do For You
        </h2>

        {/* Tab buttons */}
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 justify-center items-center'>
          {TabData.map((arr, index) => (
            <div key={index} className='flex flex-col justify-center items-center space-y-2 sm:space-y-3 lg:space-y-4'>
              <button
                className={`px-4 py-2 text-lg flex flex-col space-y-2 justify-center items-center ${
                  activeTab === index ? 'text-black' : ' text-primary'
                }`}
                onClick={() => setActiveTab(index)} // Set active tab on click
              >
                <Image src={arr.icon} width={50} height={50} alt="icon" />
                <p className={activeTab === index ? 'text-black' : ' text-primary'}>
                  Remote Control
                </p>
              </button>
            </div>
          ))}
        </div>

        {/* Pass the selected tab's data to the Contant component */}
        <div className='w-full mt-6'>
          <Contant TabData={TabData[activeTab]} /> {/* Pass active tab data */}
        </div>
      </div>
    </>
  );
};

export default MoterizedService;