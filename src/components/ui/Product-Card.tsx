import { useQuery } from '@tanstack/react-query';
import { fetchSubCategories } from 'config/fetch';
import { generateSlug } from 'data/data';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { ICategory, IProduct } from 'types/types';

interface ProductCardDataProps {
  products: IProduct[];
  categoryType?: string;
}

const ProductCard: React.FC<ProductCardDataProps> = ({
  products,
  categoryType,
}) => {
  const route = useRouter();
  const {
    data: categories,
    error: categoryError,
    isLoading: categoryLoading,
  } = useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: fetchSubCategories,
  });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-1 md:p-0 mt-5">
      {products &&
        products.map((product) => {
          const category = categories?.find(
            (cat) => cat.id === product.CategoryId,
          );
          //@ts-expect-error
          const parent = generateSlug(category?.title);
          return (
            <div
              className="border group rounded-xl border-white hover:border-primary p-3 space-y-3 text-center pb-10"
              key={product.id}
            >
              <Image
                className="w-full lg:h-[364px] rounded-xl"
                width={600}
                height={600}
                src={product?.posterImage?.imageUrl}
                alt="img"
              />
              <div className="text-center space-y-3">
                <h1 className="text-16 font-normal">{product.title}</h1>
                <p className="text-15 font-light md:w-[80%] mx-auto auto max-h-16 overflow-y-auto custom-scrollbar">
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
                  View {category?.title ? category.title : ''}
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductCard;
