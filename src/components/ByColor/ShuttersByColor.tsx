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
import { ByColorContent, colorData, generateSlug } from 'data/data';
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
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [relaiveProducts, setRelaiveProducts] = useState<IProduct[]>([]);
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
  const getColorHex = (path: string): string | null => {
    const colorMatch = colorData.find((color) => color.url === path);
    return colorMatch ? colorMatch.color : null;
  };

  useEffect(() => {
    const selectedColorHex = getColorHex(pathname);

    if (selectedColorHex && products) {
      console.log('Debuge 1');
      const filteredByColor = products.filter((prod) =>
        //@ts-expect-error
        prod.colors?.some((color) => color.colorName === selectedColorHex),
      );
      console.log('Debuge 2');
      console.log(filteredByColor);
      setFilteredProducts(filteredByColor);
    }
  }, [pathname, products]);

  const handleShowMore = () => {
    setShowAll(true);
  };

  useEffect(() => {
    if (products) {
      const filterprod = products.filter((prod) => prod.CategoryId === 9);
      setRelaiveProducts(filterprod);
    }
  }, [products]);

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
      <Container className="mb-5 mt-10">
        <div className="text-center space-y-4">
          <h2 className="text-3xl">
            <span className="font-bold">{title}</span> By Colour
          </h2>
          <p className="font-normal text-xs sm:text-16 leading-7 sm:leading-9 text-center text-black">
            {selectedPage?.paragraph}
          </p>
        </div>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
            {filteredProducts.map((item) => {
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
          <p className="text-18 font-medium">No Products found😢</p>
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
        <RelatedProducts products={relaiveProducts || []} limit={4} />
      </Container>
      <VideoAutomation />
      <Support />
    </>
  );
};

export default ShuttersByColor;
