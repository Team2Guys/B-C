'use client';
import ProductDetail from 'components/ProductDetailPage/product-detail';
import RoomProducts from 'components/RoomProducts/room-product';
import Script from 'next/script';
import { PRODUCS_PROPS } from 'types/interfaces';

const CommercialPage = ({
  filteredProduct,
  filteredSubCategory,
  allprod,
  matchedSchema
}: PRODUCS_PROPS) => {

  return (
    <>
    {matchedSchema && (
        <Script type="application/ld+json" id="blinds-json-ld">
          {JSON.stringify(matchedSchema)}
        </Script>
      )}
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
          <ProductDetail 
          title={`${filteredProduct?.title}`}
          filterProduct={filteredProduct}/>

        // <ProductDetailPage
        //   title={filteredProduct?.title || ''}
        //   allprod={allprod}
        //   filterProduct={filteredProduct }
        // />
      )}
    </>
  );
};

export default CommercialPage;
