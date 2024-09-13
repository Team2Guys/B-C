'use client';
import TopHero from 'components/ui/top-hero';
import React, { useEffect, useState } from 'react';
import bgBreadcrum from '../../../../public/assets/images/Breadcrum/modern.png';
import Info from 'components/Product/Info';
import Container from 'components/Res-usable/Container/Container';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import { generateSlug, relativeProducts } from 'data/data';
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
  let { productName } = useParams();
  const [fiilteredProducts, setfiilteredProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    filteredProducts();
  }, [productName]);

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
    isLoading,
  } = useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: fetchSubCategories,
  });
  if (productError instanceof Error)
    return <div>Error: {productError.message}</div>;
  if (categoryError instanceof Error)
    return <div>Error: {categoryError.message}</div>;

  const filteredProducts = () => {
    if (
      products &&
      products.length > 0 &&
      categories &&
      categories.length > 0
    ) {
      let category = categories.find(
        (c) => c.title.toLowerCase() == productNameString.toLowerCase(),
      );
      if (category) {
        let filteredProducts = products.filter(
          (item) => item.CategoryId == category?.id,
        );

        setfiilteredProducts(filteredProducts);
      }
    }
  };
  const matchingLink = links.find((link) =>
    productName?.includes(link.href.replace(/^\//, '')),
  );

  productName = matchingLink ? matchingLink.label : 'sff';

  const filterProduct = products?.find((product) => {
    return product.title === productName;
  });
  let relatedProduct = products?.filter((product) => {
    return product.CategoryId === filterProduct?.CategoryId;
  });

  return (
    <>
      <VideoBanner title={productName} />
      <Info />
      <AllProducts
        products={fiilteredProducts || []}
        categoryType={productNameString}
      />
      <Container className="mt-20 mb-20">
        <RelatedProducts products={relatedProduct || []} />
      </Container>
      <BookNowBanner className="mt-20" />
      <VideoAutomation className=" mt-20" />
      <Support />
    </>
  );
};

export default Products;
