import { fetchProducts, fetchSubCategories, filtereCategory, filterProd } from 'config/fetch';
import Products_Categories from './Pro_Cat'
import { Metadata } from 'next';
import { headers } from 'next/headers';
import { IProduct } from 'types/types';
const Cateories = [2];

type Props = {
  params: { product: string }
}

export async function generateMetadata({ params}: Props): Promise<Metadata> {
  const {product} =  params

  const [products, categories] = await Promise.all([fetchProducts(), fetchSubCategories()]);

  const filteredProduct = filterProd(products, product, Cateories)
  const filteredSubCategory = filtereCategory(categories, product, Cateories);

  const headersList = headers();
  const domain = headersList.get('x-forwarded-host') || headersList.get('host') || ''; 
  const protocol = headersList.get('x-forwarded-proto') || 'https';
  const pathname = headersList.get('x-invoke-path') || '/';

  const fullUrl = `${protocol}://${domain}${pathname}`;
  
let Product = filteredProduct as IProduct

  let ImageUrl = Product?.posterImage?.imageUrl || filteredSubCategory?.posterImage?.imageUrl ||  "blindsandcurtains";
  let alt = Product?.posterImage.altText ||  filteredSubCategory?.posterImage?.altText || "blindsandcurtains";

  let NewImage = [
    {
      url: ImageUrl, 
      alt: alt}
  ];
  let title =  Product?.Meta_Title || filteredSubCategory?.Meta_Title ||   "blindsandcurtains"
  let description =  Product?.Meta_description || filteredSubCategory?.Meta_description ||   "Welcome to blindsandcurtains"
   let url = `${fullUrl}/blinds/${product}`

   console.log(Product, "")
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
      canonical: Product?.Canonical_Tag || filteredSubCategory?.Canonical_Tag||  url , 
    },
  }


}

const CommercialPage = async({ params }: { params: { product: string } }) => {
  const {product} =  params
  const [products, categories] = await Promise.all([fetchProducts(), fetchSubCategories()]);

  const filteredProduct = filterProd(products, product, Cateories)
  const filteredSubCategory = filtereCategory(categories, product, Cateories);



  return (
    <>
    <Products_Categories filteredProduct={filteredProduct} filteredSubCategory={filteredSubCategory} product={product} />
    </>
  );
};

export default CommercialPage;
