import { fetchCategories, fetchProducts, fetchSubCategories } from "config/fetch";
import CommercialProduct from "./CommerticalProduct";
import { headers } from "next/headers";
import { ICategory, IProduct } from "types/types";
import { Metadata } from "next";


export async function generateMetadata({ params }: { params: { product: string } }): Promise<Metadata> {
  const { product } = params;

  const [products, categories, subCategories] = await Promise.all([
    fetchProducts(),
    fetchCategories(),
    fetchSubCategories(),
  ]);

  const filterSubCategory = subCategories.find((subcategory) => subcategory.title === product);
  const filterproduct = products.find((prod) => prod.title === product);
  const headersList = headers();
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
  let url = `${fullUrl}${product}`;
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


const CommercialPage = async ({ params }: { params: { product: string } }) => {
  const slug = params.product;
  const [products, categories, subCategories] = await Promise.all([
    fetchProducts(),
    fetchCategories(),
    fetchSubCategories(),
  ]);
  return (
    <>
      <CommercialProduct product={slug} products={products} categories={categories} subCategories={subCategories} />
    </>
  );
};

export default CommercialPage;
