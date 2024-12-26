'use client';
import TopHero from 'components/ui/top-hero';
import React from 'react';
import DetailInfo from 'components/Detail/detail-info/detail-info';
import DetailProduct from 'components/Detail/detail-product/detail-product';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import { IProduct } from 'types/types';
import Container from 'components/Res-usable/Container/Container';
import BookNowBanner from 'components/BookNowBanner/BookNowBanner';
import CardSkeleton from 'components/Skeleton/card-skeleton';
import { usePathname } from 'next/navigation';
import bgBreadcrum from '../../../public/assets/images/Breadcrum/modern.png';

interface IProductDetail {
  title: string;
  allprod?: IProduct[];
}
const ProductDetailPage = ({ title, allprod }: IProductDetail) => {

  const pathName = usePathname();

  const filterProduct = allprod?.find((product) => {
    return product.title === title;
  });

  const relatedProducts = allprod?.filter((product) => {
    return product.CategoryId === filterProduct?.CategoryId;
  });

  const getTrimmedTitle = (title: string) => {
    return title.replace(/^Made to measure\s+/i, '');
  };
  const trimmedProductTitle = getTrimmedTitle(title);

  return (
    <>
      <TopHero
        title={title}
        pageTitle={`Made to Measure ${trimmedProductTitle}`}
        //@ts-expect-error
        image={`${filterProduct?.bannerImage?.imageUrl || bgBreadcrum.src}`}
        pagename={pathName}
      />
      <DetailInfo
        title={title ? title : ''}
        description={filterProduct?.description || ''}
        image={filterProduct?.posterImage}
        heading={filterProduct?.heading || ''}
      />

      {!allprod && filterProduct ? (
        <CardSkeleton />
      ) : (
        <DetailProduct
          title={filterProduct?.Sub_Heading || title}
          description={
            filterProduct?.Sub_Heading_description ||
            (filterProduct?.description &&
            typeof filterProduct.description === 'string'
              ? filterProduct.description
              : '')
          }
          products={filterProduct}
        />
      )}

      {!allprod ? (
        <CardSkeleton />
      ) : (
        <Container className="mt-10 md:mt-20">
          <RelatedProducts products={relatedProducts || []} limit={4} title={title} />
        </Container>
      )}
      <BookNowBanner className="mt-20" />
    </>
  );
};

export default ProductDetailPage;
