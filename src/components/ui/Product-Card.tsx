import { useQuery } from '@tanstack/react-query';
import { fetchSubCategories } from 'config/fetch';
import { generateSlug } from 'data/data';
import { ChangedProductUrl_handler, CommercialUrl, predefinedPaths, urls } from 'data/urls';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { ICategory, IProduct } from 'types/types';
import { string } from 'yup';

interface ProductCardDataProps {
  products: IProduct[];
  categoryType?: string;
  isSizeSmall?: boolean;
}

const ProductCard: React.FC<ProductCardDataProps> = ({
  products,
  categoryType,
  isSizeSmall,
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

  const getTrimmedTitle = (title: string) => {
    return title.replace(/^Made to measure\s+/i, '');
  };


  console.log(products,"filtered" )


  const getPath =  (product: IProduct, parent: string)=> {
    const slug = ChangedProductUrl_handler(product.title);
    const basePath =
      product.href && parent
        ? `${window.origin}/${product.href}`
        : `/${slug}`;

    const path =
      predefinedPaths[slug as keyof typeof predefinedPaths] ||
      (slug === 'hotels-restaurants-blinds-curtains'
        ? basePath
        : `/${
            parent?.toLowerCase() === 'shutters'
              ? `${parent.toLowerCase()}-range`
              : parent?.toLowerCase()
          }${
            ['dimout-roller-blinds', 'sunscreen-roller-blinds','blackout-roller-blinds'].includes(slug)
              ? '/roller-blinds'
              : ''
          }/${slug}`);
    return path;
  };

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${isSizeSmall && 'lg:grid-cols-4'} gap-5 p-1 md:p-0 mt-5`}
    >
      {products &&
        products.map((product: IProduct) => {
          const category = categories?.find((cat) => cat.id === product.CategoryId);
          if (!category) return null;

          const trimmedProductTitle = getTrimmedTitle(product.title);
          const parent = generateSlug(category?.title);

          return (
            <div
              className="border group rounded-xl border-white hover:border-primary p-3 space-y-3 text-center pb-10"
              key={product.id}
            >
              <Image
                className={`w-full ${isSizeSmall ? 'lg:h-[264px]' : 'lg:h-[364px]'} rounded-xl`}
                width={600}
                height={600}
                src={product?.posterImage?.imageUrl}
                alt="img"
              />
              <div className="text-center space-y-3">
                <h1 className="text-17 font-semibold">{trimmedProductTitle}</h1>
                <p className="text-15 font-light md:w-[80%] mx-auto auto max-h-16 overflow-y-auto custom-scrollbar" dangerouslySetInnerHTML={{ __html : product.short_description || product.description }}></p>
              </div>
              <div className="pt-5">
                <Link
                  href={getPath(product, parent)}
                  className="bg-transparent border border-white group-hover:bg-primary group-hover:border-primary text-black group-hover:text-white py-3 px-5 rounded-md"
                >
                  View {category.title}
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProductCard;
