'use client';
import { useQuery } from '@tanstack/react-query';
import NotFound from 'app/not-found';
import ProductDetailPage from 'components/ProductDetailPage/ProductDetailPage';
import CommercialByRoom from 'components/RoomProducts/commercial-by-room';
import PageSkelton from 'components/Skeleton/PageSkelton';
import { fetchProducts, fetchSubCategories } from 'config/fetch';
import { generateSlug } from 'data/data';
import { ChangedProductUrl, CommercialUrl, urls } from 'data/urls';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ICategory, IProduct } from 'types/types';


const CommercialPage = () => {
  const { product } = useParams();
  const [isNotFound, setIsNotFound] = useState(false);
  const path = usePathname();


const router =   useRouter();
  const { data: subCategories, isLoading: subLoading } = useQuery<ICategory[]>({
    queryKey: ['sub-categories'],
    queryFn: fetchSubCategories,
  });

  const { data: products, isLoading: prodLoading } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
  
  const redirected_product = CommercialUrl.find((prod:{urlName:string, Redirect: string})=>{
    return( prod.urlName == String(product)?.toLowerCase())
      })
    
    
    
      if(redirected_product){
        router.push(redirected_product.Redirect);
      }
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
      console.log(path,"pathnamepathname")
      if (matchingUrl) {
        console.log(matchingUrl, "matchingUrl");
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    }
  }, [path]);


  if (subLoading || prodLoading) {
    return <PageSkelton />;
  }

  if (isNotFound || (!filteredProduct && !filteredSubCategory)) {
    return <NotFound />;
  }

  console.log(filteredProduct, "filteredProduct"
  )
  return (
    <>
      {filteredSubCategory ? (
        <>
          <CommercialByRoom
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
