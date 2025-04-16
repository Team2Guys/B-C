import ProductDetailPage from 'components/ProductDetailPage/ProductDetailPage';
import RoomProducts from 'components/RoomProducts/room-product';
import { IProduct } from 'types/types';

interface ISubProduct { products: IProduct[],
    filteredProduct: IProduct | undefined, 
    filteredSubCategory: any
   }


const SubProduct = ({ products, filteredProduct, filteredSubCategory }:ISubProduct ) => {
console.log(filteredSubCategory, "filteredSubCategory")
  return (
    <>
      {filteredSubCategory ? (
        <>
          <RoomProducts
            title={`${filteredSubCategory.title}`}
            description={`${filteredSubCategory.description}`}
            category={`${filteredSubCategory.category.title}`}
            relatedProducts={filteredSubCategory?.products || []}
            products={products}
       
          />

        </>
      ) : (
        <ProductDetailPage
          title={`${filteredProduct?.title}`}
          allprod={products}
          filterProduct={filteredProduct}
        />
      )}
    </>
  );
};

export default SubProduct;
