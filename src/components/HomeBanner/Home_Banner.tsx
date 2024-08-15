// Banner.tsx
import Image from 'next/image';
import React from 'react';
import { BannerProps } from 'types/interface';

const Banner: React.FC<BannerProps> = ({ data }) => {
  return (
    <div className="relative flex items-center justify-start w-full h-56 overflow-hidden bg-gray-200 md:h-96 lg:mt-7">
      <Image
        src={data.imageUrl}
        alt="Shutters"
        // layout="fill"
        width={800}
        height={340}
        objectFit="cover"
        className=""
      />
      <div className="absolute lg:w-3/5 md:w-3/5 inset-y-0 right-0 bg-[#F6EFE9] lg:pl-48 md:pl-48 text-left clip-custom-shape lg:p-20 p-20 md:p-20 flex flex-col justify-center items-center">
        <h2 className="lg:text-4xl md:text-2xl text-lg mr-auto font-bold text-gray-800 lg:pr-20 lg:w-3/4 w-3/4">
          {data.title}
        </h2>
        <button className="mt-4 px-6 py-2 text-dark mr-auto bg-white rounded-lg w-fit ">
          {data.buttonText}
        </button>
      </div>
    </div>
  );
};

export default Banner;
