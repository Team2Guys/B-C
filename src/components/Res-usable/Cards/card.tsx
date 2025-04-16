
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
      <div
        className="max-w-md  lg:m-4 m-2  text-center sm:text-start"
      >
   
          <Image
            className="lg:w-[500px] object-cover w-full lg:h-[400px] cursor-pointer h-[280px] sm:h-[300px] rounded-3xl transition-transform duration-300 ease-in-out transform hover:scale-105"
            width={400}
            height={400}
            loading='eager'
            src={data.posterImage.imageUrl || 'image.pnd'}
            alt={data.title || 'Title Image'}
          />
       

        <div className="px-2 py-4 cursor-default">
          <div className="font-bold text-[24px] mb-2 text-center">{data.title} </div>
          
          <p className="text-[#333333] text-15 md:text-16 font-light md:leading-8 text-center md:text-center">
            {truncateText(data.description || '', 30)}
          </p>
        </div>


        <div className=" w-fit flex flex-col bg-secondary justify-center items-center text-sm mx-auto rounded-sm cursor-pointer">
          <Link href={`${href}/`} className="font-bold font-sans px-4 py-2 group-hover:border-gray-300 hover:bg-primary rounded-sm text-white"> View {data.title}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
