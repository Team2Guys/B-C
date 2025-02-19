import {fetchProducts, fetchSubCategories } from "config/fetch";
import SubProduct from "./Subproduct";
import { ChangedProductUrl, urls } from "data/urls";
import { generateSlug } from "data/data";
import { ICategory, IProduct } from "types/types";
import { headers } from "next/headers";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import NotFound from "app/not-found";


export async function generateMetadata({ params }: { params: Promise<{ subproduct: string}>}): Promise<Metadata> {
  const  subproduct = (await params).subproduct;
  const Cateories = [2];
  const products = await fetchProducts();

  const filteredProduct = products?.find(
    (prod:any) =>
      generateSlug(prod.title) === ChangedProductUrl(subproduct as string) &&
      Cateories.some((item: number) => item == prod.CategoryId),
  );
  const headersList = await headers();
  const domain =
    headersList.get('x-forwarded-host') || headersList.get('host') || '';
  const protocol = headersList.get('x-forwarded-proto') || 'https';
  const pathname = headersList.get('x-invoke-path') || '/';

  const fullUrl = `${protocol}://${domain}${pathname}`;

  if (!filteredProduct ) {
    notFound();
  }

  let Product = filteredProduct as IProduct;

  let ImageUrl =
  Product?.posterImage.imageUrl ||
    'blindsandcurtains';
  let alt =
  Product?.posterImage.altText ||
    'blindsandcurtains';

  let NewImage = [
    {
      url: ImageUrl,
      alt: alt,
    },
  ];
  let title =
  Product?.Meta_Title ||
    'blindsandcurtains';
  let description =
  Product?.Meta_description ||
    'Welcome to blindsandcurtains';
  let url = `${fullUrl}${subproduct}`;
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


const Page = async ({ params }: { params: Promise<{ subproduct: string }> }) => {
  const slug = (await params).subproduct;
  const [products, subCategories] = await Promise.all([fetchProducts(),fetchSubCategories()]);
  const Cateories = [2];

  const filteredSubCategory = subCategories?.find((sub:ICategory) => {
    let title = ChangedProductUrl(slug as string);
    let title_flag = title === generateSlug(sub.title);
    return (
      title_flag && Cateories.some((item: number) => item == sub.CategoryId)
    );
  });

  const filteredProduct = products?.find(
    (prod:any) =>
      generateSlug(prod.title) === ChangedProductUrl(slug as string) &&
      Cateories.some((item: number) => item == prod.CategoryId),
  );

  const matchingUrl = urls.find((url) => `${url.errorUrl}/` === `/blinds/roller-blinds/${slug}/`);
    if (matchingUrl) {
      return <NotFound />
    }
    if (!filteredSubCategory && !filteredProduct) {
      return <NotFound />;
    }
  return (
    <>
      <SubProduct products={products}
       filteredProduct={filteredProduct} filteredSubCategory={filteredSubCategory} />
    </>
  );
};

export default Page;
