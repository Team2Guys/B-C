'use client';
import React, { useState } from 'react';
import TopHero from 'components/ui/top-hero';
import bgBreadcrum from '../../../public/assets/images/Breadcrum/modern.png';
import Container from 'components/Res-usable/Container/Container';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import Guarrenty from 'components/Res-usable/guarrenty/guarrenty';
import OurClient from 'components/Our-Client/OurClient';
import GalleryCard from 'components/Res-usable/Cards/GalleryCard';
import { useQuery } from '@tanstack/react-query';
import { ICategory, IProduct } from 'types/types';
import { fetchCategories, fetchProducts } from 'config/fetch';
import Testimonial from 'components/slider/testimonial';
import VideoAutomation from 'components/video-Automation/video-Automation';
import Support from 'components/Res-usable/support/support';

const itemsPerPage = 9;
const GalleryPage = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null,
  );
  const [currentPage, setCurrentPage] = useState(1);

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

  if (categoriesError instanceof Error)
    return <div>Error: {categoriesError.message}</div>;
  if (productsError instanceof Error)
    return <div>Error: {productsError.message}</div>;

  const filteredProducts = selectedCategoryId
    ? products?.filter((product) => product.CategoryId === selectedCategoryId)
    : products;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts?.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const totalPages = Math.ceil((filteredProducts?.length || 0) / itemsPerPage);

  const handleCategoryClick = (categoryId: number | null) => {
    setSelectedCategoryId(categoryId);
    setCurrentPage(1);
  };

  return (
    <>
      <TopHero title="GALLERY" image={bgBreadcrum} />
      <Container className="pt-16 pb-12">
        <div className="flex justify-between items-center pb-4 mb-6 overflow-hidden">
          <h1 className="text-2xl xs:text-3xl font-medium text-gray-800">
            GALLERY
          </h1>
          <span className="text-gray-400 text-11 xs:text-14">
            Showing {indexOfFirstItem + 1}–
            {Math.min(indexOfLastItem, filteredProducts?.length || 0)} of{' '}
            {filteredProducts?.length || 0} results
          </span>
        </div>

        <div className="overflow-x-auto">
          <div className="flex justify-center min-w-fit mx-auto">
            <div
              className={`py-2 px-4 rounded cursor-pointer ${selectedCategoryId === null ? 'bg-primary text-white' : ''}`}
              onClick={() => handleCategoryClick(null)}
            >
              All
            </div>
            {categories &&
              categories
                .sort((a, b) => {
                  const order = [
                    'Blinds',
                    'Curtains',
                    'Shutters',
                    'Commercial',
                  ];
                  return order.indexOf(a.title) - order.indexOf(b.title);
                })
                .map((category: ICategory, index: number) => (
                  <div
                    className={`py-2 px-4 rounded cursor-pointer ${selectedCategoryId === category.id ? 'bg-primary text-white' : ''}`}
                    key={index}
                    onClick={() => handleCategoryClick(category.id!)}
                  >
                    {category.title}
                  </div>
                ))}
          </div>
        </div>
      </Container>
      <div className="w-full border-t-[1px] border-borderclr"></div>
      <Container className="lg:pt-12 pt-5 pb-16">
        <p className="text-center text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-normal 2xl:leading-normal text-black w-full md:w-4/5 xl:w-3/4 mx-auto">
          A RANGE OF THE VAST CHOICES OF WINDOW COVERINGS AVAILABLE FOR YOUR
          HOME OR OFFICE...
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 xs:mt-20 mt-5">
          {currentItems &&
            currentItems.map((product: IProduct) => (
              <GalleryCard
                card={product}
                key={product.id}
                relativeProducts={false}
              />
            ))}
        </div>

        <div className="flex justify-center items-center mt-20 w-full">
          {filteredProducts && filteredProducts.length > 0 && (
            <>
              <span
                className={`mx-1 w-16 h-14 flex justify-center items-center font-medium cursor-pointer ${
                  currentPage === 1
                    ? 'opacity-0'
                    : 'hover:bg-btnclr hover:text-white opacity-100'
                }`}
                onClick={() =>
                  setCurrentPage(
                    currentPage > 1 ? currentPage - 1 : currentPage,
                  )
                }
              >
                <GoArrowLeft size={25} />
              </span>

              {Array.from({ length: totalPages }, (_, page) => (
                <button
                  key={page + 1}
                  className={`mx-1 w-16 h-14 flex justify-center rounded-sm items-center font-medium transition ${
                    currentPage === page + 1
                      ? 'bg-btnclr text-white'
                      : 'bg-transparent text-black hover:bg-btnclr hover:text-white'
                  }`}
                  onClick={(e) => {
                    setCurrentPage(page + 1);
                  }}
                >
                  {page + 1}
                </button>
              ))}

              <span
                className={`mx-1 w-16 h-14 flex justify-center items-center font-medium cursor-pointer ${
                  currentPage === totalPages
                    ? 'opacity-0'
                    : 'hover:bg-btnclr hover:text-white opacity-100'
                }`}
                onClick={() =>
                  setCurrentPage(
                    currentPage < totalPages ? currentPage + 1 : currentPage,
                  )
                }
              >
                <GoArrowRight size={25} />
              </span>
            </>
          )}
        </div>
      </Container>

      <VideoAutomation />
      <Support />
    </>
  );
};

export default GalleryPage;
