'use client'
import GalleryCard from 'components/Res-usable/Cards/GalleryCard';
import RelatedProductSkeleton from 'components/Skeleton/Related-product';
import React, { useEffect, useState } from 'react';
import { ICategory, IProduct } from 'types/types';

interface relativeProps {
  products: IProduct[];
  categoriesList?: ICategory[];
  limit?: number;
  className?: string;
  title?: string;
  description?: string;
  bgcolor?: boolean;
  isPPc?:boolean
}
const RelatedProducts: React.FC<relativeProps> = ({ products, limit, title, description,bgcolor, isPPc,  }) => {
  const [selectedProducts, setSelectedProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getRandomUniqueProducts = (products: IProduct[], limit: number, title: string | undefined) => {
      const uniqueProducts: IProduct[] = [];
      const titlesSet: Set<string> = new Set();

      while (uniqueProducts.length < limit && products.length > 0) {
        const randomIndex = Math.floor(Math.random() * products.length);
        const selectedProduct = products[randomIndex];
        if (!titlesSet.has(selectedProduct.title) && selectedProduct.title !== title) {
          uniqueProducts.push(selectedProduct);
          titlesSet.add(selectedProduct.title);
        }
        products = products.filter((product, index) => product && index !== randomIndex);
      }

      return uniqueProducts;
    };
    const safeLimit = limit ?? 4;
    const randomProducts = getRandomUniqueProducts([...products], safeLimit, title);
    setSelectedProducts(randomProducts);
  }, [products, limit, title]);

  return (
    <div className='px-2 md:px-4'>
      <div className="flex items-center gap-1">
        <h3 className="lg:text-4xl text-2xl text-nowrap">Related Products</h3>
        <div className="w-full border-t-[1px] border-[#BDC9BD] mt-2"></div>
      </div>
      <p className="font-normal text-12 lg:text-18 mt-2 lg:mt-4">
        {description || 'Explore our collection, each piece a showcase of exceptional window blinds design.'}
      </p>
      <div className="grid grid-cols-1 xs:grid-cols-2 md: lg:grid-cols-4 gap-6 lg:mt-10 mt-4 lg:mb-10">
        {selectedProducts.length > 0 ? selectedProducts.map((item) => {
          console.log(item, 'item')
          const filteredCategory = item?.category;
          return (
            <GalleryCard
              card={item}
              key={item.id}
              relativeProducts={true}
              isLoading={false}
              parent={filteredCategory?.title.toLowerCase()}
              bgcolor={bgcolor}
              isPPc ={isPPc}
            />
          );
        }) : Array(4).fill(null).map((_, index) => (
          <RelatedProductSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;