'use client';
import { useQuery } from '@tanstack/react-query';
import NotFound from 'app/not-found';
import CategoryPage from 'components/CategoryPage/CategoryPage';
import ProductDetailPage from 'components/ProductDetailPage/ProductDetailPage';
import RoomProducts from 'components/RoomProducts/room-product';
import PageSkelton from 'components/Skeleton/PageSkelton';
import { fetchProducts, fetchSubCategories } from 'config/fetch';
import { generateSlug } from 'data/data';
import { ChangedProductUrl, CommercialUrl, urls } from 'data/urls';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ICategory, IProduct } from 'types/types';

const CommercialPage = () => {
  const { product } = useParams();
  const path = usePathname();
  const [isNotFound, setIsNotFound] = useState(false);
  const router = useRouter()

  const { data: subCategories, isLoading: subLoading } = useQuery<ICategory[]>({
    queryKey: ['sub-categories'],
    queryFn: fetchSubCategories,
  });

  const Cateories = [2];

  const { data: products, isLoading: prodLoading } = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

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
  if (isNotFound) {
    return <NotFound />;
  }

  const redirected_product = CommercialUrl.find((prod:{urlName:string, Redirect: string})=>{
    return( prod.urlName == String(product)?.toLowerCase())
      })
    
      if(redirected_product){
        router.push(redirected_product.Redirect);
      }


  const filteredSubCategory = subCategories?.find((sub) => {
    let title = ChangedProductUrl(product as string);
    console.log(title, "filteredSubCategory")
    let sub_ = generateSlug(sub.title)
    let title_flag = title == generateSlug(sub.title);
    console.log(title_flag, "filteredSubCategory", sub_)
    return (
      title_flag && Cateories.some((item: number) => item == sub.CategoryId)
    );
  });

  const filteredProduct = products?.find(
    (prod) =>
      generateSlug(prod.title) === ChangedProductUrl(product as string) &&
      Cateories.some((item: number) => item == prod.CategoryId),
  );


  if (subLoading || prodLoading) {
    return <PageSkelton />;
  }

  console.log(filteredSubCategory, "filteredSubCategory")

  if (!filteredSubCategory && !filteredProduct) {
    return <NotFound />;
  }

  console.log(filteredSubCategory, "filteredSubCategory")
  return (
    <>
      {filteredSubCategory ? (
        <>
          {filteredSubCategory.title === 'Roller Blinds' ? (
            <CategoryPage
              title={`${filteredSubCategory.title}`}
              relatedProducts={filteredSubCategory?.products || []}
            />
          ) : (
            <RoomProducts
              title={`${filteredSubCategory.title}`}
              description={`${filteredSubCategory.description}`}
              category={`${filteredSubCategory.category.title}`}
              relatedProducts={filteredSubCategory?.products || []}
            />
          )}
        </>
      ) : (
        <ProductDetailPage title={`${filteredProduct?.title}`} />
      )}
    </>
  );
};

export default CommercialPage;
