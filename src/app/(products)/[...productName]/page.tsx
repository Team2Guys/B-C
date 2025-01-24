import { fetchCategories, fetchProducts, fetchSubCategories, } from "config/fetch";
import Product from "./Product";
import { ICategory, IProduct } from "types/types";
import { headers } from "next/headers";
import { Metadata } from "next";
import { links } from "data/header_links";
import { permanentRedirect, RedirectType, } from "next/navigation";
import { blogPostUrl } from "data/urls";
import { categoriesContent, generateSlug, RelatedProductsdata } from "data/data";
import NotFound from "app/not-found";
import Script from "next/script";


type Props = {
  params: Promise<{ productName: string[] }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const productName = (await params).productName[0];
  console.log(productName, "product")
  const matchingLink = links.find((link) =>
    productName?.includes(link.href.replace(/^\//, '')),
  );
  const categories = await fetchCategories()


  const filterCategory = categories.find((category: ICategory) => category.title === matchingLink?.label);
  const headersList = await headers();
  const domain = headersList.get('x-forwarded-host') || headersList.get('host') || '';
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

const Products = async ({ params }: Props) => {
  const slug = (await params).productName[0];
  const redirectUrl: any = (await params).productName;
  const splited = redirectUrl.join('/')
  const matchingUrl = blogPostUrl.find((item) => item.url === `/${splited}`);
  if (matchingUrl) {
    permanentRedirect(matchingUrl.redirectUrl, 'push' as RedirectType);
  }
  const [products, categories, subCategories] = await Promise.all([
    fetchProducts(),
    fetchCategories(),
    fetchSubCategories(),
  ]);
  const selectedPage = categoriesContent.find(
    (page) => page.slug === generateSlug(slug),
  );
  const matchedProduct = RelatedProductsdata.find((product) =>
    slug.includes(product.name)
  );

  const matchingLink: any = links.find((link) => slug.includes(link.href.replace(/^\//, '')),);
  const selectedProductName = matchingLink ? matchingLink.label : slug;
  const filterCat = categories?.find((cat: ICategory) => cat.title.toLowerCase() === selectedProductName.toLowerCase());
  const filteredProducts = products.filter((product: IProduct) => product.CategoryId === filterCat?.id) || [];
  const filteredSubCategories = subCategories?.filter((subCat: ICategory) => subCat.CategoryId === filterCat?.id) || [];
  const filteredItems = [...filteredProducts, ...filteredSubCategories];
  if (!selectedPage || filteredItems.length < 1) {
    return <NotFound />;
  }
  console.log(matchingLink?.script, "script")

  return (
    <>
      <Script type="application/ld+json" id="categories-json-ld">
        {JSON.stringify(matchingLink?.script || "")}
      </Script>


      <Product productName={slug} products={products} categories={categories} subCategories={subCategories} selectedPage={selectedPage.content} matchedProduct={matchedProduct?.para} filteredItems={filteredItems} title={selectedProductName} />
    </>
  );
};

export default Products;
