import React, { useState } from 'react';
import Container from 'components/Res-usable/Container/Container';
import { Button } from 'components/ui/button';
import FeatureCard from 'components/ui/feature-card';
import { FeatureProductData } from 'types/interface';
import { featureProducts } from 'data/data';

const FeatureProduct: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState<number>(9); // Initial count of visible products

  const categories = ['All', 'Blind', 'Curtains', 'Shutters'];

  // Filtered products based on the active category
  const filteredProducts: FeatureProductData[] =
    activeCategory === 'All'
      ? featureProducts
      : featureProducts.filter(
          (product) => product.category === activeCategory,
        );

  // Products to display, sliced by visible count
  const visibleProducts = filteredProducts.slice(0, visibleCount);

  // Handle "View More" button click
  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 6); // Show 6 more products on each click
  };

  return (
    <Container className="mt-20">
      <div className="text-center">
        <h1 className="text-26 md:text-32 font-bold">Our Featured Products</h1>
        <p className="text-16 font-normal text-primary">Expert In Designing</p>
        <hr className="border-2 border-primary w-28 mx-auto" />
      </div>

      <div className="mt-10">
        <div className="flex lg:gap-10 gap-5 justify-center whitespace-nowrap overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category}
              variant={'feature'}
              className={`w-[87.62px] h-[52.03px]
                ${activeCategory === category ? 'bg-secondary text-white' : 'text-black'}
              `}
              onClick={() => {
                setActiveCategory(category);
                setVisibleCount(6);
              }}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="mt-5">
          <FeatureCard products={visibleProducts} />
        </div>

        {/* View More Button */}
        {visibleCount < filteredProducts.length && (
          <div className="flex justify-center mt-10">
            <Button
              className="w-[163px] h-[55px] "
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
