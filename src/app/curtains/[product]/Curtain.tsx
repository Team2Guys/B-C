'use client';
import NotFound from 'app/not-found';
import ProductDetailPage from 'components/ProductDetailPage/ProductDetailPage';
import RoomProducts from 'components/RoomProducts/room-product';
import { urls } from 'data/urls';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PRODUCS_PROPS } from 'types/interfaces';

const CommercialPage = ({
  filteredProduct,
  filteredSubCategory,
  product,
  allprod,
}: PRODUCS_PROPS) => {
  const path = usePathname();
  const [isNotFound, setIsNotFound] = useState(false);
 console.log(product, "product")
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
  if (isNotFound || (!filteredSubCategory && !filteredProduct)) {
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
            filteredSubCategory={filteredSubCategory}
            relatedProducts={filteredSubCategory?.products || []}
          />
          {/* <CategoryPage
            title={`${filteredSubCategory.title}`}
            relatedProducts={filteredSubCategory?.products || []}
          /> */}
        </>
      ) : (
        <ProductDetailPage
          title={filteredProduct?.title || ''}
          allprod={allprod}
        />
      )}
    </>
  );
};

export default CommercialPage;
