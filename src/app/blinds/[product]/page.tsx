'use client';

import { useQuery } from '@tanstack/react-query';
import CategoryPage from 'components/CategoryPage/CategoryPage';
import ProductDetailPage from 'components/ProductDetailPage/ProductDetailPage';
import PageSkelton from 'components/Skeleton/PageSkelton';
import ProductSkeleton from 'components/Skeleton/ProductSkeleton';
import VideoAutomation from 'components/video-Automation/video-Automation';
import { fetchProducts, fetchSubCategories } from 'config/fetch';
import { generateSlug } from 'data/data';
import { ChangedProductUrl, urls } from 'data/urls';
import { useParams, usePathname } from 'next/navigation';
import { ICategory, ISUBCATEGORY, IProduct } from 'types/types';

const CommercialPage = () => {
  const { product } = useParams();
  const path = usePathname()

  const { data: subCategories, isLoading: subLoading } = useQuery<ICategory[]>({
    queryKey: ['sub-categories'],
    queryFn: fetchSubCategories,
  });

  type Person = {
    blind: number,
    shutter: number,
    curtains: number,
    commercial: number
  };


  const Cateories = [2]


  const { data: products, isLoading: prodLoading } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });



  const filteredSubCategory = subCategories?.find((sub) => {

    let title = ChangedProductUrl(product as string)
    console.log(title, "title")
   let title_flag = title ===sub.title
    return title_flag && (Cateories.some((item:number)=>item ==sub.CategoryId))
  });

  const filteredProduct = products?.find((prod) => generateSlug(prod.title) === ChangedProductUrl(product as string),
  );

  if (subLoading || prodLoading) {
    return <PageSkelton />;
  }


  return (
    <>
      {filteredSubCategory ? (
        <>
          <CategoryPage
            title={`${filteredSubCategory.title}`}
            relatedProducts={filteredSubCategory?.products || []}
          />
        </>
      ) : (
        <ProductDetailPage title={`${filteredProduct?.title}`} />
      )}
      <VideoAutomation />
    </>
  );
};

export default CommercialPage;
