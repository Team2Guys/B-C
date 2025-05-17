import { fetchCategories, fetchProducts, } from "config/fetch";
import Product from "../../../components/Product";
import { ICategory, IProduct } from "types/types";
import { headers } from "next/headers";
import { Metadata } from "next";
import { links } from "data/header_links";
import NotFound from "app/not-found";
import Script from "next/script";
import { notFound } from "next/navigation";
type Props = {
  params: Promise<{ productName: string[] }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata > {
  const productName = (await params).productName[0];
  const matchingLink = links.find((link) => productName?.includes(link.href.replace(/^\//, '')),);
  let urls = (await params).productName
  const [products, categories, ] = await Promise.all([
    fetchProducts(),
    fetchCategories(),
  ]);

  const filterCategory = categories.find((category: ICategory) => category.title === matchingLink?.label);
  const filteredProducts = products.filter((product: IProduct) => product.CategoryId === filterCategory?.id) || [];
  if ( filteredProducts.length < 1 || urls?.length > 1) {
    notFound();
  }
  const headersList = await headers();
  const domain = headersList.get('x-forwarded-host') || headersList.get('host') || '';
  const protocol = headersList.get('x-forwarded-proto') || 'https';
  const pathname = headersList.get('x-invoke-path') || '/';

  const fullUrl = `${protocol}://${domain}${pathname}`;

  let Category = filterCategory as ICategory;

  let ImageUrl = Category?.posterImage.imageUrl || 'blindsandcurtains';
  let alt = Category?.posterImage.altText || 'blindsandcurtains';

  let NewImage = [
    {
      url: ImageUrl,
      alt: alt,
    },
  ];
  let title =
    Category?.Meta_Title ||
    'blindsandcurtains';
  let description =
    Category?.Meta_description ||
    'Welcome to blindsandcurtains';
  let url = `${fullUrl}${productName}`;
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
        Category?.Canonical_Tag || url,
    },
  };
}

const Products = async ({ params }: Props) => {
  const slug = (await params).productName[0];
  let urls = (await params).productName
  const [products, categories] = await Promise.all([
    fetchProducts(),
    fetchCategories(),
  ]);
  
  const matchingLink: any = links.find((link) => slug.includes(link.href.replace(/^\//, '')),);
  const selectedProductName = matchingLink ? matchingLink.label : slug;
  const filterCat = categories?.find((cat: ICategory) => cat.title.toLowerCase() === selectedProductName.toLowerCase());
  const filteredProducts = products.filter((product: IProduct) => product.CategoryId === filterCat?.id) || [];

  if ( urls?.length > 1) {
    return <NotFound />;
  }

  return (
    <>
      <Script type="application/ld+json" id="categories-json-ld">
        {JSON.stringify(matchingLink?.script || "")}
      </Script>
      <Product
        categories={filterCat}
        filteredItems={filteredProducts}
        />
    </>
  );
};

export default Products;
