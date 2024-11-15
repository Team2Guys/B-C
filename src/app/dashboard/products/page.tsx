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
    id: editProduct?.id,
    name: editProduct?.title,
    description: editProduct?.description,
    salePrice: editProduct?.price ? editProduct?.price : editProduct?.salePrice,
    discountPrice: editProduct?.discountPrice,
    code: editProduct && editProduct.code,
    category: editProduct && editProduct?.CategoryId,
    subCategory: editProduct && editProduct?.subCategory,
    Meta_Title: editProduct && editProduct?.Meta_Title,
    Canonical_Tag: editProduct && editProduct?.Canonical_Tag,
    Meta_Description: editProduct && editProduct?.Meta_description,
    Images_Alt_Text: editProduct && editProduct?.Images_Alt_Text,
    modelDetails: editProduct && editProduct?.modelDetails,
    colors: editProduct?.colors,
    spacification: editProduct?.spacification,
    sizes: editProduct && editProduct?.sizes,
    starRating: editProduct && editProduct.starRating,
    reviews: editProduct && editProduct.starRating,
    posterImage: editProduct && editProduct.posterImage,
    hoverImage: editProduct && editProduct.hoverImage,
    imageUrls: editProduct && editProduct.imageUrls,
    additionalInformation: editProduct && editProduct.additionalInformation,
    product_type: editProduct && editProduct.product_type,
    short_description: editProduct && editProduct.short_description,

  };
  let productFlag: boolean = selecteMenu === 'Add All Products' ? true : false;

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
          EditInitialValues={EditInitialValues}
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
