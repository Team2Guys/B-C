import { FC } from 'react';
import { CardTypes } from '../../../types/interface';
import CustomButton from '../Button/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface CardProps {
  data: CardTypes;
}

const Card: FC<CardProps> = ({ data }) => {
  const route = useRouter();
  return (
    <>
      <div
        className="max-w-md rounded  lg:m-4 m-2 group cursor-pointer"
        onClick={() => route.push(`/products/${data.heading}`)}
      >
        <div>
          <Image
            className="lg:w-[500px] object-cover md:w-[400px] sm:w-full lg:h-[485px] md:h-[300px] sm:h-auto rounded-3xl transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            width={500}
            height={500}
            src={data.image}
            alt={data.heading}
          />
        </div>
        <div className="px-2 py-4">
          <div className="font-bold text-xl mb-2">{data.heading} </div>
          <p className="text-gray-700 text-base">{data.paragraph}</p>
        </div>
        <div className="font-bold w-fit group-hover:bg-white border-b border-b-primary rounded-none group-hover:border-gray-300 group-hover:border-b group-hover:border-secondary group-hover:rounded-full group-hover:text-black transition-colors duration-300 ease-in-out  text-sm">
          <CustomButton onClick={() => route.push('/products')}>
            {data.buttonText}
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default Card;
