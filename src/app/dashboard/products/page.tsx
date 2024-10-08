'use client';

import Breadcrumb from 'components/Dashboard/Breadcrumbs/Breadcrumb';
import FormElements from 'components/Dashboard/FormElements';
import DefaultLayout from 'components/Dashboard/Layouts/DefaultLayout';
import ViewProduct from 'components/Dashboard/Tables/ViewProduct';
import ProtectedRoute from 'hooks/AuthHookAdmin';
import { useEffect, useState } from 'react';

const Products = () => {
  const [editProduct, setEditProduct] = useState<any | undefined>();
  const [products, setProducts] = useState<any[]>();

  const [productloading, setProductloading] = useState<boolean>(false);
  const [selecteMenu, setselecteMenu] = useState<string>('Add All Products');

  useEffect(() => {
    const productHandler = async () => {
      try {
        setProductloading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/GetAllProducts`,
        );
        const allProducts = await response.json();
        setProducts(allProducts);
        setProductloading(false);
      } catch (err) {
        console.log('error Occured');
        setProductloading(false);
      }
    };
    productHandler();
  }, [selecteMenu]);

  const EditInitialValues: any = {
    title: editProduct?.title,
    description: editProduct?.description,
    price: editProduct?.price,
    colors: editProduct?.colors,
    modelDetails: editProduct?.modelDetails,
    spacification: editProduct?.spacification,
    discountPrice: editProduct?.discountPrice,
    category: editProduct && editProduct?.category,
    sizes: editProduct && editProduct?.sizes,
    starRating: editProduct && editProduct.starRating,
    reviews: editProduct && editProduct.starRating,
    code: editProduct && editProduct.code,
    salePrice: editProduct && editProduct.salePrice,

    purchasePrice: editProduct && editProduct.purchasePrice,
    additionalInformation: editProduct && editProduct.additionalInformation,
    product_type: editProduct && editProduct.product_type,
  };

  let productFlag: boolean = selecteMenu === 'Add All Products' ? true : false;
  
  useEffect(() => {
    console.log('Edit product triggered from parent');
    console.log(editProduct);
  }, [editProduct]);
  return (
    <DefaultLayout>
      <Breadcrumb pageName={productFlag ? 'Products' : 'Add Products'} />
      {productFlag ? (
        <ViewProduct
          Categories={products}
          setCategory={setProducts}
          setselecteMenu={setselecteMenu}
          loading={productloading}
          setEditProduct={setEditProduct}
        />
      ) : (
        <FormElements
          setselecteMenu={setselecteMenu}
          EditInitialValues={editProduct}
          setEditProduct={setEditProduct}
          EditProductValue={
            EditInitialValues &&
            (EditInitialValues.name !== undefined ||
              EditInitialValues.category !== undefined)
              ? EditInitialValues
              : undefined
          }
        />
      )}
    </DefaultLayout>
  );
};

export default ProtectedRoute(Products);
