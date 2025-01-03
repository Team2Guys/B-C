import { ICategory } from "types/types";
import Commercial from "./Commerical";
import { fetchCategories, fetchProducts, fetchSubCategories } from "config/fetch";
import { headers } from "next/headers";
import { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const categories = await fetchCategories();
  const filteredCatgory = categories.find((c) => c.id === 12);
  const domain =
    headersList.get('x-forwarded-host') || headersList.get('host') || '';
  const protocol = headersList.get('x-forwarded-proto') || 'https';
  const pathname = headersList.get('x-invoke-path') || '/';

  const fullUrl = `${protocol}://${domain}${pathname}`;

  let CommercialCategory = filteredCatgory as ICategory;

  let ImageUrl =
  CommercialCategory?.posterImage.imageUrl ||
    'blindsandcurtains';
  let alt =
  CommercialCategory?.posterImage.altText ||
    'blindsandcurtains';

  let NewImage = [
    {
      url: ImageUrl,
      alt: alt,
    },
  ];
  let title =
  CommercialCategory?.Meta_Title ||
    'blindsandcurtains';
  let description =
  CommercialCategory?.Meta_description ||
    'Welcome to blindsandcurtains';
  let url = `${fullUrl}commerical`;
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
      CommercialCategory?.Canonical_Tag || url,
    },
  };
}


const CommercialPage = async () => {
  const [products , subCategories ] = await Promise.all([
    fetchProducts(),
    fetchSubCategories()
  ]);
  return (
    <Commercial products={products} subCategories={subCategories} />
  );
};

export default CommercialPage;