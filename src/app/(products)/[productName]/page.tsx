'use client';
import React, { useEffect, useState } from 'react';
import Info from 'components/Product/Info';
import Container from 'components/Res-usable/Container/Container';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import { categoriesContent, generateSlug } from 'data/data';
import VideoAutomation from 'components/video-Automation/video-Automation';
import Support from 'components/Res-usable/support/support';
import BookNowBanner from 'components/BookNowBanner/BookNowBanner';
import { useParams, usePathname } from 'next/navigation';
import AllProducts from 'components/Product/All-Products/Products';
import { useQuery } from '@tanstack/react-query';
import { ICategory, IProduct } from 'types/types';
import {
  fetchCategories,
  fetchProducts,
  fetchSubCategories,
} from 'config/fetch';
import VideoBanner from 'components/video-banner/video-banner';
import { links } from 'components/Res-usable/header/Header';

const Products = () => {
  const { productName } = useParams();
  const matchingLink = links.find((link) =>
    productName?.includes(link.href.replace(/^\//, '')),
  );
  const [selectedPage, setSelectedPage] = useState<{
    heading: string;
    paragraph: string;
    subheading1: string;
    subheading2: string;
    subheadingContent: {
      content: string;
    }[];
  } | null>(null);
  const pathname = usePathname();
  const title = matchingLink ? matchingLink.label : productName;
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  const productNameString = Array.isArray(productName)
    ? productName[0]
    : productName;
  const displayProductName = productNameString || 'Default Product';

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
    queryFn: fetchCategories,
  });
  const {
    data: subCategories,
    error: subCateERROR,
    isLoading: isLoadingSubCategories,
  } = useQuery<ICategory[]>({
    queryKey: ['fetchSubCategories'],
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
      console.log('>>>>>>>>> <<<<<<<<<<<');
      console.log('categories');
      console.log(categories);
      console.log('subCategories');
      console.log(subCategories);
      console.log('filterCat');
      console.log(filterCat);

      if (filterCat) {
        const filteredProducts =
          products.filter((product) => product.CategoryId === filterCat.id) ||
          [];

        const filteredSubCategories =
          subCategories?.filter(
            (subCat) => subCat.CategoryId === filterCat.id,
          ) || [];

        const filteredItems = [...filteredProducts, ...filteredSubCategories];
        setFilteredProducts(filteredItems);
      }
    }
  }, [products, categories, subCategories, productNameString]);

  useEffect(() => {
    const selectedPage = categoriesContent.find(
      (page) => page.slug === generateSlug(pathname),
    );
    if (selectedPage) {
      setSelectedPage(selectedPage.content);
    }
  }, [pathname]);

  return (
    <>
      <VideoBanner title={`${title}`} selectedPage={selectedPage} showButton={true} />
      <Info selectedPage={selectedPage} />
      <AllProducts products={filteredProducts} categoryType={`${title}`} />
      <Container className="mt-20 mb-20">
        <RelatedProducts products={filteredProducts || []} limit={4} />
      </Container>
      <BookNowBanner className="mt-20" />
      <VideoAutomation className=" mt-20" />
      <Support />
    </>
  );
};

export default Products;
