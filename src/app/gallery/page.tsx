'use client';
import React, { useState } from 'react';
import TopHero from 'components/ui/top-hero';
import { galleryItems, relativeProducts } from 'data/data';
import bgBreadcrum from '../../../public/assets/images/Breadcrum/modern.png';
import Container from 'components/Res-usable/Container/Container';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import Guarrenty from 'components/Res-usable/guarrenty/guarrenty';
import OurClient from 'components/Our-Client/OurClient';
import GalleryCard from 'components/Res-usable/Cards/GalleryCard';

const itemsPerPage = 9;
const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems =
    activeTab === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

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
            {Math.min(indexOfLastItem, filteredItems.length)} of{' '}
            {filteredItems.length} results
          </span>
        </div>

        <div className="overflow-x-auto">
          <div className="flex justify-center min-w-fit mx-auto">
            {[
              'All',
              'BILNDS',
              'CURTAINS',
              'SHUTTERS',
              'COMMERCIAL',
              'INSTALLATION',
            ].map((tab) => (
              <button
                key={tab}
                className={`mx-2 px-4 xs:px-6 py-2 text-15 font-semibold transition ${
                  activeTab === tab
                    ? 'bg-primary text-white rounded-sm'
                    : 'bg-transparent hover:rounded-sm hover:bg-primary hover:text-white'
                }`}
                onClick={() => {
                  setActiveTab(tab);
                  setCurrentPage(1);
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </Container>
      <div className="w-full border-t-[1px] border-borderclr"></div>
      <Container className="pt-12 pb-16">
        <p className="text-center text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-normal 2xl:leading-normal text-black w-full md:w-4/5 xl:w-3/4 mx-auto">
          A RANGE OF THE VAST CHOICES OF WINDOW COVERINGS AVAILABLE FOR YOUR
          HOME OR OFFICE...
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
          {currentItems.map((item) => (
            <GalleryCard card={item} key={item.id} relativeProducts={false} />
          ))}
        </div>

        <div className="flex justify-center items-center mt-20 w-full">
          <span
            className={`mx-1 w-16 h-14 flex justify-center items-center font-medium cursor-pointer ${
              currentPage === 1
                ? 'opacity-0'
                : 'hover:bg-btnclr hover:text-white opacity-100'
            }`}
            onClick={() =>
              setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)
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
              onClick={() => setCurrentPage(page + 1)}
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
        </div>
      </Container>
      <Container className="py-10">
        <RelatedProducts products={relativeProducts} />
      </Container>
      <Guarrenty />
      <OurClient />
    </>
  );
};

export default GalleryPage;
