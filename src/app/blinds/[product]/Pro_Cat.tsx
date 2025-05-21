'use client';
import CategoryPage from 'components/CategoryPage/CategoryPage';
import ProductDetail from 'components/ProductDetailPage/product-detail';
import RoomProducts from 'components/RoomProducts/room-product';
import Script from 'next/script';
import { PRODUCS_PROPS } from 'types/interfaces';

const CommercialPage = ({
  filteredProduct,
  filteredSubCategory,
  allprod,
  categories,
  subCategories,
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
          {filteredSubCategory.title === 'Roller Blinds' ? (
            <CategoryPage
              title={`${filteredSubCategory.title}`}
              relatedProducts={filteredSubCategory?.products || []}
              products={allprod}
              categories={categories || []}
              subCategories={subCategories || []}
            />
          ) : (
            <RoomProducts
              title={`${filteredSubCategory.title}`}
              description={`${filteredSubCategory.description}`}
              category={`${filteredSubCategory.category.title}`}
              relatedProducts={filteredSubCategory?.products || []}
              filteredSubCategory={filteredSubCategory}
              products={allprod}
  
            />
          )}
        </>
      ) : (
        <>
        <ProductDetail 
          title={`${filteredProduct?.title}`}
          filterProduct={filteredProduct}/>

        {/* <ProductDetailPage
          title={`${filteredProduct?.title}`}
          allprod={allprod}
          filterProduct={filteredProduct}
        /> */}
        </>
      )}
    </>
  );
};

export default CommercialPage;
