"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Contant from '../Contant';
interface TabItem {
  icon: string;
  activeicon: string;
  tab?: string;
  title: string;
  video: string;
  description: string;
}

interface MoterizedServiceProps {
  TabData: TabItem[];
}

const MoterizedService: React.FC<MoterizedServiceProps> = ({ TabData }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='bg-light pt-5 relative mb-5 max-w-screen-2xl mx-auto md:pb-5'>
      <div className='lg:max-w-[90%] mx-auto px-2'>
        <h2 className='pl-6 lg:pl-0 font-serif text-black text-lg md:text-3xl sm:text-2xl lg:text-4xl'>
          Like the <span className='font-extrabold'>idea</span> of going electric?
        </h2>
        <div className='px-6 lg:px-0 flex justify-between gap-4 sm:gap-6 lg:gap-8 items-center border-b border-b-black mt-4 whitespace-nowrap overflow-y-auto'>
          {TabData.map((arr, index) => (
            <div key={index} className='flex flex-col justify-center items-center space-y-2 sm:space-y-3 lg:space-y-4'>
              <button
                className={`px-4 py-2 text-lg flex flex-col space-y-2 justify-center items-center ${
                  activeTab === index ? 'text-black' : ' text-primary'
                }`}
                onClick={() => setActiveTab(index)}>
                <Image
                  src={activeTab === index ? arr.icon : arr.activeicon}
                  width={50}
                  height={50}
                  alt="icon"/>
                <p className={`text-xs md:text-sm lg:text-lg ${activeTab === index ? 'text-black' : 'text-primary'}`}>{arr.tab}</p>
              </button>
            </div>
          ))}
        </div>
        
        <div className='w-full '>
          <Contant TabData={TabData[activeTab]} /> 
        </div>
      </div>
    </div>
  );
};

export default MoterizedService;
