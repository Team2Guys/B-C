'use client';
import NotFound from 'app/not-found';
import ProductDetailPage from 'components/ProductDetailPage/ProductDetailPage';
import CommercialByRoom from 'components/RoomProducts/commercial-by-room';
import { generateSlug } from 'data/data';
import { ChangedProductUrl, CommercialUrl, urls } from 'data/urls';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ICategory, IProduct } from 'types/types';

const CommercialProduct = ({product , products  , subCategories}: {product: string, products: IProduct[] , subCategories: ICategory[]}) => {
  const [isNotFound, setIsNotFound] = useState(false);
  const path = usePathname();

  const router = useRouter();



useEffect(() => {
  const Redirectedhandler =()=>{
    const redirected_product = CommercialUrl.find(
      (prod: { urlName: string; Redirect: string }) => {
        return prod.urlName == String(product)?.toLowerCase();
      },
    );
  
    if (redirected_product) {
      router.push(redirected_product.Redirect);
    }
  }


Redirectedhandler()
}, [product])

 
  const filteredSubCategory = subCategories?.find(
    (sub) => generateSlug(sub.title) === ChangedProductUrl(product as string),
  );

  const filteredProduct = products?.find(
    (prod) =>
      generateSlug(prod.title) ===
      generateSlug(ChangedProductUrl(product as string)),
  );

  useEffect(() => {
    if (path) {
      const matchingUrl = urls.find((url) => url.errorUrl === path);
      console.log(path, 'pathnamepathname');
      if (matchingUrl) {
        console.log(matchingUrl, 'matchingUrl');
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    }
  }, [path]);

  if (isNotFound || (!filteredProduct && !filteredSubCategory)) {
    return <NotFound />;
  }
  return (
    <>
      {filteredSubCategory ? (
        <>
          <CommercialByRoom
            title={`${filteredSubCategory.title}`}
            description={`${filteredSubCategory.description}`}
            category={`${filteredSubCategory.category.title}`}
            relatedProducts={filteredSubCategory?.products || []}
            filteredSubCategory={filteredSubCategory}
          />
        </>
      ) : (
        <ProductDetailPage
          title={`${filteredProduct?.title}`}
          allprod={products}
        />
      )}
    </>
  );
};

export default CommercialProduct;
