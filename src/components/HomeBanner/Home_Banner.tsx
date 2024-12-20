import Image from 'next/image';
import Link from 'next/link';
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
          className="px-2 h-full md:h-[377px] w-full"
        />
      </div>
      <div className="col-span-1"/>
      <div className="col-span-12 sm:col-span-6 md:col-span-5 2xl:col-span-4 space-y-2 px-4 md:px-0 pt-3 pb-2 sm:py-2 md:py-0 text-center sm:text-start">
        <p className=' text-16 md:text-[34px] xl:text-[41px] font-bold'>From Bay Windows to Patio Doors..</p>
        <Link href='/request-appointment' className="text-16 xs:text-18 leading-4 block w-fit shadow-md text-black bg-white py-2 px-4 md:px-6 md:py-4 rounded-md capitalize">
        Book A Free Home Design Visit
        </Link>
      </div>
      <div className="col-span-1"/>

    </div>
  );
};

export default Banner;
