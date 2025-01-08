import {
  fetchProducts,
  fetchSubCategories,
  filtereCategory,
  filterProd,
} from 'config/fetch';
import Products_Categories from './Pro_Cat';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import { IProduct } from 'types/types';
import { meta_props } from 'types/interfaces';
import { notFound } from 'next/navigation';
const Cateories = [2];


export async function generateMetadata({
  params,
}: meta_props): Promise<Metadata> {
  const  product  = (await params).product;

  const [products, categories] = await Promise.all([
    fetchProducts(),
    fetchSubCategories(),
  ]);

  const filteredProduct = filterProd(products, product, Cateories);
  const filteredSubCategory = filtereCategory(categories, product, Cateories);

  const headersList = await headers();
  const domain = headersList.get('x-forwarded-host') || headersList.get('host') || '';
  const protocol = headersList.get('x-forwarded-proto') || 'https';
  const pathname = headersList.get('x-invoke-path') || '/';

  const fullUrl = `${protocol}://${domain}${pathname}`;
console.log(fullUrl, "fullurl")

if (!filteredProduct ) {
  notFound();
}

  let Product = filteredProduct as IProduct;

  let ImageUrl =
    Product?.posterImage?.imageUrl ||
    filteredSubCategory?.posterImage?.imageUrl ||
    'blindsandcurtains';
  let alt =
    Product?.posterImage.altText ||
    filteredSubCategory?.posterImage?.altText ||
    'blindsandcurtains';

  let NewImage = [
    {
      url: ImageUrl,
      alt: alt,
    },
  ];
  let title =
    Product?.Meta_Title ||
    filteredSubCategory?.Meta_Title ||
    'blindsandcurtains';
  let description =
    Product?.Meta_description ||
    filteredSubCategory?.Meta_description ||
    'Welcome to blindsandcurtains';
  let url = `${fullUrl}/blinds/${product}`;

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
        Product?.Canonical_Tag || filteredSubCategory?.Canonical_Tag || url,
    },
  };
}

const CommercialPage = async ({ params }: meta_props) => {
  const product  = (await params).product;
  const [products, categories] = await Promise.all([fetchProducts(),fetchSubCategories()]);

  const filteredProduct = filterProd(products, product, Cateories);
  const filteredSubCategory = filtereCategory(categories, product, Cateories);

  return (
    <>
      <Products_Categories
        filteredProduct={filteredProduct}
        filteredSubCategory={filteredSubCategory}
        product={product}
        allprod={products}
      />
    </>
  );
};

export default CommercialPage;
