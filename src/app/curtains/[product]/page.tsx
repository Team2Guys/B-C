import { IProduct } from 'types/types';
import Curtain from './Curtain';
import {
  fetchProducts,
  fetchSubCategories,
  filtereCategory,
  filterProd,
} from 'config/fetch';
import { headers } from 'next/headers';
import { Metadata } from 'next';
import { meta_props } from 'types/interfaces';
import { CommercialUrl, urls } from 'data/urls';
import { permanentRedirect } from 'next/navigation';
import NotFound from 'app/not-found';

const Cateories = [5];

export async function generateMetadata({
  params,
}: meta_props): Promise<Metadata> {
  const product = (await params).product;

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
  let url = `${fullUrl}curtains/${product}`;

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
  const [products, subCategories] = await Promise.all([fetchProducts(), fetchSubCategories()]);

  const filteredProduct = filterProd(products, product, Cateories);
  const filteredSubCategory = filtereCategory(subCategories, product, Cateories);

  const redirected_product = CommercialUrl.find(
    (prod: { urlName: string; Redirect: string }) => {
      return prod.urlName == String(product)?.toLowerCase();
    },
  );

  if (redirected_product) {
    permanentRedirect(redirected_product.Redirect);
  }
  const matchingUrl = urls.find((url) => `${url.errorUrl}/` === `/curtains/${product}/`);
  if (matchingUrl) {
    return <NotFound />
  }
  if (!filteredSubCategory && !filteredProduct) {
    return <NotFound />;
  }
  return (
    <Curtain
      filteredProduct={filteredProduct}
      filteredSubCategory={filteredSubCategory}
      product={product}
      allprod={products}
      subCategories={subCategories}
    />
  );
};

export default CommercialPage;
