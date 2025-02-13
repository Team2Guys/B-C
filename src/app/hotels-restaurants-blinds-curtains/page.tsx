
import ProductDetailPage from 'components/ProductDetailPage/ProductDetailPage';
import { fetchProducts } from 'config/fetch';
import { generateSlug } from 'data/data';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import { IProduct } from 'types/types';

export async function generateMetadata(): Promise<Metadata> {
  let products = await fetchProducts()
  const filtereProdcts = ["Hotels & Restaurants"]
  const filteredProduct = products?.find((prod: any) => filtereProdcts.includes(prod.title));

  const headersList = await headers();
  const domain = headersList.get('x-forwarded-host') || headersList.get('host') || '';
  const protocol = headersList.get('x-forwarded-proto') || 'https';
  const pathname = headersList.get('x-invoke-path') || '/';
  const fullUrl = `${protocol}://${domain}${pathname}`;
  let Product = filteredProduct as IProduct;

  let ImageUrl = Product?.posterImage?.imageUrl || 'blindsandcurtains';

  let alt = Product?.posterImage.altText || 'blindsandcurtains';

  let NewImage = [
    {
      url: ImageUrl,
      alt: alt,
    },
  ];


  let title = Product?.Meta_Title || 'blindsandcurtains';
  let description = Product?.Meta_description || 'Welcome to blindsandcurtains';

  let url = `${fullUrl}/blinds/${generateSlug(Product.title)}`;

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
        Product?.Canonical_Tag || url,
    },
  };
}
const CommercialPage = async () => {
  const [products] = await Promise.all([fetchProducts()]);
  const filtereProdcts = ["Hotels & Restaurants"]

  const filteredProduct = products?.find((prod: any) => filtereProdcts.includes(prod.title));
  if (!filteredProduct) {
    return notFound();
  }
  return (
    <ProductDetailPage
      title={`${filteredProduct?.title}`}
      allprod={products}
      filterProduct={filteredProduct}
    
    />
  );
};

export default CommercialPage;
