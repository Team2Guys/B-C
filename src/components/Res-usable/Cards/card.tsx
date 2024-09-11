import { FC } from 'react';
import CustomButton from '../Button/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ICategory } from 'types/types';

interface CardProps {
  data: ICategory;
}
const truncateText = (text: string, wordLimit: number) => {
  const words = text.split(' ');
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(' ') + '...';
};
const Card: React.FC<CardProps> = ({ data }) => {
  const route = useRouter();
  return (
    <>
      <div
        className="max-w-md rounded  lg:m-4 m-2 group cursor-pointer"
        onClick={() => route.push(`/products/${data.title}`)}
      >
        <div>
          <Image
            className="lg:w-[500px] object-cover md:w-[400px] sm:w-full lg:h-[485px] md:h-[300px] sm:h-auto rounded-3xl transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            width={500}
            height={500}
            src={data.posterImage.imageUrl  || "image.pnd"}
            alt={data.title || "Title Image"}
          />
        </div>
        <div className="px-2 py-4">
          <div className="font-bold text-xl mb-2">{data.title} </div>
          <p className="text-gray-700 text-base">{truncateText(data.description || '', 30)}</p>
        </div>
        <div className=" w-fit border-b-4 border-b-primary   pb-1  text-sm">
          <button className='font-bold rounded-none group-hover:rounded-full px-3 py-1 group-hover:border-gray-300 group-hover:bg-white' onClick={() => route.push('/products')}>
            View {data.title}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
