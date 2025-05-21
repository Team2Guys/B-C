import { fetchSingleCategory, fetchSingleCategorymain, } from "config/fetch";
import Product from "../../../components/Product";
import { ICategory, IProduct } from "types/types";
import { headers } from "next/headers";
import { Metadata } from "next";
import { links } from "data/header_links";
import NotFound from "app/not-found";
import Script from "next/script";
import { notFound } from "next/navigation";
import { getSubcategoriesByCategory } from "utils/helperFunctions";
type Props = {
  params: Promise<{ productName: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const productName = (await params).productName + "/";


  let filterCategory = await fetchSingleCategory(productName)

  if (!filterCategory) {
    notFound();
  }
  const headersList = await headers();
  const domain = headersList.get('x-forwarded-host') || headersList.get('host') || '';
  const protocol = headersList.get('x-forwarded-proto') || 'https';
  const pathname = headersList.get('x-invoke-path') || '/';

  const fullUrl = `${protocol}://${domain}${pathname}`;

  let Category = filterCategory as ICategory;

  let ImageUrl = Category?.posterImage?.imageUrl || 'blindsandcurtains';
  let alt = Category?.posterImage?.altText || 'blindsandcurtains';

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
      type:"website",
    },
    alternates: {
      canonical:
        Category?.Canonical_Tag || url,
    },
  };
}

const Products = async ({ params }: Props) => {
  const slug = (await params).productName;

  let category = await fetchSingleCategorymain(slug)  
  const matchingLink: any = links.find((link) => slug.includes(link.href.replace(/^\//, '')),);


  if (!category) {
    return <NotFound />;
  }

  const subcategoryList = getSubcategoriesByCategory(category.title);
  const lowerSubcategorySet = new Set(subcategoryList.map((sub) => sub.toLowerCase()));

  const filteredProducts = category.products?.filter((product: IProduct) =>
    lowerSubcategorySet.has(product.title.toLowerCase())
  );


  console.log(category.products, 'products')

  return (
    <>
      <Script type="application/ld+json" id="categories-json-ld">
        {JSON.stringify(matchingLink?.script || "")}
      </Script>
      <Product
        categories={category}
        filteredItems={filteredProducts}
      />
    </>
  );
};

export default Products;
