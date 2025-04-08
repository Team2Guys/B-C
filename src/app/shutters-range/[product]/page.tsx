import {
  fetchCategories,
  fetchProducts,
  fetchSubCategories,
  filtereCategory,
  filterProd,
} from 'config/fetch';
import Shutters from './Shutters';
import { IProduct } from 'types/types';
import { headers } from 'next/headers';
import { Metadata } from 'next';
import { meta_props } from 'types/interfaces';
import { urls } from 'data/urls';
import NotFound from 'app/not-found';
import { colorData } from 'data/data';

export async function generateMetadata({
  params,
}: meta_props): Promise<Metadata> {
  const product = (await params).product;
  const Cateories = [9];

  const [products, categories] = await Promise.all([
    fetchProducts(),
    fetchSubCategories(),
  ]);

  const filteredProduct = filterProd(products, product, Cateories);
  const filteredSubCategory = filtereCategory(categories, product, Cateories);

  const headersList = await headers();
  const domain =
    headersList.get('x-forwarded-host') || headersList.get('host') || '';
  const protocol = headersList.get('x-forwarded-proto') || 'https';
  const pathname = headersList.get('x-invoke-path') || '/';

  const fullUrl = `${protocol}://${domain}${pathname}`;

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
  let url = `${fullUrl}shutters-range/${product}`;

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
  const product = (await params).product;
  // const redirected_product = CommercialUrl.find(
  //   (prod: { urlName: string; Redirect: string }) => {
  //     return prod.urlName == String(product)?.toLowerCase();
  //   },
  // );

  // if (redirected_product) {
  //   permanentRedirect(redirected_product.Redirect, "replace" as RedirectType);
  // }
  const Cateories = [9];

  const [products, Subcategories, categories] = await Promise.all([
    fetchProducts(),
    fetchSubCategories(),
    fetchCategories(),
  ]);

  const filteredProduct = filterProd(products, product, Cateories);
  const filteredSubCategory = filtereCategory(Subcategories, product, Cateories);

  const matchingUrl = urls.find((url) => `${url.errorUrl}/` === `/shutters-range/${product}/`);
  const matchingColorShutter = colorData.find((clr) => clr.url === `/shutters-range/${product}/`)
  if (matchingUrl) {
    return <NotFound />
  }
  if (!filteredSubCategory && !filteredProduct && !matchingColorShutter) {
    return <NotFound />;
  }

  return (
    <Shutters
      filteredProduct={filteredProduct}
      filteredSubCategory={filteredSubCategory}
      product={product}
      allprod={products}
      categories={categories}
      subCategories={Subcategories}
      colorPage={matchingColorShutter}
    />
  );
};

export default CommercialPage;
