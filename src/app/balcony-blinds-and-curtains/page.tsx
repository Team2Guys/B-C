import NotFound from 'app/not-found';
import { fetchProducts, fetchSubCategories } from 'config/fetch';
import dynamic from 'next/dynamic'
const CommercialByRoom = dynamic(() => import('components/RoomProducts/commercial-by-room'), {})
import { Metadata } from 'next';
import { headers } from 'next/headers';
import { ICategory } from 'types/types';


export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  let product = "Balcony Blinds And Curtains"
  const subCategories: ICategory[] = await fetchSubCategories();
  const filteredCatgory = subCategories.find((c) => c.title === product);
  const domain = headersList.get('x-forwarded-host') || headersList.get('host') || '';
  const protocol = headersList.get('x-forwarded-proto') || 'https';
  const pathname = headersList.get('x-invoke-path') || '/';

  const fullUrl = `${protocol}://${domain}${pathname}`;

  let ImageUrl =
    filteredCatgory?.posterImage.imageUrl ||
    'blindsandcurtains';
  let alt =
    filteredCatgory?.posterImage.altText ||
    'blindsandcurtains';

  let NewImage = [
    {
      url: ImageUrl,
      alt: alt,
    },
  ];
  let title =
    filteredCatgory?.Meta_Title ||
    'blindsandcurtains';
  let description =
    filteredCatgory?.Meta_description ||
    'Welcome to blindsandcurtains';
  let url = `${fullUrl}balcony-blinds-and-curtains/`;
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
        filteredCatgory?.Canonical_Tag || url,
    },
  };
}

const CommercialPage = async () => {
  let product = "Balcony Blinds And Curtains"

  const [products, subCategories] = await Promise.all([
    fetchProducts(),
    fetchSubCategories(),
  ]);


  const filteredSubCategory = subCategories?.find((sub: ICategory) => sub.title === product);

  if (!filteredSubCategory) {
    return <NotFound />;
  }
  return (
    <>

      <CommercialByRoom
        title={`${filteredSubCategory?.title}`}
        description={`${filteredSubCategory?.description}`}
        category={`${filteredSubCategory?.category.title}`}
        relatedProducts={filteredSubCategory?.products || []}
        filteredSubCategory={filteredSubCategory}
        products={products}
      />

    </>
  );
};

export default CommercialPage;
