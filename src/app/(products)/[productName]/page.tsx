'use client';
import TopHero from 'components/ui/top-hero';
import React, { useEffect, useState } from 'react';
import bgBreadcrum from '../../../../public/assets/images/Breadcrum/modern.png';
import Info from 'components/Product/Info';
import Container from 'components/Res-usable/Container/Container';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import { generateSlug } from 'data/data';
import VideoAutomation from 'components/video-Automation/video-Automation';
import Support from 'components/Res-usable/support/support';
import BookNowBanner from 'components/BookNowBanner/BookNowBanner';
import { useParams } from 'next/navigation';
import AllProducts from 'components/Product/All-Products/Products';
import { useQuery } from '@tanstack/react-query';
import { ICategory, IProduct } from 'types/types';
import { fetchProducts, fetchSubCategories } from 'config/fetch';
import VideoBanner from 'components/video-banner/video-banner';
import { links } from 'components/Res-usable/header/Header';

const Products = () => {
  const { productName } = useParams();
  const matchingLink = links.find((link) =>
    productName?.includes(link.href.replace(/^\//, '')),
  );

  const title = matchingLink ? matchingLink.label : productName;
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  const productNameString = Array.isArray(productName)
    ? productName[0]
    : productName;
  const displayProductName = productNameString || 'Default Product';
  const slugTitle = generateSlug(displayProductName);

  const {
    data: products,
    error: productError,
    isLoading: productLoading,
  } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const {
    data: categories,
    error: categoryError,
    isLoading: categoryLoading,
  } = useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: fetchSubCategories,
  });

  useEffect(() => {
    if (products && categories && productNameString) {
      const matchingLink = links.find((link) =>
        productNameString.includes(link.href.replace(/^\//, '')),
      );

      const selectedProductName = matchingLink ? matchingLink.label : '';

      const filterCat = categories?.find(
        (cat) => cat.title.toLowerCase() === selectedProductName.toLowerCase(),
      );

      if (filterCat) {
        const filtered = products.filter(
          (product) => product.CategoryId === filterCat.id,
        );
        setFilteredProducts(filtered);
      }
    }
  }, [products, categories, productNameString]);

  if (productError instanceof Error)
    return <div>Error: {productError.message}</div>;
  if (categoryError instanceof Error)
    return <div>Error: {categoryError.message}</div>;

  return (
    <>
      <VideoBanner title={`${title}`} />
      <Info />
      <AllProducts products={filteredProducts} categoryType={`${title}`} />
      <Container className="mt-20 mb-20">
        <RelatedProducts products={filteredProducts || []} />
      </Container>
      <BookNowBanner className="mt-20" />
      <VideoAutomation className=" mt-20" />
      <Support />
    </>
  );
};

export default Products;
