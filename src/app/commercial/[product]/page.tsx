import {fetchProducts, fetchSubCategories } from "config/fetch";
import CommercialProduct from "./CommerticalProduct";
import { headers } from "next/headers";
import { ICategory, IProduct } from "types/types";
import { Metadata } from "next";
import { urls } from "data/urls";
import { reverseSlug } from "data/data";
import { meta_props } from "types/interfaces";

export async function generateMetadata({ params }:meta_props): Promise<Metadata> {
  const product  = (await params).product;
  const [products, subCategories] = await Promise.all([
    fetchProducts(),
    fetchSubCategories(),
  ]);
  const matchingLinks = urls.find((link) => link.Url === product)

  const filterSubCategory = subCategories.find((subcategory:ICategory) => {
    const comparisonValue = matchingLinks?.productName || reverseSlug(product);
    return subcategory.title === comparisonValue;
  });
  const filterproduct = products.find((prod:any) => {
    const comparisonValue = matchingLinks?.productName || reverseSlug(product);
    return prod.title === comparisonValue;
  });
  const headersList = await headers();
  const domain =
    headersList.get('x-forwarded-host') || headersList.get('host') || '';
  const protocol = headersList.get('x-forwarded-proto') || 'https';
  const pathname = headersList.get('x-invoke-path') || '/';
  const fullUrl = `${protocol}://${domain}${pathname}`;

  let SubCategory = filterSubCategory ? filterSubCategory as ICategory : filterproduct as IProduct;
  let ImageUrl =
  SubCategory?.posterImage.imageUrl ||
    'blindsandcurtains';
  let alt =
  SubCategory?.posterImage.altText ||
    'blindsandcurtains';

  let NewImage = [
    {
      url: ImageUrl,
      alt: alt,
    },
  ];
  let title =
  SubCategory?.Meta_Title ||
    'blindsandcurtains';
  let description =
  SubCategory?.Meta_description ||
    'Welcome to blindsandcurtains';
  let url = `${fullUrl}commerical/${product}`;
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: url,
      images: NewImage,
    },
    alternates: {
      canonical:
      SubCategory?.Canonical_Tag || url,
    },
  };
}


const CommercialPage = async ({ params }: meta_props) => {
  const slug = (await params).product;
  const [products, subCategories] = await Promise.all([
    fetchProducts(),
    fetchSubCategories(),
  ]);
  
  return (
    <>
      <CommercialProduct product={slug} products={products} subCategories={subCategories}  />
    </>
  );
};

export default CommercialPage;
