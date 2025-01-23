'use client';
import React, { useEffect, useState } from 'react';
import Info from 'components/Product/Info';
import Container from 'components/Res-usable/Container/Container';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import { HiddenProducts_list } from 'data/data';
import VideoAutomation from 'components/video-Automation/video-Automation';
import Support from 'components/Res-usable/support/support';
import BookNowBanner from 'components/BookNowBanner/BookNowBanner';
import AllProducts from 'components/Product/All-Products/Products';
import NotFound from 'app/not-found';
import { ICategory, IProduct } from 'types/types';
import VideoBanner from 'components/video-banner/video-banner';
import { links } from 'data/header_links';

interface IProductProps {
  productName: string;
  products: IProduct[];
  categories: ICategory[];
  subCategories: ICategory[];
  selectedPage: {
    heading: string;
    paragraph: string;
    subheading1: string;
    subheading2: string;
    subheadingContent: {
      content: string;
    }[];
  } | null;
}

const Product = ({
  productName,
  products,
  categories,
  subCategories,
  selectedPage,
}: IProductProps) => {
  const matchingLink = links.find((link) =>
    productName?.includes(link.href.replace(/^\//, '')),
  );
  // const [selectedPage, setSelectedPage] = useState<{
  //   heading: string;
  //   paragraph: string;
  //   subheading1: string;
  //   subheading2: string;
  //   subheadingContent: {
  //     content: string;
  //   }[];
  // } | null>(null);

  const title = matchingLink ? matchingLink.label : productName;
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [isNotFound, setIsNotFound] = useState(false);
  const productNameString = Array.isArray(productName)? productName[0]: productName;
  
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
        const filteredProducts =
          products.filter((product) => product.CategoryId === filterCat.id) ||
          [];
        const filteredSubCategories =
          subCategories?.filter(
            (subCat) => subCat.CategoryId === filterCat.id,
          ) || [];
        const filteredItems = [...filteredProducts, ...filteredSubCategories];
        setFilteredProducts(filteredItems);
        if (filteredItems.length > 0) {
          setIsNotFound(false);
          return;
        }
      }
      setIsNotFound(true);
    }
  }, [products, categories, subCategories, productNameString]);

  if (isNotFound) {
    return <NotFound />;
  }
  return (
    <>
      <VideoBanner
        title={`${title}`}
        selectedPage={selectedPage}
        showButton={true}
      />
      <Info selectedPage={selectedPage} />
      <AllProducts products={filteredProducts.filter((prod) => !HiddenProducts_list.includes(prod.title))} categoryType={`${title}`} />
      <Container className="mt-10 mb-10">
        <RelatedProducts products={filteredProducts || []} limit={4} />
      </Container>
      <BookNowBanner className="mt-10" />
      <VideoAutomation className=" mt-10" />
      <Support />
    </>
  );
};

export default Product;
