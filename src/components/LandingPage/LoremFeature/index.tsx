import { FeatureData } from 'data/data';
import { FeatureType } from 'types/types';
import React from 'react';
import { GiConcentricCrescents } from "react-icons/gi";
import Image from 'next/image';
 const LoremFeatures = () => {
  return (
    <>
     <div className='relative bg-white text-black p-4 md:p-8 lg:p-16'>
     <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-4 md:px-8 lg:px-16'>
        {
            FeatureData.map((arr,index)=>
                <div className='space-y-4 md:px-8 pt-4' key={index}>
                     <Image src={arr.icon} alt="hhrh" width={50} height={50}/>
                    <h2 className='font-serif font-extrabold text-xl md:text-2xl lg:text-3xl'>{arr.title}</h2>
                    <ul className="list-outside pl-5" style={{ listStyleType: 'circle' }}>
                    <li className='text-sm md:text-base lg:text-lg mb-2' dangerouslySetInnerHTML={{ __html: arr.para1 }}></li>
                  <li className='text-sm md:text-base lg:text-lg mb-2' dangerouslySetInnerHTML={{ __html: arr.para2 }}></li>
                  <li className='text-sm md:text-base lg:text-lg mb-2' dangerouslySetInnerHTML={{ __html: arr.para3 }}></li>
                  <li className='text-sm md:text-base lg:text-lg' dangerouslySetInnerHTML={{ __html: arr.para4 }}></li>
              </ul>
            </div>
            )
        }
     </div>
        <div className='absolute inset-x-10 top-1/2 h-1 md:inset-y-10 md:left-1/2 md:top-0 md:h-full md:w-1 bg-[#A9B4A4]'></div>
      </div>
      </>
  );
};

export default LoremFeatures;
