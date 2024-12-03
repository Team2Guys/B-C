'use client';

import { useQuery } from '@tanstack/react-query';
import NotFound from 'app/not-found';
import CategoryPage from 'components/CategoryPage/CategoryPage';
import ProductDetailPage from 'components/ProductDetailPage/ProductDetailPage';
import Container from 'components/Res-usable/Container/Container';
import Support from 'components/Res-usable/support/support';
import RoomProducts from 'components/RoomProducts/room-product';
import PageSkelton from 'components/Skeleton/PageSkelton';
import ProductSkeleton from 'components/Skeleton/ProductSkeleton';
import VideoAutomation from 'components/video-Automation/video-Automation';
import { fetchProducts, fetchSubCategories } from 'config/fetch';
import { generateSlug } from 'data/data';
import { ChangedProductUrl } from 'data/urls';
import { useParams } from 'next/navigation';
import { ICategory, ISUBCATEGORY, IProduct } from 'types/types';

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
  const Cateories = [2];

  const filteredSubCategory = subCategories?.find((sub) => {
    let title = ChangedProductUrl(subproduct as string);
    let title_flag = title === generateSlug(sub.title);
    return (
      title_flag && Cateories.some((item: number) => item == sub.CategoryId)
    );
  });

  const relatedProducts = products?.filter(
    (prod) => prod.SubCategoryId === filteredSubCategory?.id,
  );

  console.log(subproduct, 'subproduct');
  const filteredProduct = products?.find(
    (prod) =>
      generateSlug(prod.title) === ChangedProductUrl(subproduct as string) &&
      Cateories.some((item: number) => item == prod.CategoryId),
  );

  if (subLoading || prodLoading) {
    return <PageSkelton />;
  }
  if (!filteredSubCategory && !filteredProduct) {
    return <NotFound />;
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
