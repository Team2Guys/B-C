'use client';
import { useQuery } from '@tanstack/react-query';
import CategoryPage from 'components/CategoryPage/CategoryPage';
import ProductDetailPage from 'components/ProductDetailPage/ProductDetailPage';
import RoomProducts from 'components/RoomProducts/room-product';
import PageSkelton from 'components/Skeleton/PageSkelton';
import { fetchProducts, fetchSubCategories } from 'config/fetch';
import { generateSlug } from 'data/data';
import { useParams } from 'next/navigation';
import { ICategory, IProduct } from 'types/types';

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

  const filteredProduct = products?.find(
    (prod) => generateSlug(prod.title) === product,
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
          <RoomProducts
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
