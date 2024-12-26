'use client';
import React, { useEffect, useState } from 'react';
import Container from 'components/Res-usable/Container/Container';
import { Button } from 'components/ui/button';
import FeatureCard from 'components/ui/feature-card';
import { useQuery } from '@tanstack/react-query';
import { ICategory, IProduct } from 'types/types';
import { fetchCategories, fetchProducts } from 'config/fetch';
import Featureskeleton from './skeleton';


const FeatureProduct: React.FC = () => {
  const {
    data: categories,
    error: categoriesError,
    isLoading: isLoadingCategories,
  } = useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
  

  const {
    data: products,
    error: productsError,
    isLoading: isLoadingProducts,
  } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
  console.log(products);
  const [activeCategory, setActiveCategory] = useState<ICategory | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(8);
  const categoryOrder = ['All', 'Blinds', 'Curtains', 'Shutters', 'Commercial'];
  const categoryMap = categories?.reduce(
    (acc: any, category: ICategory) => {
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
    const screenWidth = window.innerWidth;
    if (screenWidth > 767) {
      setVisibleCount((prevCount) => prevCount + 8);
    } else if (screenWidth > 439) {
      setVisibleCount((prevCount) => prevCount + 4);
    } else {
      setVisibleCount((prevCount) => prevCount + 3);
    }
  };

  const handleShowAll = () => {
    setActiveCategory(null);
    const screenWidth = window.innerWidth;
    if (screenWidth > 767) {
      setVisibleCount(8);
    } else if (screenWidth > 439) {
      setVisibleCount(4);
    } else {
      setVisibleCount(3);
    }
  };

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 767) {
      setVisibleCount(8);
    } else if (screenWidth > 439) {
      setVisibleCount(4);
    } else {
      setVisibleCount(3);
    }
  }, []);

  if (isLoadingCategories || isLoadingProducts)
    return (
     <Featureskeleton/>
    );

// Error handling
if (categoriesError instanceof Error)
  return <div>Error: {categoriesError.message}</div>;
if (productsError instanceof Error)
  return <div>Error: {productsError.message}</div>;

  return (
    <Container className="mt-20">
      <div className="text-center">
        <h1 className="text-26 md:text-32 font-bold">
          Elegant & Functional Window Coverings
        </h1>
        <p className="text-16 font-normal text-primary">
          We deliver on our promises, every single time{' '}
        </p>
        <hr className="border-2 border-primary w-28 mx-auto mt-3 md:mt-0" />
      </div>

      <div className="mt-10">
        <div className="overflow-x-auto border">
          <div className="flex lg:gap-10  gap-1 md:gap-3 justify-center whitespace-nowrap md:min-w-[470px] mb-3">
            {categoryOrder.map((categoryTitle) => {
              const category = categoryMap?.[categoryTitle];
              return (
                <Button
                  key={categoryTitle}
                  variant={'feature'}
                  className={` ${activeCategory?.id === category?.id ? 'bg-secondary text-white' : 'text-black'} py-1  md:py-2 px-[.35rem] md:px-4 rounded !text-[12px] md:!text-[16px]`}
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
