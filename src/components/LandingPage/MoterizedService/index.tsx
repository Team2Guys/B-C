"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Container from 'components/Res-usable/Container/Container';
import Contant from '../Contant';
import { TabData } from 'data/data';
interface TabItem {
  icon: string;
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
    <div className='bg-light pt-5 relative mb-5 max-w-screen-2xl mx-auto'>
      <Container className='2xl:max-w-[90%]'>
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
                onClick={() => setActiveTab(index)}
              >
                <Image
                  src={arr.icon}
                  width={50}
                  height={50}
                  alt="icon"
                  className={activeTab === index ? 'filter fill-black invert' : 'filter text-primary'}
                />
                <p className={activeTab === index ? 'text-black' : ' text-primary'}>
                  {arr.tab}
                </p>
              </button>
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className='w-full '>
          <Contant TabData={TabData[activeTab]} /> {/* Now correctly passes expected data */}
        </div>
      </Container>
    </div>
  );
};

export default MoterizedService;
