'use client';

import { useQuery } from '@tanstack/react-query';
import NotFound from 'app/not-found';
import ShuttersByColor from 'components/ByColor/ShuttersByColor';
import ProductDetailPage from 'components/ProductDetailPage/ProductDetailPage';
import RoomProducts from 'components/RoomProducts/room-product';
import PageSkelton from 'components/Skeleton/PageSkelton';
import { fetchProducts, fetchSubCategories } from 'config/fetch';
import {  colorData, generateSlug } from 'data/data';
import { ChangedProductUrl, CommercialUrl, urls } from 'data/urls';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IColorData } from 'types/interfaces';
import { ICategory, IProduct } from 'types/types';

const CommercialPage = () => {
  const [colorPage, setColorPage] = useState<IColorData | undefined>();
  // const [colorPageLoading, setColorPageLoading] = useState<boolean>(false);
  const { product } = useParams();
  const pathname = usePathname();
  const [isNotFound, setIsNotFound] = useState(false);
  const router =   useRouter();

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
  
  useEffect(() => {
    if (pathname) {
      const matchingUrl = urls.find((url) => url.errorUrl === pathname);
      console.log(pathname,"pathnamepathname")
      if (matchingUrl) {
        console.log(matchingUrl, "matchingUrl");
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    }
  }, [pathname]);
  if (isNotFound) {
    return <NotFound />;
  }

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
