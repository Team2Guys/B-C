import Image from 'next/image';
import whyUsImg from '../../../../public/assets/images/Rectangle811da.png';
import React from 'react';
import { ProductItems } from 'types/interfaces';
import Link from 'next/link';
import { generateSlug } from 'data/data';

interface productProps {
  card: ProductItems;
}

const ProductCard: React.FC<productProps> = ({ card }) => {
  return (
    <div className="p-2 border border-primary-foreground w-fit rounded-lg group hover:border-primary">
      <Image src={card.imageUrl} alt={card.title} width={360} height={356} />
      <div className="px-2 text-center pt-3 pb-4">
        <h5>{card.title}</h5>
        <p className="max-w-[340px] text-15 mt-4 mb-6">{card.discription}</p>
        <Link
          href={`/products/${generateSlug(card.title)}`}
          className="uppercase border border-primary-foreground rounded-md group-hover:border-primary group-hover:bg-primary px-4 py-3 group-hover:text-white"
        >
          View Blinds
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
