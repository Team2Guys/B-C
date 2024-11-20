'use client';

import { useQuery } from '@tanstack/react-query';
import CategoryPage from 'components/CategoryPage/CategoryPage';
import ProductDetailPage from 'components/ProductDetailPage/ProductDetailPage';
import PageSkelton from 'components/Skeleton/PageSkelton';
import ProductSkeleton from 'components/Skeleton/ProductSkeleton';
import { fetchProducts, fetchSubCategories } from 'config/fetch';
import { Cateories, generateSlug } from 'data/data';
import { useParams } from 'next/navigation';
import { ICategory, ISUBCATEGORY, IProduct } from 'types/types';

const CommercialPage = () => {
  const { product } = useParams();

  const { data: subCategories, isLoading: subLoading } = useQuery<ICategory[]>({
    queryKey: ['sub-categories'],
    queryFn: fetchSubCategories,
  });

  const { data: products, isLoading: prodLoading } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
  const filteredSubCategory = subCategories?.find((sub) => (generateSlug(sub.title) === product) && (Cateories.some((item:number)=>item ==sub.CategoryId)));

  const filteredProduct = products?.find((prod) => generateSlug(prod.title) === product,
  );

  console.log(filteredSubCategory, "filteredSubCategory")

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
    </>
  );
};

export default CommercialPage;
