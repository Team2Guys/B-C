'use client';

import NotFound from 'app/not-found';
import ShuttersByColor from 'components/ByColor/ShuttersByColor';
import ProductDetailPage from 'components/ProductDetailPage/ProductDetailPage';
import RoomProducts from 'components/RoomProducts/room-product';
import {  colorData } from 'data/data';
import {CommercialUrl, urls } from 'data/urls';
import {usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IColorData, PRODUCS_PROPS } from 'types/interfaces';

const CommercialPage = ({filteredProduct, filteredSubCategory,product}:PRODUCS_PROPS) => {
  const [colorPage, setColorPage] = useState<IColorData | undefined>();

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


  const redirected_product = CommercialUrl.find((prod:{urlName:string, Redirect: string})=>{
    return( prod.urlName == String(product)?.toLowerCase())
      })

  if(redirected_product){
    router.push(redirected_product.Redirect);
  }

  
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
        ) : filteredProduct && (
          <ProductDetailPage title={`${filteredProduct?.title}`} />
        )
      ) : (
        <ShuttersByColor title={colorPage.name} subCategory={`${filteredSubCategory?.title}`} />
      )}
    </>
  );
};

export default CommercialPage;
