import { ICategory } from "types/types";
import Commercial from "./Commerical";
import { fetchCategories, fetchProducts, fetchSubCategories } from "config/fetch";
import { headers } from "next/headers";
import { Metadata } from "next";
import { commercialPagesItems, generateSlug } from "data/data";
import Script from "next/script";
import { commererical } from "data/schema";
import logo from '../../../public/assets/images/logomain.webp';


export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const categories = await fetchCategories();
  const filteredCatgory = categories.find((c: ICategory) => c.id === 12);

  const domain =
    headersList.get('x-forwarded-host') || headersList.get('host') || '';
  const protocol = headersList.get('x-forwarded-proto') || 'https';
  const pathname = headersList.get('x-invoke-path') || '/';
  const fullUrl = `${protocol}://${domain}${pathname}`;

  let CommercialCategory = filteredCatgory as ICategory;

  let ImageUrl =
    CommercialCategory.posterImage?.imageUrl ||
    `${logo.src}`;
  let alt =
    CommercialCategory.posterImage.altText ||
    'blindsandcurtains';
console.log(ImageUrl)
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
  let url = `${fullUrl}commercial/`;
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
  const [products, subCategories, categories] = await Promise.all([
    fetchProducts(),
    fetchSubCategories(),
    fetchCategories(),
  ]);
  const filteredCatgory = categories.find((c: any) => c.id === 12);
  const matchingSubCategoryTitles = subCategories.filter((subCategory: any) => commercialPagesItems.some((prod: string) => prod === generateSlug(subCategory.title)));

  const filtered = products.filter((product: any) => commercialPagesItems.some((prod: string) => prod === generateSlug(product.title)));
  let mixed_prod_cats = [...filtered, ...matchingSubCategoryTitles];



  return (
    <>
    <Script type="application/ld+json" id="commercial-json-ld" >
{JSON.stringify(commererical)} 
    </Script>
    <Commercial
      filteredCatgory={filteredCatgory}
      filteredProducts={filtered}
      mixProdCategeries={mixed_prod_cats}
    />
    </>
  );
};

export default CommercialPage;