'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IProduct } from 'types/types';
import { getPath } from 'utils/helperFunctions';

const Card = ({ card }: { card: IProduct }) => {

  return (
    <div className="px-2">
      <div className="space-y-2 bg-secondary-foreground rounded-xl">
        <Link href={getPath(card)} className="relative block w-full h-[300px] md:h-[365px]">
          <Image
            src={card?.posterImage?.imageUrl}
            alt={card.title}
            fill
            className="object-cover rounded-xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </Link>

        <div className="text-center space-y-1 px-4 pb-4">
          <h3 className="font-semibold md:font-black font-robotoSerif text-2xl text-primary capitalize">
            {card.title.replace(/\//g, ' ')}
          </h3>

          <div className="text-primary text-xl md:text-lg font-roboto transition-all">
            <p>
              {card?.short_description?.slice(0, 50)}{' '}
            
            </p>
          </div>

          <Link
          href={getPath(card)}
    
            className="text-primary bg-secondary text-sm md:text-xl font-roboto font-semibold rounded-md p-2 px-6 block w-fit mx-auto"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
