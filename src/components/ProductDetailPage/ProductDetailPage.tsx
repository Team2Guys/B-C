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
import { generateSlug } from 'data/data';
import { customTitles } from 'data/urls';

interface IProductDetail {
  title: string;
  allprod?: IProduct[];
  filterProduct: IProduct | any;
}
const ProductDetailPage = ({ title, allprod,filterProduct  }: IProductDetail) => {
  const pathName = usePathname();

  const relatedProducts = allprod?.filter((product) => {
    return product.CategoryId === filterProduct?.CategoryId;
  });

  const getCustomTitle = (title: string) => {
    const slug = title;
    const match = customTitles.find((item) => generateSlug(item.slug) === generateSlug(slug));
    if (match) {
      return match.name;
    }
    return `Made to Measure ${title.replace(/^Made to measure\s+/i, '')}`;
  };
  const customPageTitle = getCustomTitle(title);
  
  return (
    <>
      <TopHero
        title={title}
        pageTitle={customPageTitle}
        image={`${filterProduct?.bannerImage?.imageUrl || bgBreadcrum.src}`}
        pagename={pathName}
      />
        <Container className="mt-10">

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
      <div className='mt-10'>

      {!allprod ? (
        <CardSkeleton />
      ) : (
          <RelatedProducts products={relatedProducts || []} limit={4} title={title} />
   
      )}
      </div>
      </Container>


      <BookNowBanner className="mt-20" />
    </>
  );
};

export default ProductDetailPage;
