'use client';
import { useQuery } from '@tanstack/react-query';
import NotFound from 'app/not-found';
import ProductDetailPage from 'components/ProductDetailPage/ProductDetailPage';
import RoomProducts from 'components/RoomProducts/room-product';
import PageSkelton from 'components/Skeleton/PageSkelton';
import { fetchProducts, fetchSubCategories } from 'config/fetch';
import { generateSlug } from 'data/data';
import { ChangedProductUrl, urls } from 'data/urls';
import { useParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ICategory, IProduct } from 'types/types';

const Page = () => {
  const { subproduct } = useParams();
  const path = usePathname()
  const [isNotFound, setIsNotFound] = useState(false);

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
  useEffect(() => {
    if (path) {
      const matchingUrl = urls.find((url) => url.errorUrl === path);
      console.log(path,"pathnamepathname")
      if (matchingUrl) {
        console.log(matchingUrl, "matchingUrl");
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    }
  }, [path]);
  if (isNotFound) {
    return <NotFound />;
  }


  const filteredProduct = products?.find(
    (prod) => generateSlug(prod.title) === ChangedProductUrl(subproduct as string) && Cateories.some((item: number) => item == prod.CategoryId),
  );

  if (subLoading || prodLoading) {
    return <PageSkelton />;
  }
  if (!filteredSubCategory && !filteredProduct || isNotFound) {
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
