'use client';
import NotFound from 'app/not-found';
import CategoryPage from 'components/CategoryPage/CategoryPage';
import ProductDetailPage from 'components/ProductDetailPage/ProductDetailPage';
import RoomProducts from 'components/RoomProducts/room-product';
import {urls } from 'data/urls';
import { usePathname} from 'next/navigation';
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
  console.log(product, "produc")

  useEffect(() => {
    if (path) {
      const matchingUrl = urls.find((url) => url.errorUrl === path);
      setIsNotFound(matchingUrl ? true : false);
    }
  }, [path]);

  if (isNotFound) {
    return <NotFound />;
  }

  if (!filteredSubCategory && !filteredProduct) {
    return <NotFound />;
  }

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
              filteredSubCategory={filteredSubCategory}
            />
          )}
        </>
      ) : (
        <ProductDetailPage
          title={`${filteredProduct?.title}`}
          allprod={allprod}
        />
      )}
    </>
  );
};

export default CommercialPage;
