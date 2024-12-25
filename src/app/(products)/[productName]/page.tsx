import { fetchCategories, fetchProducts, fetchSubCategories,  } from "config/fetch";
import Product from "./Product";
import { ICategory } from "types/types";
import { headers } from "next/headers";
import { Metadata } from "next";
import { links } from "data/header_links";

export async function generateMetadata({ params }: { params: { productName: string } }): Promise<Metadata> {
  const { productName } = params;
  const matchingLink = links.find((link) =>
    productName?.includes(link.href.replace(/^\//, '')),
  );
  const [ categories] = await Promise.all([
    fetchCategories(),
  ]);

  const filterCategory = categories.find((category) => category.title === matchingLink?.label);
  const headersList = headers();
  const domain =
    headersList.get('x-forwarded-host') || headersList.get('host') || '';
  const protocol = headersList.get('x-forwarded-proto') || 'https';
  const pathname = headersList.get('x-invoke-path') || '/';

  const fullUrl = `${protocol}://${domain}${pathname}`;

  let Category = filterCategory as ICategory;

  let ImageUrl =
    Category?.posterImage.imageUrl ||
    'blindsandcurtains';
  let alt =
    Category?.posterImage.altText ||
    'blindsandcurtains';

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

const Products = async ({ params }: { params: { productName: string } }) => {
  const slug = params.productName;
  const [products, categories, subCategories] = await Promise.all([
    fetchProducts(),
    fetchCategories(),
    fetchSubCategories(),
  ]);
  return (
    <>
      <Product productName={slug} products={products} categories={categories} subCategories={subCategories} />
    </>
  );
};

export default Products;
