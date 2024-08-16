import Image from 'next/image';
import whyUsImg from '../../../../public/assets/images/Rectangle811da.png';
import React from 'react';
import { ProductItems } from 'types/interface';

interface productProps {
  card: ProductItems;
}

const ProductCard: React.FC<productProps> = ({ card }) => {
  return (
    <div className="p-2 border border-primary-foreground w-fit rounded-lg group hover:border-primary">
      <Image src={card.imageUrl} alt={card.title} width={360} height={356} />
      <div className="px-2 text-center pt-3 pb-4">
        <h5>{card.title}</h5>
        <p className="max-w-[340px] text-15 mt-4">{card.discription}</p>
        <button className="uppercase border border-primary-foreground rounded-md group-hover:border-primary group-hover:bg-primary px-4 py-2 group-hover:text-white mt-4">
          View Blinds
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
