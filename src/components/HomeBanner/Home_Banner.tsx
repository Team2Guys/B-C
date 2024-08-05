import Image from 'next/image';
import React from 'react';

type BannerData = {
  imageUrl: string;
  title: string;
  buttonText: string;
};

type BannerProps = {
  data: BannerData;
};

const Banner: React.FC<BannerProps> = ({ data }) => {
  return (
    <div className="relative flex items-center justify-start w-full h-56 overflow-hidden bg-gray-200 md:h-72">
      <Image
        src={data.imageUrl}
        alt="Shutters"
        layout="fill"
        objectFit="cover"
        className="opacity-90"
      />
      <div className="absolute w-3/5 inset-y-0 right-0 bg-[#F6EFE9] lg:pl-40 text-left clip-custom-shape p-8 lg:p-20">
        <h2 className="text-4xl text-left font-bold text-gray-800 lg:pr-20">
          {data.title}
        </h2>
        <button className="mt-4 px-6 py-2 text-dark text-left bg-white rounded-lg w-fit ">
          {data.buttonText}
        </button>
      </div>
    </div>
  );
};

export default Banner;
