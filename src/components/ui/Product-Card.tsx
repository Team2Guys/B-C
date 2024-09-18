import { generateSlug } from 'data/data';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { ProductCardData } from 'types/interfaces';
import { IProduct } from 'types/types';

interface ProductCardDataProps {
  products: IProduct[];
  categoryType?: string;
}

const ProductCard: React.FC<ProductCardDataProps> = ({
  products,
  categoryType,
}) => {
  const route = useRouter();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-1 md:p-0">
      {products &&
        products.map((product) => {
          //@ts-expect-error
          const parent = generateSlug(categoryType);
          return (
            <div
              className="border group rounded-xl border-white hover:border-primary p-3 space-y-3 text-center pb-10"
              key={product.id}
            >
              <Image
                className="w-full md:h-[364px] rounded-xl"
                width={600}
                height={600}
                src={product?.posterImage?.imageUrl}
                alt="img"
              />
              <div className="text-center space-y-3">
                <h1 className="text-16 font-normal">{product.title}</h1>
                <p className="text-15 font-light md:w-[80%] mx-auto">
                  {product.description}
                </p>
              </div>
              <div className="pt-5">
                <button
                  onClick={() => {
                    route.push(
                      `/${parent === 'shutter' ? `${parent}s-range` : parent}/${generateSlug(product.title)}`,
                    );
                  }}
                  className="bg-transparent border border-white group-hover:bg-primary group-hover:border-primary text-black group-hover:text-white py-3 px-5 rounded-md"
                >
                  View {categoryType ? categoryType : ''}
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductCard;
