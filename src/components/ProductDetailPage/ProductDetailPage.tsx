'use client';
import TopHero from 'components/ui/top-hero';
import React from 'react';
import bgBreadcrum from '../../../public/assets/images/Breadcrum/modern.png';
import DetailInfo from 'components/Detail/detail-info/detail-info';
import DetailProduct from 'components/Detail/detail-product/detail-product';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import { useQuery } from '@tanstack/react-query';
import {  IProduct } from 'types/types';
import { fetchProducts, } from 'config/fetch';
import Container from 'components/Res-usable/Container/Container';
import BookNowBanner from 'components/BookNowBanner/BookNowBanner';
import CardSkeleton from 'components/Skeleton/card-skeleton';
import { usePathname } from 'next/navigation';

interface IProductDetail {
  title: string;
}
const ProductDetailPage = ({ title }: IProductDetail) => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const pathName = usePathname();

  const filterProduct = products?.find((product) => {
    return product.title === title;
  });

  const relatedProducts = products?.filter((product) => {
    return product.CategoryId === filterProduct?.CategoryId;
  });

  if (error instanceof Error) return <div>Error: {error.message}</div>;

  const getTrimmedTitle = (title: string) => {
    return title.replace(/^Made to measure\s+/i, ''); 
  };
  const trimmedProductTitle = getTrimmedTitle(title);
  
  return (
    <>
      <TopHero title={title} pageTitle={`Made to Measure ${trimmedProductTitle}`} image={bgBreadcrum} pagename={pathName} />
      <DetailInfo
        title={title ? title : ''}
        description={filterProduct?.description || ''}
        image={filterProduct?.posterImage}
        heading={filterProduct?.heading || ""}
      />

      {isLoading && filterProduct ? (
        <CardSkeleton />
      ) : (
        <DetailProduct
          title={filterProduct?.Sub_Heading || title}
          description={
            filterProduct?.Sub_Heading_description ||
            (filterProduct?.description && typeof filterProduct.description === 'string' ? filterProduct.description : '')
          }
          products={filterProduct}
        />
      )}

      {isLoading ? (
        <CardSkeleton />
      ) : (
        <Container className="mt-10 md:mt-20">
          <RelatedProducts products={relatedProducts || []} limit={4} />
        </Container>
      )}
      <BookNowBanner className="mt-20" />
    </>
  );
};

export default ProductDetailPage;
