'use client';
import React from 'react';
import Info from 'components/Product/Info';
import Container from 'components/Res-usable/Container/Container';
import RelatedProducts from 'components/Related-products/RelatedProducts';
import { HiddenProducts_list } from 'data/data';
import VideoAutomation from 'components/video-Automation/video-Automation';
import Support from 'components/Res-usable/support/support';
import BookNowBanner from 'components/BookNowBanner/BookNowBanner';
import AllProducts from 'components/Product/All-Products/Products';
import { ICategory, IProduct } from 'types/types';
import VideoBanner from 'components/video-banner/video-banner';

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
  matchedProduct?: string;
  filteredItems?: IProduct[];
  title?: string
}

const Product = ({
  selectedPage,
  matchedProduct,
  filteredItems,
  title
}: IProductProps) => {

  console.log(selectedPage, "selectedPage")
  return (
    <>
      <VideoBanner
        title={`${title}`}
        selectedPage={selectedPage}
        showButton={true}
      />
      <Info selectedPage={selectedPage} />
      <AllProducts products={filteredItems?.filter((prod) => !HiddenProducts_list.includes(prod.title)) || []} categoryType={`${title}`} />
      <Container className="mt-10 mb-10">
        <RelatedProducts products={filteredItems || []} 
        limit={4} description={matchedProduct} />
      </Container>
      <BookNowBanner className="mt-10" />
      <VideoAutomation className=" mt-10" />
      <Support />
    </>
  );
};

export default Product;
