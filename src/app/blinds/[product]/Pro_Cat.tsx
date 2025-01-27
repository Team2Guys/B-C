'use client';
import CategoryPage from 'components/CategoryPage/CategoryPage';
import ProductDetailPage from 'components/ProductDetailPage/ProductDetailPage';
import RoomProducts from 'components/RoomProducts/room-product';
import { PRODUCS_PROPS } from 'types/interfaces';

const CommercialPage = ({
  filteredProduct,
  filteredSubCategory,
  allprod,
  categories,
  subCategories
}: PRODUCS_PROPS) => {

  return (
    <>
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
        <ProductDetailPage
          title={`${filteredProduct?.title}`}
          allprod={allprod}
          filterProduct={filteredProduct}
        />
      )}
    </>
  );
};

export default CommercialPage;
