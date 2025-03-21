'use client';

import ShuttersByColor from 'components/ByColor/ShuttersByColor';
import ProductDetailPage from 'components/ProductDetailPage/ProductDetailPage';
import RoomProducts from 'components/RoomProducts/room-product';
import { PRODUCS_PROPS } from 'types/interfaces';

const CommercialPage = ({
  filteredProduct,
  filteredSubCategory,
  allprod,
  colorPage
}: PRODUCS_PROPS) => {


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
              filteredSubCategory={filteredSubCategory}
              products={allprod}
            />
          </>
        ) : (
          filteredProduct && (
            <ProductDetailPage
              title={`${filteredProduct?.title}`}
              allprod={allprod}
              filterProduct={filteredProduct}
            />
          )
        )
      ) : (
        <ShuttersByColor
          title={colorPage.name}
          subCategory={filteredSubCategory}
          products={allprod}
        />
      )}
    </>
  );
};

export default CommercialPage;
