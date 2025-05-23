import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BannerProps } from 'types/types';

const Banner: React.FC<BannerProps> = ({
  imageSrc,
  paraText,
  linkHref,
  linkText,
  linkBgColor,
  className,

}) => {
  return (
    <div className="grid grid-cols-12 items-center bg-[#F6EFE9] py-2 sm:py-0 w-full">
      <div className="col-span-12 sm:col-span-4 md:col-span-5 2xl:col-span-6">
        <Image
          src={imageSrc}
          alt="image"
          width={800}
          height={600}
          className="px-2 h-full md:h-[377px] w-full"
        />
      </div>
      <div className="col-span-1" id="booking-form"/>
      <div className="col-span-12 sm:col-span-6 md:col-span-5 2xl:col-span-4 space-y-2 px-4 md:px-0 pt-3 pb-2 sm:py-2 md:py-0 text-center sm:text-start">
      <p className={`text-16 md:text-[34px] xl:text-[41px] font-bold ${className}`}>
        {paraText}
        </p>
        <Link
          href={linkHref+"/"}
          className={`text-16 xs:text-18 leading-4 block w-fit hover:bg-primary ${linkBgColor} text-white py-2 px-4 md:px-6 md:py-4 rounded-md capitalize max-xs:mx-auto`}>
          {linkText}
        </Link>
      </div>
      <div className="col-span-1" />
    </div>
  );
};

export default Banner;
