'use client';
import { useQuery } from '@tanstack/react-query';
import NotFound from 'app/not-found';
import CommercialByRoom from 'components/RoomProducts/commercial-by-room';
import PageSkelton from 'components/Skeleton/PageSkelton';
import { fetchSubCategories } from 'config/fetch';
import {  CommercialUrl, urls } from 'data/urls';
import {  usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ICategory } from 'types/types';


const CommercialPage = () => {
  const [isNotFound, setIsNotFound] = useState(false);
  const path = usePathname();
  let product = "Balcony"
 

const router =   useRouter();
  const { data: subCategories, isLoading: subLoading } = useQuery<ICategory[]>({
    queryKey: ['sub-categories'],
    queryFn: fetchSubCategories,
  });
  
  const redirected_product = CommercialUrl.find((prod:{urlName:string, Redirect: string})=>{
    return( prod.urlName == String(product)?.toLowerCase())
      })
    
      if(redirected_product){
        router.push(redirected_product.Redirect);
      }


  const filteredSubCategory = subCategories?.find((sub) => sub.title === product,
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


  if (subLoading) {
    return <PageSkelton />;
  }

  if (isNotFound || (!filteredSubCategory)) {
    return <NotFound />;
  }

  return (
    <>

          <CommercialByRoom
            title={`${filteredSubCategory?.title}`}
            description={`${filteredSubCategory?.description}`}
            category={`${filteredSubCategory?.category.title}`}
            relatedProducts={filteredSubCategory?.products || []}
          />
         
    </>
  );
};

export default CommercialPage;
