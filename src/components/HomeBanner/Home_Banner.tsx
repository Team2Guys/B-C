import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BannerProps } from 'types/interfaces';
const Banner: React.FC<BannerProps> = () => {
  const route = useRouter();
  return (
    <div className="grid grid-cols-12 items-center bg-[#F6EFE9] py-2 sm:py-0">
      <div className="col-span-12 sm:col-span-4 md:col-span-5 2xl:col-span-6">
        <Image
          src={'/assets/images/measure_shutter/measure_shutter.png'}
          alt="Shutters"
          width={800}
          height={600}
          className=" h-full md:h-[377px] w-full"
        />
      </div>
      <div className="col-span-1"/>
      <div className="col-span-12 sm:col-span-6 md:col-span-5 2xl:col-span-4 space-y-2 px-4 md:px-0 py-2 md:py-0">
        <p className=' text-16 md:text-[34px] xl:text-[41px] font-bold'>From Bay Windows to Patio Doors..</p>
        <button onClick={() => route.push('/request-appointment')} className="text-[18px] leading-4  text-black bg-white p-2 md:px-6 md:py-4 rounded-md capitalize">
        Book A Free Home Design Visit
        </button>
      </div>
      <div className="col-span-1"/>

    </div>
  );
};

export default Banner;
