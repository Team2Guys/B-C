'use client';
import { useQuery } from '@tanstack/react-query';
import CategoryPage from 'components/CategoryPage/CategoryPage';
import ProductDetailPage from 'components/ProductDetailPage/ProductDetailPage';
import CommercialByRoom from 'components/RoomProducts/commercial-by-room';
import RoomProducts from 'components/RoomProducts/room-product';
import PageSkelton from 'components/Skeleton/PageSkelton';
import { fetchProducts, fetchSubCategories } from 'config/fetch';
import { generateSlug } from 'data/data';
import { ChangedProductUrl, CommercialUrl } from 'data/urls';
import { useParams, useRouter } from 'next/navigation';
import { ICategory, IProduct } from 'types/types';

const CommercialPage = () => {
  const { product } = useParams();
const router =   useRouter();

  const Cateories = [12];
  const { data: subCategories, isLoading: subLoading } = useQuery<ICategory[]>({
    queryKey: ['sub-categories'],
    queryFn: fetchSubCategories,
  });

  const { data: products, isLoading: prodLoading } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const filteredSubCategory = subCategories?.find(
    (sub) => generateSlug(sub.title) === ChangedProductUrl(product as string),
  );

  console.log(filteredSubCategory, 'filteredSubCategory');

  const relatedProducts = products?.filter(
    (prod) => prod.SubCategoryId === filteredSubCategory?.id,
  );

console.log(product, "product")
  const redirected_product = CommercialUrl.find((prod:{urlName:string, Redirect: string})=>{
return( prod.urlName == String(product)?.toLowerCase())
  })

  if(redirected_product){
    router.push(redirected_product.Redirect);
  }

  const filteredProduct = products?.find(
    (prod) =>
      generateSlug(prod.title) ===
      generateSlug(ChangedProductUrl(product as string)),
  );

  if (subLoading || prodLoading) {
    return <PageSkelton />;
  }

  // if (!filteredSubCategory && !filteredProduct) {
  //   return <div>No matching product or subcategory found.</div>;
  // }

  return (
    <>
      {filteredSubCategory ? (
        <>
          <CommercialByRoom
            title={`${filteredSubCategory.title}`}
            description={`${filteredSubCategory.description}`}
            category={`${filteredSubCategory.category.title}`}
            relatedProducts={filteredSubCategory?.products || []}
          />
        </>
      ) : (
        <ProductDetailPage title={`${filteredProduct?.title}`} />
      )}
    </>
  );
};

export default CommercialPage;
