'use client';
import TopHero from 'components/ui/top-hero';
import React, { useEffect, useState } from 'react';
import bgBreadcrum from '../../../public/assets/images/Breadcrum/modern.png';
import moto1 from '../../../public/assets/images/MotorisedBlind/montorised1.png';
import DetailInfo from 'components/Detail/detail-info/detail-info';
import DetailProduct from 'components/Detail/detail-product/detail-product';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import { useQuery } from '@tanstack/react-query';
import { ICategory, IProduct } from 'types/types';
import { fetchCategories, fetchProducts, fetchSubCategories } from 'config/fetch';
import Container from 'components/Res-usable/Container/Container';
import BookNowBanner from 'components/BookNowBanner/BookNowBanner';
import CardSkeleton from 'components/Skeleton/card-skeleton';

interface IProductDetail {
  title: string;
}
const ProductDetailPage = ({ title }: IProductDetail) => {
  const [category, setCategory] = useState<ICategory | undefined>();
  const {
    data: products,
    error,
    isLoading,
  } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
  const { data: categories } = useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });


  const filterProduct = products?.find((product) => {
    return product.title === title;
  });

  const relatedProducts = products?.filter((product) => {
    return product.CategoryId === filterProduct?.CategoryId;
  });

  useEffect(() => {
    if (relatedProducts && relatedProducts?.length > 0) {
      const filterRelatedProducts = relatedProducts.find(
        (subCat) => subCat.title === title
      );
      if (filterRelatedProducts) {
        const filterCat = categories?.find(
          (cat) => cat.id === filterRelatedProducts?.CategoryId
        );
        setCategory(filterCat);
      }
    }
  }, [relatedProducts, categories, title]);


  if (error instanceof Error) return <div>Error: {error.message}</div>;


  return (
    <>
      <TopHero title={title} category={category} image={bgBreadcrum} />
      <DetailInfo
        title={title ? title : ''}
        description={filterProduct?.description || ''}
        image={filterProduct?.posterImage?.imageUrl}
        heading = {filterProduct?.heading || ""}
      />

      {isLoading && filterProduct ? (
        <CardSkeleton />
      ) : (
        <DetailProduct
          title={title ? title : ''}
          description={filterProduct?.description || ''}
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
