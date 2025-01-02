
import React from 'react';
import Image from 'next/image';
import { ICategory } from 'types/types';
import Link from 'next/link';

interface CardProps {
  data: ICategory;
  href?: string | any;
}
const truncateText = (text: string, wordLimit: number) => {
  const words = text.split(' ');
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(' ') + '...';
};
const Card: React.FC<CardProps> = ({ data, href }) => {
  return (
    <>
      <Link
        className="max-w-md rounded  lg:m-4 m-2 group cursor-pointer text-center sm:text-start"
        href={`${href}`}
      >
        <div>
          <Image
            className="lg:w-[500px] object-cover sm:w-[400px] lg:h-[400px] sm:h-[300px]  rounded-3xl transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            width={400}
            height={400}
            loading='lazy'
            src={data.posterImage.imageUrl || 'image.pnd'}
            alt={data.title || 'Title Image'}
          />
        </div>
        <div className="px-2 py-4">
          <div className="font-bold text-[24px] mb-2">{data.title} </div>
          <p className="text-[#333333] text-15 md:text-16 font-light md:leading-8 md:text-justify">
            {truncateText(data.description || '', 30)}
          </p>
        </div>
        <div className=" w-fit flex flex-col justify-center items-center text-sm mx-auto">
          <Link
            className="font-bold font-sans rounded-none group-hover:rounded-full px-3 py-1 group-hover:border-gray-300 group-hover:bg-white"
            href={`${href}`}
          >
            View {data.title}
          </Link>
          <hr className="border-b-4 border-b-primary w-24 mt-1" />
        </div>
      </Link>
    </>
  );
};

export default Card;
