'use client';

import { useQuery } from '@tanstack/react-query';
import CategoryPage from 'components/CategoryPage/CategoryPage';
import ProductSkeleton from 'components/Skeleton/ProductSkeleton';
import { fetchProducts, fetchSubCategories } from 'config/fetch';
import { generateSlug } from 'data/data';
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

  const filteredSubCategory = subCategories?.find(
    (sub) => generateSlug(sub.title) === product,
  );

  const relatedProducts = products?.filter(
    (prod) => prod.SubCategoryId === filteredSubCategory?.id,
  );
  console.log('-___-___-______-- ____ ');
  console.log(relatedProducts);

  const filteredProduct = products?.find(
    (prod) => generateSlug(prod.title) === product,
  );

  if (subLoading || prodLoading) {
    return <ProductSkeleton />;
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
        <div>Render Product Page: {filteredProduct?.title}</div>
      )}
    </>
  );
};

export default CommercialPage;
