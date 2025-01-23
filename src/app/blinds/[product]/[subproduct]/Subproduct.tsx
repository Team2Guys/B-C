'use client';
import ProductDetailPage from 'components/ProductDetailPage/ProductDetailPage';
import RoomProducts from 'components/RoomProducts/room-product';
import { Fragment } from 'react';
import { ICategory, IProduct } from 'types/types';

const SubProduct = ({ products, categories, subCategories, filteredProduct, filteredSubCategory }: { products: IProduct[], subCategories: ICategory[], categories:ICategory[], filteredProduct: IProduct | undefined, filteredSubCategory: any }) => {

  return (
    <>
      {filteredSubCategory ? (
        <Fragment>
          <RoomProducts
            title={`${filteredSubCategory.title}`}
            description={`${filteredSubCategory.description}`}
            category={`${filteredSubCategory.category.title}`}
            relatedProducts={filteredSubCategory?.products || []}
            products={products}
            categories={categories || []}
            subCategories={subCategories || []}
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
          categories={categories || []}
        />
      )}
    </>
  );
};

export default SubProduct;
