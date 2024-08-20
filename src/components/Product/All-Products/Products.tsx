'use client';
import Container from 'components/Res-usable/Container/Container';
import { Button } from 'components/ui/button';
import ProductCard from 'components/ui/Product-Card';
import { ProductCardINFO } from 'data/data';
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { ProductCardData } from 'types/interface';

const AllProducts = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 9; // Products per page

  const categories = ['All', 'BLINDS BY TYPE', 'BY ROOM'];

  // Filtered products based on the active category
  const filteredProducts: ProductCardData[] =
    activeCategory === 'All'
      ? ProductCardINFO
      : ProductCardINFO.filter(
          (product) => product.category === activeCategory,
        );

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Products to display on the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const visibleProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage,
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container className="mt-10 md:mt-20">
      <div className="flex justify-between items-center">
        <h1 className="text-[#0F172A] text-20 md:text-30 font-medium">
          MADE TO MEASURE BLINDS
        </h1>
        <span className="text-14 text-[#6F747F]">
          Showing {startIndex + 1}–
          {Math.min(startIndex + productsPerPage, filteredProducts.length)} of{' '}
          {filteredProducts.length} results
        </span>
      </div>

      <div className="mt-10">
        <div className="flex lg:gap-10 gap-5 justify-center whitespace-nowrap overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category}
              className={` 
                ${activeCategory === category ? 'bg-primary text-white px-8 py-7' : 'text-black bg-transparent px-8 py-7'}
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
        <hr className="h-2 mt-5 md:mt-14 border-black" />
        <div className="mt-10 text-center space-y-3">
          <h1 className="text-[#231F20] text-20 md:text-24 lg:text[36px] font-medium uppercase">
            Blinds
          </h1>
          <p className="text-14 md:text-15 font-normal md:w-[65%] mx-auto">
            See our comprehensive Blinds range Find the perfect made-to-measure
            blinds within our exclusive range. There are many shades and
            stunning patterns to select from
          </p>
        </div>

        <div className="mt-5">
          <ProductCard products={visibleProducts} />
        </div>

        {/* Pagination */}
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
