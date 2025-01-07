'use client';
import React, { useState } from 'react';
import TopHero from 'components/ui/top-hero';
import bgBreadcrum from '../../../public/assets/images/Breadcrum/modern.png';
import Container from 'components/Res-usable/Container/Container';
import { ICategory, IProduct } from 'types/types';
import VideoAutomation from 'components/video-Automation/video-Automation';
import Support from 'components/Res-usable/support/support';
import { usePathname } from 'next/navigation';
import { Image } from 'antd';
import { IoSearch } from 'react-icons/io5';

const itemsPerPage = 12;
const Gallery = ({ products , categories}: {products: IProduct[] , categories: ICategory[]}) => {
  const pathName = usePathname();
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null,
  );
  const [currentPage, setCurrentPage] = useState(1);

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
      <TopHero title="GALLERY" image={bgBreadcrum.src} pagename={pathName} />
      <Container className="pt-16 pb-12 px-4 md:px-0">
        <div className="flex justify-between items-center pb-4 mb-6 overflow-hidden md:px-5">
          <h2 className="text-2xl xs:text-3xl font-medium text-gray-800">
            GALLERY
          </h2>
          <span className="text-gray-400 text-11 xs:text-14">
            Showing {indexOfFirstItem + 1}–
            {Math.min(indexOfLastItem, filteredProducts?.length || 0)} of{' '}
            {filteredProducts?.length || 0} results
          </span>
        </div>

        <div className="overflow-x-auto">
          <div className="flex justify-center min-w-fit mx-auto  pb-5  ">
            <div
              className={`py-2 px-2 rounded cursor-pointer !text-[12px] md:!text-[16px] ${selectedCategoryId === null ? 'bg-secondary text-white' : ''}`}
              onClick={() => handleCategoryClick(null)}
            >
              All
            </div>
            {categories && categories.sort((a, b) => {const order = ['Blinds','Curtains','Shutters','Commercial',
                  ];
                  return order.indexOf(a.title) - order.indexOf(b.title);
                })
                .map((category: ICategory, index: number) => (
                  <div
                    className={`py-2 px-[.35rem] md:px-4 rounded !text-[12px] md:!text-[16px] cursor-pointer ${selectedCategoryId === category.id ? 'bg-secondary text-white' : ''}`}
                    key={index}
                    onClick={() => handleCategoryClick(category.id!)}
                  >
                    {category.title}
                  </div>
                ))}
          </div>
        </div>
      </Container>
      <div className="w-full border-t-[1px] border-borderclr "></div>
      <Container className="lg:pt-12 pt-5 pb-16 px-4 md:px-0">
        <p className="text-center text-14 font-semibold md:font-normal lg:text-2xl xl:text-3xl 2xl:text-4xl leading-normal 2xl:leading-normal text-black w-full md:w-4/5 xl:w-3/4 mx-auto">
          A RANGE OF THE VAST CHOICES OF WINDOW COVERINGS AVAILABLE FOR YOUR
          HOME OR OFFICE...
        </p>
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xs:mt-20 mt-5 md:px-4">
            {currentItems &&
              currentItems.map((product: any) => {
                if (!product.category) {
                  return null;
                }
                return (
                  <>
                    <div className="relative rounded-lg  transition-shadow duration-300 group">
                      <Image
                        src={product.posterImage.imageUrl}
                        alt={product.posterImage.altText || 'Image'}
                        className=" rounded-xl"
                        preview={{
                          mask: (
                            <div>
                              <IoSearch
                                style={{ color: 'white', fontSize: '30px' }}
                              />
                            </div>
                          ),
                        }}
                      />
                      <div
                        className={`absolute bottom-0 rounded-b-xl px-2 w-full h-12 flex items-center justify-center rounded-se-sm bg-secondary md:opacity-1 group-hover:opacity-100 transition-opacity duration-300`}
                      >
                        <span
                          className={`text-black text-start cursor-pointer `}
                        >
                          {product.title}
                        </span>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </Image.PreviewGroup>

        <div className="flex justify-center items-center mt-20 w-full">
          {filteredProducts && filteredProducts.length > 0 && (
            <>
              {Array.from({ length: totalPages }, (_, page) => (
                <button
                  key={page + 1}
                  className={`mx-1 w-16 h-8 md:h-14 flex justify-center rounded-sm items-center font-medium transition ${
                    currentPage === page + 1
                      ? 'bg-btnclr text-white'
                      : 'bg-transparent text-black hover:bg-btnclr hover:text-white'
                  }`}
                  onClick={() => {
                    setCurrentPage(page + 1);
                  }}
                >
                  {page + 1}
                </button>
              ))}
            </>
          )}
        </div>
      </Container>

      <VideoAutomation />
      <Support />
    </>
  );
};

export default Gallery;
