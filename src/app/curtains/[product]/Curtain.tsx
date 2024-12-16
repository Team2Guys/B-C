'use client';
import NotFound from 'app/not-found';
import ProductDetailPage from 'components/ProductDetailPage/ProductDetailPage';
import RoomProducts from 'components/RoomProducts/room-product';
import {CommercialUrl, urls } from 'data/urls';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PRODUCS_PROPS } from 'types/interfaces';
const CommercialPage = ({filteredProduct, filteredSubCategory,product}:PRODUCS_PROPS) => {
  
  const path = usePathname();
  const [isNotFound, setIsNotFound] = useState(false);
  const router = useRouter()
;

  const redirected_product = CommercialUrl.find((prod:{urlName:string, Redirect: string})=>{
    return( prod.urlName == String(product)?.toLowerCase())
      })
    
      if(redirected_product){
        router.push(redirected_product.Redirect);
      }



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
  if (isNotFound || (!filteredSubCategory && !filteredProduct) ) {
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
            relatedProducts={filteredSubCategory?.products || []}
          /> */}
        </>
      ) : (
        <ProductDetailPage title={`${filteredProduct?.title}`} />
      )}
    </>
  );
};

export default CommercialPage;
