'use client';

import { useQuery } from '@tanstack/react-query';
import ProductDetailPage from 'components/ProductDetailPage/ProductDetailPage';
import RoomProducts from 'components/RoomProducts/room-product';
import PageSkelton from 'components/Skeleton/PageSkelton';
import { fetchProducts, fetchSubCategories } from 'config/fetch';
import { generateSlug } from 'data/data';
import { ChangedProductUrl } from 'data/urls';
import { useParams } from 'next/navigation';
import { ICategory, IProduct } from 'types/types';

const Page = () => {
  const { subproduct } = useParams();

  const { data: subCategories, isLoading: subLoading } = useQuery<ICategory[]>({
    queryKey: ['sub-categories'],
    queryFn: fetchSubCategories,
  });

  const { data: products, isLoading: prodLoading } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const filteredSubCategory = subCategories?.find((sub) => generateSlug(sub.title) === ChangedProductUrl(subproduct as string));

  const relatedProducts = products?.filter((prod) => prod.SubCategoryId === filteredSubCategory?.id,
  );

  console.log(subproduct, "subproduct")

  const filteredProduct = products?.find((prod) => generateSlug(prod.title) === ChangedProductUrl(subproduct as string));

  if (subLoading || prodLoading) {
    return <PageSkelton />;
  }

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
          {/* <CategoryPage
            title={`${filteredSubCategory.title}`}
            relatedProducts={relatedProducts || []}
          /> */}
        </>
      ) : (
        <ProductDetailPage title={`${filteredProduct?.title}`} />
      )}

{/* {filteredSubCategory  ? "": 
            <>
            <VideoAutomation />
            <Container>
              <Support/>
            </Container>
            </>
            } */}
    </>
  );
};

export default Page;
