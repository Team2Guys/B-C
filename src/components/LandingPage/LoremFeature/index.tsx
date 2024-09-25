import { FeatureData } from 'data/data';
import { FeatureType } from 'types/types';
import React from 'react';
import { GiConcentricCrescents } from "react-icons/gi";
import Image from 'next/image';
import Container from 'components/Res-usable/Container/Container';

const LoremFeatures = () => {
  return (
    <>
      <div className='relative w-full bg-white text-black p-4 md:p-8 lg:p-16 max-w-screen-2xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {FeatureData.map((arr, index) => (
            <div
            className={`space-y-4 md:px-8 pt-4 ${
              index === 0 ? 'border-b-2 md:border-b-0 md:border-r-2' : ''
            }`} 
            key={index}
          >
              <Image src={arr.icon} alt="icon" width={200} height={200} className='h-[40.7px] w-[31.89px]' />
              <h2 className='font-serif font-extrabold text-xl md:text-2xl lg:text-3xl'>
                {arr.title}
              </h2>
              <ul className=" list-disc pl-5">
                {
                  arr.list.map((array,index)=>(
                    <li className='text-sm md:text-base lg:text-lg mb-2' key={index}>
                    <strong >{array.heading}</strong> <span>{array.para}</span>
                  </li>
                  ))
                  }
                  
              </ul>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default LoremFeatures;
