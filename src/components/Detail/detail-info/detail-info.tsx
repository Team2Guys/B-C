import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { POSTER_iMAGE } from 'types/types';

interface detailprops {
  title?: string;
  subtitle?: string;
  description: string;
  image: POSTER_iMAGE;
  className?: string;
  imageClass?: string;
  description2?: string;
  description3?: string;
  heading?: string;
}

const DetailInfo: React.FC<detailprops> = ({
  title,
  subtitle,
  description,
  image,
  className,
  imageClass,
  heading,
}) => {
  return (
      title ? (
        <div
          className={`flex flex-wrap lg:flex-nowrap lg:gap-4 xl:gap-20 ${className} items-center mt-10 lg:mt-20 border-b-2 pb-10 md:pb-20 border-[#6F747F]`}
        >

          <div className="w-full xl:w-5/12">
            <div className="space-y-4">
              <h2 className="text-24 text-center lg:text-start sm:text-32 lg:text-[41px] font-medium">
                {heading ? heading : `What are ${title}`}{' '}
              </h2>
              <p className="underline underline-offset-8 text-[#6F747F] ">
                {subtitle}
              </p>
              <div className="hidden lg:block space-y-3 md:space-y-10">
                <p
                  className="text-12 text-center lg:text-start md:text-14 lg:text-16 leading-6 md:leading-8"
                  dangerouslySetInnerHTML={{ __html: description }}
                ></p>
              </div>

              <div className='pb-2 lg:pb-0 lg:pt-4  w-full flex justify-center lg:justify-start'>
                <Link href={"/request-appointment"}
                  target='_blank' rel="noopener"
                  className="hidden lg:block text-12 lg:text-16 px-3 py-3 lg:px-4 lg:py-4 rounded-md bg-secondary text-white font-medium"
                >
                  BOOK A FREE APPOINTMENT
                </Link>
              </div>

            </div>
          </div>
          <div className="w-full lg:w-1/12 xl:w-0" />
          <div className="w-full xl:w-6/12 mt-4 lg:mt-0">
            <div className={`text-end  ${imageClass}`}>
              <Image
                className="h-56 xs:h-72 sm:h-[470px] 2xl:h-[526.24px] w-full rounded-3xl object-cover object-top"
                width={1000}
                height={1000}
                src={image?.imageUrl}
                alt={image?.altText || 'Image'}
                loading='lazy'
              />
              <div className="block lg:hidden mt-4 space-y-3 md:space-y-10">
                <p
                  className="text-12 text-center lg:text-start md:text-14 lg:text-16 leading-6 md:leading-8"
                  dangerouslySetInnerHTML={{ __html: description }}
                ></p>
              </div>
              <div className='pb-2 lg:pb-0 lg:pt-4  w-full flex justify-center lg:justify-start mt-4'>
                <Link href={"/request-appointment"}
                  target='_blank' rel="noopener"
                  className="block lg:hidden text-12 lg:text-16 px-3 py-3 lg:px-4 lg:py-4 rounded-md bg-secondary text-white font-medium"
                >
                  BOOK A FREE APPOINTMENT
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        'loading'
      )


  );
};

export default DetailInfo;
