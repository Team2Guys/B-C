'use client';
import NotFound from 'app/not-found';
import ProductDetailPage from 'components/ProductDetailPage/ProductDetailPage';
import RoomProducts from 'components/RoomProducts/room-product';
import { urls } from 'data/urls';
import { usePathname } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import { IProduct } from 'types/types';

const SubProduct = ({products , filteredProduct , filteredSubCategory }: {products: IProduct[] , filteredProduct: IProduct | undefined , filteredSubCategory : any}) => {
  const path = usePathname();
  const [isNotFound, setIsNotFound] = useState(false);
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

  if ((!filteredSubCategory && !filteredProduct) || isNotFound) {
    return <NotFound />;
  }

  return (
    <>
      {filteredSubCategory ? (
        <Fragment>
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
        </Fragment>
      ) : (
        <ProductDetailPage
          title={`${filteredProduct?.title}`}
          allprod={products}
        />
      )}
    </>
  );
};

export default SubProduct;
