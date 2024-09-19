
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BannerProps } from 'types/interfaces';
const Banner: React.FC<BannerProps> = ({ data }) => {
  const route =useRouter();
  return (
    <div className="relative flex items-center justify-start w-full h-56 overflow-hidden  md:h-96 lg:mt-7 bg-[#F6EFE9]">
      <Image
        src={data.imageUrl}
        alt="Shutters"
        width={800}
        height={340}
        
        className="object-cover"
      />
      <div className="absolute lg:w-3/5 md:w-3/5 inset-y-0 right-0 lg:pl-48 md:pl-48 text-left clip-custom-shape lg:p-20 p-8 md:p-20 flex flex-col justify-center items-center">
        <h2 className="lg:text-4xl md:text-2xl text-lg mr-auto font-bold text-gray-800 lg:pr-20 lg:w-3/4 w-3/4">
          {data.title}
        </h2>
        <button onClick={()=>route.push('/appointment')} className="mt-4 px-6 py-2 text-dark mr-auto bg-white rounded-lg w-fit ">
          {data.buttonText}
        </button>
      </div>
    </div>
  );
};

export default Banner;
