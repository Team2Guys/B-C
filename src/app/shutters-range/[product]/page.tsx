'use client';

import { useQuery } from '@tanstack/react-query';
import NotFound from 'app/not-found';
import ShuttersByColor from 'components/ByColor/ShuttersByColor';
import CategoryPage from 'components/CategoryPage/CategoryPage';
import ProductDetailPage from 'components/ProductDetailPage/ProductDetailPage';
import RoomProducts from 'components/RoomProducts/room-product';
import PageSkelton from 'components/Skeleton/PageSkelton';
import ProductSkeleton from 'components/Skeleton/ProductSkeleton';
import { fetchProducts, fetchSubCategories } from 'config/fetch';
import { Cateories, colorData, generateSlug } from 'data/data';
import { ChangedProductUrl, urls } from 'data/urls';
import { useParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IColorData } from 'types/interfaces';
import { ICategory, ISUBCATEGORY, IProduct } from 'types/types';

const CommercialPage = () => {
  const [colorPage, setColorPage] = useState<IColorData | undefined>();
  // const [colorPageLoading, setColorPageLoading] = useState<boolean>(false);
  const { product } = useParams();
  const pathname = usePathname();

  useEffect(() => {
    setColorPage(undefined);
    if (pathname) {
      const matchingColorShutter = colorData.find(
        (clr) => clr.url === pathname,
      );
      if (matchingColorShutter) {
        setColorPage(matchingColorShutter);
      }
    }
  }, [pathname]);

  const Cateories = [9];
  const { data: subCategories, isLoading: subLoading } = useQuery<ICategory[]>({
    queryKey: ['sub-categories'],
    queryFn: fetchSubCategories,
  });

  const { data: products, isLoading: prodLoading } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const filteredSubCategory = subCategories?.find(
    (sub) =>
      generateSlug(sub.title) === ChangedProductUrl(product as string) &&
      Cateories.some((item: number) => item == sub.CategoryId),
  );

  const filteredProduct = products?.find(
    (prod) =>
      generateSlug(prod.title) ===
      generateSlug(ChangedProductUrl(product as string)),
  );

  if (subLoading || prodLoading) {
    return <PageSkelton />;
  }
  if (!filteredSubCategory && !filteredProduct && !colorPage) {
    return <NotFound />;
  }

  return (
    <>
      {!colorPage ? (
        filteredSubCategory ? (
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
        )
      ) : (
        <ShuttersByColor title={colorPage.name} />
      )}
    </>
  );
};

export default CommercialPage;
