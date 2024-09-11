'use client';
import TopHero from 'components/ui/top-hero';
import React from 'react';
import bgBreadcrum from '../../../public/assets/images/Breadcrum/modern.png';
import moto1 from '../../../public/assets/images/MotorisedBlind/montorised1.png';
import DetailInfo from 'components/Detail/detail-info/detail-info';
import DetailProduct from 'components/Detail/detail-product/detail-product';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import { useQuery } from '@tanstack/react-query';
import { IProduct } from 'types/types';
import { fetchProducts } from 'config/fetch';
import Container from 'components/Res-usable/Container/Container';
import BookNowBanner from 'components/BookNowBanner/BookNowBanner';
import CardSkeleton from 'components/Skeleton/card-skeleton';

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
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  const filterProduct = products?.find((product) => {
    return product.title === title;
  });

  return (
    <>
      <TopHero title={title} image={bgBreadcrum} />
      <DetailInfo
        title={title}
        description={
          'Aric Blinds is a unique system that facilitates opening and closing the sheer of the same position of blinds without rolling up or down as such and it always covers the window and as such offer continuous UV protection and provides a sound barrier as well. Enjoy the facility of Roller Blinds & Vertical Blinds from only one Aric Blinds. Aric Blinds offer customers a unique experience with the simple operations of a Roller Blind and a Vertical Blind simultaneously. They have an exclusive feature that facilitates the opening and closi ng of the sheer part at the same position as the blind without rolling the blind up or down. '
        }
        image={moto1}
      />

      {isLoading && filterProduct ? (
        <CardSkeleton />
      ) : (
        <>
          <DetailProduct
            title={title}
            description={filterProduct?.description || ''}
            products={filterProduct}
          />
        </>
      )}

      {isLoading ? (
        <CardSkeleton />
      ) : (
        <>
          <Container className="mt-10 md:mt-20">
            <RelatedProducts products={products || []} />
          </Container>
        </>
      )}
      <BookNowBanner className="mt-20" />
    </>
  );
};

export default ProductDetailPage;
