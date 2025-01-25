'use client';
import React, { useEffect, useState } from 'react';
import Container from 'components/Res-usable/Container/Container';
import { Button } from 'components/ui/button';
import FeatureCard from 'components/ui/feature-card';
import { ICategory, IProduct } from 'types/types';
import Featureskeleton from './skeleton';
import { generateSlug } from 'data/data';
import { allProductsOrder, customSortingOrder } from 'data/urls';

interface Productsprops {
  products: IProduct[];
  categories: ICategory[]
}
const FeatureProduct: React.FC<Productsprops> = ({ products, categories }) => {

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
  const filteredProducts = products?.filter((product: IProduct) => {
    if (!activeCategory) {
      return true;
    }
    return product.CategoryId === activeCategory?.id;
  });

  const sortingOrder =
    activeCategory?.title === 'Blinds' || activeCategory?.title === 'Curtains'
      ? customSortingOrder
      : activeCategory === null
        ? allProductsOrder
        : [];
  const sortedProducts = (() => {
    if (sortingOrder.length > 0) {
      const sorted = filteredProducts?.filter((product) =>
        sortingOrder.includes(generateSlug(product.title))
      );
      const unsorted = filteredProducts?.filter(
        (product) => !sortingOrder.includes(generateSlug(product.title))
      );
      return [
        ...(sorted || []).sort((a, b) => {
          const indexA = sortingOrder.indexOf(generateSlug(a.title));
          const indexB = sortingOrder.indexOf(generateSlug(b.title));
          return indexA - indexB;
        }),
        ...(unsorted || []),
      ];
    }
    return filteredProducts;
  })();
  const visibleProducts = sortedProducts?.slice(0, visibleCount);

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

  if (products?.length < 1 || categories?.length < 1) {
    return <Featureskeleton />;
  }

  return (
    <Container className="mt-20">
      <div className="text-center">
        <h2 className="text-26 md:text-32 font-bold">
          Elegant & Functional Window Coverings
        </h2>
        <p className="text-22  text-primary font-medium">
          We deliver on our promises, every single time{' '}
        </p>
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
              className="w-[163px] h-[55px] text-15 leading-6 tracking-wider font-bold text-white hover:bg-primary"
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
