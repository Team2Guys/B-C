'use client';
import React, { useState } from 'react';
import Container from 'components/Res-usable/Container/Container';
import { Button } from 'components/ui/button';
import FeatureCard from 'components/ui/feature-card';
import { useQuery } from '@tanstack/react-query';
import { ICategory, IProduct } from 'types/types';
import { fetchCategories, fetchProducts } from 'config/fetch';

const FeatureProduct: React.FC = () => {
  // Fetch categories
  const {
    data: categories,
    error: categoriesError,
    isLoading: isLoadingCategories,
  } = useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  // Fetch products
  const {
    data: products,
    error: productsError,
    isLoading: isLoadingProducts,
  } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const [activeCategory, setActiveCategory] = useState<ICategory | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const categoryOrder = ['All', 'Blinds', 'Curtains', 'Shutters', 'Commercial'];
  const categoryMap = categories?.reduce(
    (acc, category) => {
      acc[category?.title] = category;
      return acc;
    },
    {} as Record<string, ICategory>,
  );

  const filteredProducts = products?.filter(
    (product: IProduct) =>
      !activeCategory || product.CategoryId === activeCategory.id,
  );

  const visibleProducts = filteredProducts?.slice(0, visibleCount);

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  const handleShowAll = () => {
    setActiveCategory(null);
    setVisibleCount(6);
  };

  // Loading state
  if (isLoadingCategories || isLoadingProducts)
    return (
      <div>
      <Container className="py-12">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-3">
            {[...Array(3)].map((_, index) => (
              <div className='' key={index}>
                  <div className="h-6 bg-gray-300 rounded mb-2"></div>
                <div
                
                className="max-w-md rounded lg:m-4 m-2 animate-pulse"
                >
                <div className="bg-gray-300 lg:w-[460px] xl:w-[350px] md:w-[400px] sm:w-full lg:h-[400px] md:h-[300px] sm:h-auto rounded-3xl"></div>
                <div className="px-2 py-4">
                </div>
              </div>
                </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
    );

  // Error handling
  if (categoriesError instanceof Error)
    return <div>Error: {categoriesError.message}</div>;
  if (productsError instanceof Error)
    return <div>Error: {productsError.message}</div>;

  return (
    <Container className="mt-20">
      <div className="text-center">
        <h1 className="text-26 md:text-32 font-bold">Our Featured Products</h1>
        <p className="text-16 font-normal text-primary">Expert In Designing</p>
        <hr className="border-2 border-primary w-28 mx-auto" />
      </div>

      <div className="mt-10">
        <div className="overflow-x-auto border">
        <div className="flex lg:gap-10 gap-3 justify-center whitespace-nowrap min-w-[470px]">
          {categoryOrder.map((categoryTitle) => {
            const category = categoryMap?.[categoryTitle];
            return (
              <Button
                key={categoryTitle}
                variant={'feature'}
                className={` ${activeCategory?.id === category?.id ? 'bg-secondary text-white' : 'text-black'} px-4 py-6`}
                onClick={() => {
                  if (categoryTitle === 'All') {
                    handleShowAll();
                  } else {
                    setActiveCategory(category ?? null);
                  }
                }}
              >
                {categoryTitle}
              </Button>
            );
          })}
        </div>
        </div>
        <div className="mt-5">
          <FeatureCard products={visibleProducts || []} />
        </div>

        {visibleCount < (filteredProducts?.length || 0) && (
          <div className="flex justify-center mt-10">
            <Button
              className="w-[163px] h-[55px] text-15 leading-6 tracking-wider font-bold text-white"
              onClick={handleViewMore}
              variant={'secondary'}
            >
              View More
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default FeatureProduct;
