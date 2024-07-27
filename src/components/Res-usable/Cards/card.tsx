// Card.tsx
import { FC } from 'react';
// import { CardData } from '../types';
import {CardTypes} from '../../../types/interface'
import CustomButton from '../Button/Button';
import Image from 'next/image';
// import { Button, Card as ShadeCard } from 'shade-ui';

interface CardProps {
  data: CardTypes;
}

const Card: FC<CardProps> = ({ data }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden m-4">
      <Image className="w-full" src={data.image} alt={data.heading} />
      <div className="px-2 py-4">
        <div className="font-bold text-xl mb-2">{data.heading}</div>
        <p className="text-gray-700 text-base">
          {data.paragraph}
        </p>
      </div>      
      <div className="font-light text-sm">
        <CustomButton>{data.buttonText}</CustomButton>
      </div>
    </div>
  );
};

export default Card;
