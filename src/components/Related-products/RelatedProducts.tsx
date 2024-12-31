'use client'
import { useQuery } from '@tanstack/react-query';
import GalleryCard from 'components/Res-usable/Cards/GalleryCard';
import { fetchCategories } from 'config/fetch';
import { RelatedProductsdata } from 'data/data';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { ICategory, IProduct } from 'types/types';

interface relativeProps {
  products: IProduct[];
  limit?: number;
  className?: string;
  title?: string;
}
const RelatedProducts: React.FC<relativeProps> = ({ products, limit, title }) => {
  const pathname = usePathname()
  const [description, setDescription] = useState<string | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<IProduct[]>([]);

  const {
    data: categoriesList = [],isLoading
  } = useQuery<ICategory[], Error>({
    queryKey: ['category'],
    queryFn: fetchCategories,
  });
  useEffect(() => {
    if (pathname) {
      const matchedProduct = RelatedProductsdata.find((product) =>
        pathname.includes(product.name)
      );
      setDescription(matchedProduct ? matchedProduct.para : null);
    }
  }, [pathname]);
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
      <p className="font-normal text-12 md:text-18 mt-2 lg:mt-4">
        {description || 'Explore our collection, each piece a showcase of exceptional window blinds design.'}
      </p>
      <div className="grid grid-cols-1 xs:grid-cols-2 md: lg:grid-cols-4 gap-6 lg:mt-10 mt-4 lg:mb-10">
        {selectedProducts.map((item) => {
          const filteredCategory = categoriesList.find(
            (cat) => cat.id === item?.CategoryId,
          );
          return (
            <GalleryCard
              card={item}
              key={item.id}
              relativeProducts={true}
              isLoading={isLoading}
              parent={filteredCategory?.title.toLowerCase()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
