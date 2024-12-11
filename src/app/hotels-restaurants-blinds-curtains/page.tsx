'use client';

import { useQuery } from '@tanstack/react-query';
import CategoryPage from 'components/CategoryPage/CategoryPage';
import ProductDetailPage from 'components/ProductDetailPage/ProductDetailPage';
import PageSkelton from 'components/Skeleton/PageSkelton';
import { fetchProducts, fetchSubCategories } from 'config/fetch';
import { generateSlug } from 'data/data';
import { usePathname } from 'next/navigation';
import { ICategory, IProduct } from 'types/types';

const CommercialPage = () => {
  const path = usePathname();
  const { data: subCategories, isLoading: subLoading } = useQuery<ICategory[]>({
    queryKey: ['sub-categories'],
    queryFn: fetchSubCategories,
  });

  const { data: products, isLoading: prodLoading } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const filteredSubCategory = subCategories?.find(
    (sub) => generateSlug(sub.title) === path,
  );

  const relatedProducts = products?.filter(
    (prod) => prod.SubCategoryId === filteredSubCategory?.id,
  );

  const filteredProduct = products?.find(
    (prod) => generateSlug(prod.title) === generateSlug(path),
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
          <CategoryPage
            title={`${filteredSubCategory.title}`}
            relatedProducts={relatedProducts || []}
          />
        </>
      ) : (
        <ProductDetailPage title={`${filteredProduct?.title}`} />
      )}
    </>
  );
};

export default CommercialPage;
