import {fetchProducts, fetchSubCategories } from "config/fetch";
import SubProduct from "./Subproduct";
import { ChangedProductUrl, urls } from "data/urls";
import { generateSlug } from "data/data";
import { ICategory, IProduct } from "types/types";
import { headers } from "next/headers";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import NotFound from "app/not-found";
import Script from "next/script";
import { schemaMap } from "data/products-schema";


interface SlugPageProps {
  params: Promise<{
    product: string;
    subproduct: string
  }>;
}



export async function generateMetadata({ params }: SlugPageProps): Promise<Metadata> {
  const  subproduct = (await params).subproduct;
  const  category = (await params).product;
  const Cateories = [2];
  const products = await fetchProducts();

  const filteredProduct = products?.find((prod:any) =>
      generateSlug(prod.title) === ChangedProductUrl(subproduct as string) &&
      Cateories.some((item: number) => item == prod.CategoryId),
  );
  const headersList = await headers();
  const domain =headersList.get('x-forwarded-host') || headersList.get('host') || '';
  const protocol = headersList.get('x-forwarded-proto') || 'https';
  const pathname = headersList.get('x-invoke-path') || '/';

  const fullUrl = `${protocol}://${domain}${pathname}`;

  if (!filteredProduct ) {
    notFound();
  }

  let Product = filteredProduct as IProduct;
  console.log(fullUrl, "rull", category)

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
  let url = `${fullUrl}blinds/${category}/${subproduct}`;
console.log(url, "urls")
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


const Page = async ({ params }:SlugPageProps) => {
  const newurls  = (await params);
  let slug = newurls.subproduct
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
    const productTitle = filteredProduct?.title || filteredSubCategory?.title || '';
    const matchedSchema = schemaMap[productTitle];
  return (
    <>
       {matchedSchema && (
        <Script type="application/ld+json" id="blinds-json-ld">
          {JSON.stringify(matchedSchema)}
        </Script>
      )}
      <SubProduct products={products}
       filteredProduct={filteredProduct} filteredSubCategory={filteredSubCategory} />
    </>
  );
};

export default Page;
