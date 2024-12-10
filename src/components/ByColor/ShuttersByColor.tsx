'use client';
import { useQuery } from '@tanstack/react-query';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import GalleryCard from 'components/Res-usable/Cards/GalleryCard';
import Container from 'components/Res-usable/Container/Container';
import Support from 'components/Res-usable/support/support';
import VideoAutomation from 'components/video-Automation/video-Automation';
import bgBreadcrum from '../../../public/assets/images/Breadcrum/modern.png';
import {
  fetchCategories,
  fetchProducts,
} from 'config/fetch';
import { ByColorContent, colorData } from 'data/data';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { ICategory, IProduct } from 'types/types';
import CardSkeleton from 'components/Skeleton/card-skeleton';
import Link from 'next/link';
import TopHero from 'components/ui/top-hero';
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
  const [loadingFilteredProducts, setLoadingFilteredProducts] = useState<boolean>(false);
  const [relaiveProducts, setRelaiveProducts] = useState<IProduct[]>([]);
  const [showAll, setShowAll] = useState(false);
  // const [pathname, setpathname] = useState<string>("");
  const pathname = usePathname();
  const route = useRouter();
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
    setLoadingFilteredProducts(false)
    const selectedColorHex = getColorHex(pathname);
    if (selectedColorHex && products) {
      console.log('Debuge 1');
      const filteredByColor = products.filter((prod) =>
        prod.colors?.some((color) => color.colorName === selectedColorHex),
      );
      console.log('Debuge 2');
      console.log(filteredByColor);
      setFilteredProducts(filteredByColor);
      setLoadingFilteredProducts(true)
    }
  }, [pathname]);

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

  const handleNavigation = (event: React.MouseEvent, path: string) => {
    event.stopPropagation();
    if (event.ctrlKey || event.metaKey) {
      window.open(path, '_blank');
    } else {
      route.push(path);
    }
  };
  return (
    <>
      <TopHero
        title={selectedPage?.heading || title}
        pageTitle={`${selectedPage?.heading || title}`}
        image={bgBreadcrum}
        pagename={selectedPage?.heading || title}
      />

      <div className="bg-[#ffffffab] pt-10">
        <Container>
          <div className="text-center">
            <h3 className="font-bold text-2xl">Shutters By Color</h3>
          </div>
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 py-10">
            {colorData.map((item, index) => (
              <div onClick={(event) => handleNavigation( event,item.url)}
                className="flex-col items-center gap-2 cursor-pointer color-box-wrapper"
                key={`${item.color}-${index}`}
              >
                <div
                  className={`w-full max-w-36 h-16  border-2 ${pathname === item.url ? 'border-secondary shadow-lg' : 'border-transparent'} rounded-md`}
                  style={{ backgroundColor: `#${item.color}` }}
                ></div>
                <p className="w-full max-w-36 text-13 text-center">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <Container className="mb-5 mt-10">

        {loadingFilteredProducts ? filteredProducts.length > 0 ? (
          <>
            <div className="text-center space-y-4">
              <h2 className="text-3xl">
                <span className="font-bold">{selectedPage?.heading || title}</span> By Colour
              </h2>
              <p className="font-normal text-xs sm:text-16 leading-7 sm:leading-9 text-center text-black">
                {selectedPage?.paragraph}
              </p>
            </div>
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
          </>) : (
          <p className="text-18 font-medium">No Products found😢</p>
        ) : <CardSkeleton />}

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
