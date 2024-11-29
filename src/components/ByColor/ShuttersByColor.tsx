'use client';
import { useQuery } from '@tanstack/react-query';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import GalleryCard from 'components/Res-usable/Cards/GalleryCard';
import Container from 'components/Res-usable/Container/Container';
import Support from 'components/Res-usable/support/support';
import VideoAutomation from 'components/video-Automation/video-Automation';
import VideoBanner from 'components/video-banner/video-banner';
import {
  fetchCategories,
  fetchProducts,
  fetchSubCategories,
} from 'config/fetch';
import { ByColorContent } from 'data/data';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { ICategory, IProduct } from 'types/types';
interface ShuttersByColorProps {
  title: string;
}
const ShuttersByColor: React.FC<ShuttersByColorProps> = ({ title }) => {
  const [selectedPage, setSelectedPage] = useState<{
    heading: string;
    paragraph: string;
    subheading1: string;
    subheading2: string;
    subheadingContent: {
      content: string;
    }[];
  } | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [showAll, setShowAll] = useState(false);
  const pathname = usePathname();
  // const title = generateSlug(pathname).replaceAll('-',' ');
  const {
    data: products,
    error: productError,
    isLoading: productLoading,
  } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
  const {
    data: categoriesList = [],
    error,
    isLoading,
  } = useQuery<ICategory[], Error>({
    queryKey: ['category'],
    queryFn: fetchCategories,
  });
  useEffect(() => {
    if (products) {
      const filteredCategory = products.filter((prod) => prod.CategoryId === 9);
      if (filteredCategory) {
        const filteredSubcategories = filteredCategory.filter(
          (prodItem) =>
            prodItem.subCategory &&
            prodItem.subCategory.find((item: any) => item.title === title),
        );
        console.log(filteredSubcategories, 'filteredSubcategories');
        // const filteredProduct = filteredCategory.filter((prodItem) => prodItem)
        setFilteredProducts(filteredSubcategories);
      }
    }
  }, [pathname]);
  const handleShowMore = () => {
    setShowAll(true);
  };

  const productsToDisplay = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 6);
  useEffect(() => {
    const selectedPage = ByColorContent.find((page) => page.slug === pathname);
    if (selectedPage) {
      setSelectedPage(selectedPage.content);
    }
  }, [pathname]);
  return (
    <>
      <VideoBanner
        title={`${title}`}
        selectedPage={selectedPage}
        showButton={false}
        colorSlider={true}
      />
      <Container className="my-5">
        <div className="text-center">
          <h2 className="text-3xl">
            <span className="font-bold">{title}</span> By Colour
          </h2>
        </div>
        {productsToDisplay.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
            {productsToDisplay.map((item) => {
              const filteredCategory = categoriesList.find(
                (cat) => cat.id === item?.CategoryId,
              );
              return (
                <GalleryCard
                  card={item}
                  key={item.id}
                  relativeProducts={true}
                  parent={filteredCategory?.title.toLowerCase()}
                />
              );
            })}
          </div>
        ) : (
          <p className="text-18 font-medium">No Products found</p>
        )}

        {!showAll && filteredProducts.length > 6 && (
          <div className="text-center">
            <button
              onClick={handleShowMore}
              className="bg-secondary px-6 py-2 text-lg rounded-md text-white"
            >
              Show More
            </button>
          </div>
        )}
      </Container>
      <Container className="my-20">
        <RelatedProducts products={products || []} limit={4} />
      </Container>
      <VideoAutomation />
      <Support />
    </>
  );
};

export default ShuttersByColor;
