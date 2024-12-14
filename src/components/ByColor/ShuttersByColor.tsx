'use client';
import { useQuery } from '@tanstack/react-query';
import RelatedProducts from 'components/Related-products/RelatedProducts';
// import GalleryCard from 'components/Res-usable/Cards/GalleryCard';
import Container from 'components/Res-usable/Container/Container';
import Support from 'components/Res-usable/support/support';
import VideoAutomation from 'components/video-Automation/video-Automation';
import bgBreadcrum from '../../../public/assets/images/Breadcrum/modern.png';
import {
  fetchProducts,
} from 'config/fetch';
import { ByColorContent, colorData } from 'data/data';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { IProduct } from 'types/types';
import CardSkeleton from 'components/Skeleton/card-skeleton';
import TopHero from 'components/ui/top-hero';
// import { Categories_wise_Images } from 'data/Images';
import { IColorData } from 'types/interfaces';
import ThumbImage from 'components/Detail/ThumbImage/ThumbImage';
interface ShuttersByColorProps {
  title: string;
  subCategory?: string;
}
const ShuttersByColor: React.FC<ShuttersByColorProps> = ({ title,subCategory }) => {
  const [selectedPage, setSelectedPage] = useState<{
    heading: string;
    paragraph: string;
    subheading1: string;
    subheading2: string;
    subheadingContent: {
      content: string;
    }[];
  } | null>(null);
  // const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [loadingFilteredProducts, setLoadingFilteredProducts] = useState<boolean>(false);
  const [relaiveProducts, setRelaiveProducts] = useState<IProduct[]>([]);
  const [colorImages, setcolorImages] = useState<IColorData>();
  // const [showAll, setShowAll] = useState(false);
  const pathname = usePathname();
  const route = useRouter();
  const {
    data: products,
  } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  // const {
  //   data: categoriesList = [],
  // } = useQuery<ICategory[], Error>({
  //   queryKey: ['category'],
  //   queryFn: fetchCategories,
  // });

  const getColorHex = (path: string) => {
    const colorMatch = colorData.find((color) => color.url === path);
    console.log(colorMatch,"Shutter-Color")
    return colorMatch ? colorMatch : null;
  };


  useEffect(() => {
    setLoadingFilteredProducts(false)
    const selectedColorHex = getColorHex(pathname);
    console.log(selectedColorHex,"selectedColorHex")

    if (selectedColorHex) {
      /* Later usage filter product by color */
      // const filteredByColor = products?.filter((prod) =>
      //   prod.colors?.some((color) => color.colorName === selectedColorHex.color),
      // );
      // console.log(filteredByColor);
      setcolorImages(selectedColorHex);
      // setFilteredProducts(filteredByColor);
      setLoadingFilteredProducts(true)
    }
  }, [pathname]);

  // const handleShowMore = () => {
  //   setShowAll(true);
  // };
console.log(subCategory,"subCategory")
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

        {loadingFilteredProducts ? colorImages ? (
          <>
            <div className="text-center space-y-4">
              <h2 className="text-3xl">
                <span className="font-bold">{selectedPage?.heading || title}</span> By Colour
              </h2>
              <p className="font-normal text-xs sm:text-16 leading-7 sm:leading-9 text-center text-black">
                {selectedPage?.paragraph}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-10">
              {/* {filteredProducts.map((item) => {
                const filteredCategory = categoriesList.find(
                  (cat) => cat.id === item?.CategoryId,
                  
                  );
                  return (
                    <GalleryCard
                    card={item}
                    product_Images={colorImages}
                    key={item.id}
                    relativeProducts={true}
                    detailHide={false}
                    parent={filteredCategory?.title.toLowerCase()}
                    />
                    );
                    })} */}
            <ThumbImage card={colorImages} />
            </div>
          </>) : (
          <p className="text-18 font-medium">No Products found😢</p>
        ) : <CardSkeleton />}

        {/* {!showAll && filteredProducts.length > 6 && (
          <div className="text-center">
            <button
              onClick={handleShowMore}
              className="bg-secondary px-6 py-2 text-lg rounded-md text-white"
            >
              Show More
            </button>
          </div>
        )} */}
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
