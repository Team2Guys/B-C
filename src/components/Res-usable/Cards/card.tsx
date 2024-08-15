import { FC } from 'react';
import { CardTypes } from '../../../types/interface';
import CustomButton from '../Button/Button';
import Image from 'next/image';

interface CardProps {
  data: CardTypes;
}

const Card: FC<CardProps> = ({ data }) => {
  return (
    <>
      <div className="max-w-sm rounded  m-4">
        <div>
          <Image
            className="w-full h-full"
            width={100}
            height={100}
            src={data.image}
            alt={data.heading}
          />
        </div>
        <div className="px-2 py-4">
          <div className="font-bold text-xl mb-2">{data.heading} </div>
          <p className="text-gray-700 text-base">{data.paragraph}</p>
        </div>
        <div className="font-light text-sm">
          <CustomButton>{data.buttonText}</CustomButton>
        </div>
      </div>
    </>
  );
};

export default Card;
