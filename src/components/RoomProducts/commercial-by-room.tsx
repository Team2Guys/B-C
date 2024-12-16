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
import { usePathname } from 'next/navigation';
import { urls } from 'data/urls';
import NotFound from 'app/not-found';
import { ByRoomCommercialProduct, generateSlug } from 'data/data';

interface ICategoryPage {
  title: string;
  relatedProducts: IProduct[];
  description: string;
  category: string;
}

const CommercialByRoom = ({
  title,
  relatedProducts,
  description,
  category,
}: ICategoryPage) => {
  const pathname = usePathname();
  console.log(category,"category")
  const [isNotFound, setIsNotFound] = useState(false);
  const [filteredProducts, setFilteredProducts] =
    useState<IProduct[]>(relatedProducts);

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

  useEffect(() => {
    if (pathname) {
      const matchingUrl = urls.find((url) => url.errorUrl === pathname);

      if (matchingUrl) {
        console.log(matchingUrl, 'matchingUrl');
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    }
  }, [pathname]);

  const filterProducts = () => {
    const matchingRoom = ByRoomCommercialProduct.find(
      (room) => room.title === title,
    );

    let productdata: IProduct[] = [];
    if (matchingRoom) {
      //@ts-expect-error
      productdata = products?.filter((product) =>
        matchingRoom.productsTitles.includes(generateSlug(product.title)),
      );
    }

    setFilteredProducts(productdata);
  };

  useEffect(() => {
    filterProducts();
  }, [title, products, subcategories, categories]);

  if (error instanceof Error) return <div>Error: {error.message}</div>;
  if (isNotFound) {
    return <NotFound />;
  }
  return (
    <>
      <TopHero
        title={title}
        pageTitle={`Made to Measure ${title}`}
        image={bgBreadcrum}
        pagename={pathname}
      />
      <Container className="my-12">
        <BathroomCategory
        categoryName={title}
        description={description}
          filteredProducts={filteredProducts}
          isLoading={isLoading}
          categoryTitle="none"
          subCategory={title}
        />
      </Container>

      <VideoAutomation />
      <Container>
        <Support />
      </Container>
    </>
  );
};

export default CommercialByRoom;
