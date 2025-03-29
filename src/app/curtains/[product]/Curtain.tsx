'use client';
import ProductDetailPage from 'components/ProductDetailPage/ProductDetailPage';
import RoomProducts from 'components/RoomProducts/room-product';
import { PRODUCS_PROPS } from 'types/interfaces';

const CommercialPage = ({
  filteredProduct,
  filteredSubCategory,
  allprod,
}: PRODUCS_PROPS) => {

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
            products={allprod}

          />

        </>
      ) : (
        <ProductDetailPage
          title={filteredProduct?.title || ''}
          allprod={allprod}
          filterProduct={filteredProduct }
        />
      )}
    </>
  );
};

export default CommercialPage;
