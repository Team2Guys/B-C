"use client"
import ProductDetail from 'components/ProductDetailPage/product-detail';
import { IProduct } from 'types/types';

interface ISubProduct { 
    filteredProduct: IProduct | undefined,
   }


const SubProduct = ({ filteredProduct }:ISubProduct ) => {
  return (
    <>
      <ProductDetail 
          title={`${filteredProduct?.title}`}
          filterProduct={filteredProduct}/>
    </>
  );
};

export default SubProduct;
