import Image from 'next/image';
import React from 'react';
import { ProductItems } from 'types/interfaces';
import Link from 'next/link';
import { generateSlug } from 'data/data';

interface productProps {
  card: ProductItems;
}

const ProductCard: React.FC<productProps> = ({ card }) => {
  return (
    <div className="p-2 border border-primary-foreground w-fit rounded-lg group hover:border-primary flex flex-col justify-between items-center">
      <div className="">
        <Image src={card.imageUrl} alt={card.title} width={360} height={356} />
        <div className="px-2 text-center pt-3 pb-4">
          <h5>{card.title}</h5>
          <div className='max-h-20 overflow-y-auto custom-scrollbar'>
          <p className=" text-15 mt-4 mb-6">{card.discription}</p>
          </div>
        </div>
      </div>
      <Link
        href={`/products/${generateSlug(card.title)}`}
        className="uppercase border border-primary-foreground rounded-md w-fit group-hover:border-primary group-hover:bg-primary px-4 py-3 group-hover:text-white "
      >
        View Blinds
      </Link>
    </div>
  );
};

export default ProductCard;
