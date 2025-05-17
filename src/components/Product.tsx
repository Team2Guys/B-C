'use client';
import React from 'react';
import { ICategory, IProduct } from 'types/types';
import Breadcrumb from './Res-usable/breadcrumb';
import CategoryHero from './product-category/category-hero';
import AllProduct from './product-category/AllProduct';
import SimpleSteps from './SimpleSteps/SimpleSteps';
import Faqs from './product-category/Faqs';

interface IProductProps {
  productName: string;
  products: IProduct[];
  categories: ICategory[];
  subCategories: ICategory[];
  selectedPage: {
    heading: string;
    paragraph: string;
    features: {
      text: string;
    }[];
  } | null;
  filteredItems?: IProduct[];
  title?: string
}

const Product = ({
  productName,
  selectedPage,
  filteredItems,
  title
}: IProductProps) => {
  return (
    <>
      <Breadcrumb title={productName }/>
      <CategoryHero title={`${title}`} selectedPage={selectedPage}/>
      <AllProduct Data={filteredItems || []} />
      <SimpleSteps/>
      <Faqs/>
    </>
  );
};

export default Product;
