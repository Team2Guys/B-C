'use client';
import Container from 'components/Res-usable/Container/Container';
import { Button } from 'components/ui/button';
import ProductCard from 'components/ui/Product-Card';
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IProduct } from 'types/types';
interface relativeProps {
  products: IProduct[];
  categoryType?: string;
}

const AllProducts: React.FC<relativeProps> = ({ products, categoryType }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 9;
  const categories = ['All', 'BY TYPE', 'BY ROOM'];
  const filteredProducts: IProduct[] =
    activeCategory === 'All'
      ? products
      : products.filter((product) => product.title === activeCategory);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const visibleProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Container className="mt-10 md:mt-16">
      {/* <div className="flex flex-wrap md:flex-nowrap justify-between items-center">
        <h1 className="text-[#0F172A] text-20 md:text-30 font-medium uppercase">
          MADE TO MEASURE {categoryType ? categoryType :""}
        </h1>
        <span className="text-14 text-[#6F747F]">
          Showing {startIndex + 1}–
          {Math.min(startIndex + productsPerPage, filteredProducts.length)} of{' '}
          {filteredProducts.length} results
        </span>
      </div> */}

      <div className="mt-10">
        <div className="flex lg:gap-10 gap-3 justify-center whitespace-nowrap overflow-x-auto ">
          {categories.map((category) => (
            <Button
              key={category}
              className={`text-15 font-bold
                ${activeCategory === category ? 'bg-primary text-white px-2 md:px-8 py-2 md:py-7' : 'text-black bg-transparent px-2 md:px-8 py-2 md:py-7'}
              `}
              onClick={() => {
                setActiveCategory(category);
                setCurrentPage(1); // Reset to the first page on category change
              }}
            >
              {category}
            </Button>
          ))}
        </div>
        <hr className="h-2 mt-5 md:mt-8 border-black" />
        <div className="mt-10 text-center space-y-3">
          <h1 className="text-[#231F20] text-20 md:text-24 lg:text-[36px] font-semibold uppercase">
            MADE TO MEASURE {categoryType ? categoryType : ''}
          </h1>
          <p className="text-14 md:text-15 font-normal md:w-[65%] mx-auto">
            See our comprehensive Blinds range Find the perfect made-to-measure
            blinds within our exclusive range. There are many shades and
            stunning patterns to select from
          </p>
        </div>

        <div className="mt-5">
          <ProductCard categoryType={categoryType} products={products} />
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-10 space-x-3">
            {/* Previous Button */}
            <Button
              variant={'secondary'}
              className="w-[55px] h-[55px] bg-transparent text-black hover:bg-secondary hover:text-white text-16"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <FaArrowLeft size={16} />
            </Button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => (
              <Button
                key={index}
                className={`w-[55px] h-[55px] text-16 ${currentPage === index + 1 ? 'bg-secondary text-white' : 'bg-transparent text-black'}`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Button>
            ))}

            {/* Next Button */}
            <Button
              variant={'secondary'}
              className="w-[55px] h-[55px] bg-transparent text-black hover:bg-secondary hover:text-white text-16"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <FaArrowRight size={16} />
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default AllProducts;
