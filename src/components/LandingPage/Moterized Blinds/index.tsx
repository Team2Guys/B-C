import React from 'react';
import Image from 'next/image';

interface BlindsSectionProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  benefits: { heading: string; description: string }[];
}

const MoterizedBlinds: React.FC<BlindsSectionProps> = ({ title, subtitle, imageUrl,benefits }) => {
  return (
    <div className='mb-5 px-0'>
      <div className="w-full flex flex-col sm:flex-row items-center">
        <div className="w-full sm:w-1/2 flex items-center">
          <div className='bg-secondary h-auto sm:h-80 lg:h-96 sm:w-5'></div>
          <div className='w-full md:w-12/12'>
          <Image
            src={imageUrl}
            alt={subtitle}
            width={800}
            height={500}
            className="h-auto sm:h-[350px] lg:h-[420px]  w-full  object-fill"
          />
          </div>
        </div>
        <div className="pt-2 pb-3 sm:pb-0 md:pl-7 sm:w-1/2 sm:h-80 lg:h-96 mt-2 lg:pt-7 md:pt-4 px-4 space-y-5 text-white w-full xl:w-[840px] 2xl:w-1/2 bg-secondary">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light font-serif text-nowrap xl:mt-6">
          {title}<br /> 
            <span className='text-1xl sm:text-3xl xl:text-4xl font-serif font-extrabold'>
            {subtitle}
            </span>
          </h2>
           <ul className="list-outside pl-5 space-y-3" style={{ listStyleType: 'circle', color: 'white' }}>
            {benefits.map((benefit, index) => (
              <li key={index} className="font-semibold text-sm md:text-base lg:text-lg">
                {benefit.heading}
                <span className="font-light"> {benefit.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MoterizedBlinds;