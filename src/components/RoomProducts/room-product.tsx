'use client';
import BathroomCategory from 'components/BathroomCategory/BathroomCategory';
import Container from 'components/Res-usable/Container/Container';
import VideoAutomation from 'components/video-Automation/video-Automation';
import Support from 'components/Res-usable/support/support';
import React, { useEffect, useState } from 'react';
import { ICategory, IProduct } from 'types/types';
import { useQuery } from '@tanstack/react-query';
import bgBreadcrum from '../../../public/assets/images/Breadcrum/modern.png';
import {
  fetchCategories,
  fetchProducts,
  fetchSubCategories,
} from 'config/fetch';
import TopHero from 'components/ui/top-hero';
import { usePathname, useRouter } from "next/navigation";
import { urls } from "data/urls";
import NotFound from "app/not-found";

interface ICategoryPage {
  title: string;
  relatedProducts: IProduct[];
  description: string;
  category: string;
}

const RoomProducts = ({ title, relatedProducts,description,category }: ICategoryPage) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isNotFound, setIsNotFound] = useState(false);
  useEffect(() => {
    if (pathname) {
      const matchingUrl = urls.find((url) => url.errorUrl === pathname);
      
      if (matchingUrl) {
        console.log(matchingUrl, "matchingUrl");
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    }
  }, [pathname]);

  
  const {
    data: products,
    error,
    isLoading,
  } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const { data: subcategories } = useQuery<ICategory[]>({
    queryKey: ['subcategories'],
    queryFn: fetchSubCategories,
  });

  const { data: categories } = useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const [filteredProducts, setFilteredProducts] =
    useState<IProduct[]>(relatedProducts);
  const [productCategory, setProductCategory] = useState<string>('');

  const filterProducts = () => {
    const filterSubCat = subcategories?.find(
      (subCat) => subCat.title === title,
    );
    const filterCat = categories?.find(
      (cat) => cat.id === filterSubCat?.CategoryId,
    );

    const filtered = products?.filter(
      (product) => product.CategoryId === filterCat?.id,
    );

    // Determine category title (Blinds, Curtains, etc.)
    setProductCategory(filterCat?.title || '');

    setFilteredProducts(filtered || []);
  };

  useEffect(() => {
    if (!relatedProducts || relatedProducts.length === 0) {
      filterProducts();
    } else {
      setFilteredProducts(relatedProducts);

      // Determine category title if relatedProducts is provided
      const relatedCategory = categories?.find(
        (cat) => cat.id === relatedProducts[0]?.CategoryId,
      );
      setProductCategory(relatedCategory?.title || '');
    }
  }, [title, products, subcategories, categories]);

  if (error instanceof Error) return <div>Error: {error.message}</div>;
  if (isNotFound) {
    return <NotFound />;
  }
  return (
    <>
      {/* <VideoBanner
        title={title}
        selectedPage={{
          heading: category,
          paragraph:description,
        }}
          
      /> */}
      <TopHero
        title={title}
        pageTitle={`Made to Measure ${title}`}
        image={bgBreadcrum}
        pagename={title}
      />
      <Container className="my-12">
        <div className="flex flex-col justify-center items-center space-y-4 px-2">
          <h2 className="text-xl sm:text-30 font-bold border border-b-[#A9B4A4] text-center">
            {title}
          </h2>
          <p className="font-normal text-xs sm:text-16 leading-7 sm:leading-9 text-center text-[#666768]">
            {description}
          </p>
        </div>
        <BathroomCategory
          filteredProducts={filteredProducts}
          isLoading={isLoading}
          categoryTitle={productCategory} // Pass the category title here
        />
      </Container>

      <VideoAutomation />
      <Container>
        <Support />
      </Container>
    </>
  );
};

export default RoomProducts;
