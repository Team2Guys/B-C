'use client';

import React, { useState, useEffect } from 'react';
import {
  Formik,
  FieldArray,
  FormikErrors,
  Form,
  FormikTouched,
} from 'formik';

import Imageupload from 'components/ImageUpload/Imageupload';
import { RxCross2 } from 'react-icons/rx';
import Image from 'next/image';
import { ImageRemoveHandler } from 'utils/helperFunctions';
import { FormValues, ADDPRODUCTFORMPROPS } from 'types/interfaces';
import axios from 'axios';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Loader from 'components/Loader/Loader';
import Cookies from 'js-cookie';

import {
  AddProductvalidationSchema,
  AddproductsinitialValues,
} from 'data/data';
import { Checkbox } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { ICategory } from 'types/types';
import { fetchCategories, fetchSubCategories } from 'config/fetch';
import showToast from 'components/Toaster/Toaster';
import revalidateTag from 'components/ServerActons/ServerAction';

const FormElements: React.FC<ADDPRODUCTFORMPROPS> = ({
  EditInitialValues,
  setselecteMenu,
  setEditProduct,
}) => {
  const [imagesUrl, setImagesUrl] = useState<any[]>([]);
  const [posterimageUrl, setposterimageUrl] = useState<any[] | null>(EditInitialValues &&EditInitialValues.posterImage && [EditInitialValues.posterImage],);
  const [bannerImageUrl, setBannerImageUrl] = useState<any[] | null>(EditInitialValues && EditInitialValues.bannerImage && [EditInitialValues.bannerImage]);
  const [productUpdateFlat, setProductUpdateFlat] = useState(false);
  const [loading, setloading] = useState<boolean>(false);
  const [productInitialValue, setProductInitialValue] = useState<any | null | undefined>(EditInitialValues);

  const [imgError, setError] = useState<string | null | undefined>();

  const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>([]);
  const [selectedSubcategoryIds, setSelectedSubcategoryIds] = useState<number[]>([]);

  const [previousSelectedCategories, setpreviousSelectedCategories] = useState<number[]>([]);

  const token = Cookies.get('2guysAdminToken');
  const superAdminToken = Cookies.get('superAdminToken');
  let finalToken = token ? token : superAdminToken;

  useEffect(() => {
    const CategoryHandler = async () => {
      try {
        if (EditInitialValues.id === undefined) return;

        setProductUpdateFlat(true);
        const {
          posterImageUrl,
          imageUrls,
          _id,
          createdAt,
          updatedAt,
          __v,
          hoverImage,
          category,
          subCategory,
          ...EditInitialProductValues
        } = EditInitialValues as any;
        imageUrls ? setImagesUrl(imageUrls) : null;

        console.log(
          posterImageUrl,
          imageUrls,
          _id,
          createdAt,
          updatedAt,
          __v,
          hoverImage,
          category,
          subCategory,
          EditInitialProductValues,
        );
        console.log(EditInitialValues);
        if (category) {
          const catArr = [];
          catArr.push(category);
          setSelectedCategoryIds(catArr);
        }
        if (subCategory && Array.isArray(subCategory)) {
          const subcatArr = subCategory.map((cat: { id: number }) => cat.id);
          setSelectedSubcategoryIds(subcatArr);
          setpreviousSelectedCategories(subcatArr);
        }

        setProductInitialValue({
          ...EditInitialProductValues,
          name: EditInitialProductValues.title,
        });
      } catch (err) {
        console.log(err, 'err');
      }
    };

    CategoryHandler();
  }, [EditInitialValues]);

  const onSubmit = async (values: any, { resetForm }: any) => {
    console.log(values, 'valuesonsubmit');
    try {
      setError(null);
      let posterImageUrl = posterimageUrl && posterimageUrl[0];
      let bannerImage = bannerImageUrl && bannerImageUrl[0];
      if (!posterImageUrl || !(imagesUrl.length > 0)) {
        return showToast('warn', 'Please select relevant Images');
      }

      let newValues = {
        ...values,
        title: values.name,
        posterImage: posterImageUrl,
        bannerImage: bannerImage !== undefined ? bannerImage : null,
        imageUrls: imagesUrl,
        price: values.salePrice,
        Meta_description: values.Meta_Description,
      };

      setloading(true);
      let updateFlag = productUpdateFlat;

      let url = updateFlag
        ? `/api/products/edit_product/${EditInitialValues.id} `
        : '/api/products/AddProduct';

      const {
        categories,
        subcategories,
        code,
        modelDetails,
        purchasePrice,
        reviews,
        sizes,
        starRating,
        variantStockQuantities,
        discountPrice,
        totalStockQuantity,
        spacification,
        stock,
        salePrice,
        Meta_Description,
        hoverImage: newhoverImage,
        id,
        name,
        ...finalValues
      } = newValues;

      console.log(
        categories,
        subcategories,
        code,
        modelDetails,
        purchasePrice,
        reviews,
        sizes,
        starRating,
        variantStockQuantities,
        discountPrice,
        totalStockQuantity,
        spacification,
        stock,
        salePrice,
        Meta_Description,
        newhoverImage,
        id,
        name,
        finalValues,
      );

      let updatedvalue = {
        ...finalValues,
        category: { connect: { id: selectedCategoryIds[0] } },
      };

      if (selectedSubcategoryIds.length > 0) {
        updatedvalue = {
          ...updatedvalue,
          subCategory: updateFlag
            ? {
                set: selectedSubcategoryIds.map((id) => ({ id })),
              }
            : {
                connect: selectedSubcategoryIds.map((id) => ({ id })),
              },
        };
      } else if (updateFlag) {
        updatedvalue = {
          ...updatedvalue,
          subCategory: {
            disconnect: previousSelectedCategories.map((id) => ({ id })),
          },
        };
      }

      let method: 'post' | 'put' = updateFlag ? 'put' : 'post';
      await axios[method](
        `${process.env.NEXT_PUBLIC_BASE_URL}${url}`,
        updatedvalue,
        {
          headers: {
            authorization: `Bearer ${finalToken}`,
          },
        },
      );
      revalidateTag('products');

      showToast(
        'success',
        `Product has been successfully ${updateFlag ? 'updated!' : 'Addded'}`,
      );
      setProductInitialValue(AddproductsinitialValues);
      resetForm();
      setloading(false);
      setposterimageUrl(null);
      setBannerImageUrl(null);
      setposterimageUrl(null);
      setImagesUrl([]);
      setSelectedCategoryIds([]);
      setSelectedSubcategoryIds([]);

      updateFlag ? setEditProduct && setEditProduct(undefined) : null;
      setselecteMenu('Add All Products');
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred');
        }
      }
    } finally {
      setloading(false);
    }
  };

  const handleImageIndex = (index: number, newImageIndex: number) => {
    const updatedImagesUrl = imagesUrl.map((item, i) =>
      i === index ? { ...item, imageIndex: newImageIndex } : item,
    );
    setImagesUrl(updatedImagesUrl);
  };
  const handlealtText = (index: number, newaltText: string) => {
    const updatedImagesUrl = imagesUrl.map((item, i) =>
      i === index ? { ...item, altText: newaltText } : item,
    );
    setImagesUrl(updatedImagesUrl);
  };

  const handlealtTextposterimageUrl = (index: number, newaltText: string) => {
    //@ts-expect-error
    const updatedImagesUrl = posterimageUrl.map((item, i) =>
      i === index ? { ...item, altText: newaltText } : item,
    );
    setposterimageUrl(updatedImagesUrl);
  };

  const handlealtTextbannerImageUrl = (index: number, newaltText: string) => {
    //@ts-expect-error
    const updatedImagesUrl = bannerImageUrl.map((item, i) =>
      i === index ? { ...item, altText: newaltText } : item,
    );
    setBannerImageUrl(updatedImagesUrl);
  };

  const { data: categoriesList = [], isLoading } = useQuery<ICategory[], Error>(
    {
      queryKey: ['categories'],
      queryFn: fetchCategories,
    },
  );

  const { data: subCategoriesList = [] } = useQuery<ICategory[], Error>({
    queryKey: ['subcategories'],
    queryFn: fetchSubCategories,
  });

  const [filteredSubcategories, setFilteredSubcategories] = useState<ICategory[]>([]);


  
  useEffect(() => {
    const filteredSubcategories = subCategoriesList.filter((subcategory) =>
      selectedCategoryIds.includes(subcategory.CategoryId),
    );
    setFilteredSubcategories(filteredSubcategories);
  }, [selectedCategoryIds, categoriesList]);




  return (
    <>
      <p
        className="text-lg font-black mb-4 flex items-center justify-center gap-2 hover:bg-gray-200 w-fit p-2 cursor-pointer text-black dark:text-white"
        onClick={() => {
          setselecteMenu('Add All Products');
        }}
      >
        <IoMdArrowRoundBack /> Back
      </p>
      <Formik
        enableReinitialize
        initialValues={
          productInitialValue ? productInitialValue : AddproductsinitialValues
        }
        validationSchema={AddProductvalidationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form onSubmit={formik.handleSubmit}>
              <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                <div className="flex flex-col gap-9 dark:border-strokedark dark:bg-lightdark">
                  <div className="rounded-sm border border-stroke bg-white dark:border-strokedark dark:bg-lightdark p-6">
                    <div className="rounded-sm border border-stroke bg-white dark:border-strokedark dark:bg-lightdark">
                      <div className="border-b border-stroke py-4 px-4 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-white">
                          Poster Image
                        </h3>
                      </div>
                      {posterimageUrl && posterimageUrl?.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
                      
                            {posterimageUrl.map((item: any, index) => {
                              return (
                                <>
                                  <div
                                    className="relative group rounded-lg overflow-hidden shadow-md bg-white transform transition-transform duration-300 hover:scale-105"
                                    key={index}
                                  >
                                    <div className="absolute top-1 right-1 invisible group-hover:visible text-red bg-white rounded-full">
                                      <RxCross2
                                        className="cursor-pointer text-red-500 hover:text-red-700"
                                        size={17}
                                        onClick={() => {
                                          ImageRemoveHandler(
                                            item.public_id,
                                            setposterimageUrl,
                                          );
                                        }}
                                      />
                                    </div>
                                    <Image
                                      key={index}
                                      className="object-cover w-full h-full"
                                      width={300}
                                      height={400}
                                      src={item?.imageUrl}
                                      alt={`productImage-${index}`}
                                    />
                                  </div>

                                  <input
                                    className="border mt-2 w-full rounded-md border-stroke px-2 text-14 py-2 focus:border-primary active:border-primary outline-none border-stroke bg-white dark:border-strokedark dark:bg-lightdark "
                                    placeholder="altText"
                                    type="text"
                                    name="altText"
                                    value={item.altText}
                                    onChange={(e) =>
                                      handlealtTextposterimageUrl(
                                        index,
                                        String(e.target.value),
                                      )
                                    }
                                  />
                                </>
                              );
                            })}
                        
                        </div>
                      ) : (
                        <Imageupload setposterimageUrl={setposterimageUrl} />
                      )}
                    </div>

                    <div className="flex flex-col gap-5 py-4">
                      <div>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white ">
                          Product Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.name}
                          placeholder="Product name"
                          className={`w-full rounded-lg border-[1.5px] border-stroke placeholder:text-lightgrey  bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                            formik.touched.name && formik.errors.name
                              ? 'border-red-500'
                              : ''
                          }`}
                        />
                        {formik.touched.name && formik.errors.name ? (
                          <div className="text-red text-sm">
                            {formik.errors.name as String}
                          </div>
                        ) : null}
                      </div>

                      <div>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                          Description{' '}
                        </label>
                        <textarea
                          name="description"
                          onChange={formik.handleChange}
                          value={formik.values.description}
                          placeholder="description"
                          className={`w-full rounded-lg border-[1.5px] border-stroke placeholder:text-lightgrey bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                            formik.touched.description &&
                            formik.errors.description
                              ? 'border-red-500'
                              : ''
                          }`}
                        />
                        {formik.touched.description &&
                        formik.errors.description ? (
                          <div className="text-red text-sm">
                            {
                              formik.errors.description as FormikErrors<
                                FormValues['description']
                              >
                            }
                          </div>
                        ) : null}
                      </div>

                      <div>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                          Short Description{' '}
                        </label>
                        <textarea
                          name="short_description"
                          onChange={formik.handleChange}
                          value={formik.values.short_description}
                          placeholder="Short Description"
                          className={`w-full rounded-lg border-[1.5px] border-stroke placeholder:text-lightgrey bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                            formik.touched.short_description &&
                            formik.errors.short_description
                              ? 'border-red-500'
                              : ''
                          }`}
                        />
                        {formik.touched.short_description &&
                        formik.errors.short_description ? (
                          <div className="text-red text-sm">
                            {
                              formik.errors.short_description as FormikErrors<
                                FormValues['short_description']
                              >
                            }
                          </div>
                        ) : null}
                      </div>

                      <div>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                          Heading{' '}
                        </label>
                        <textarea
                          name="heading"
                          onChange={formik.handleChange}
                          value={formik.values.heading}
                          placeholder="Heading Text"
                          className={`w-full rounded-lg border-[1.5px] border-stroke placeholder:text-lightgrey bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                            formik.touched.heading && formik.errors.heading
                              ? 'border-red-500'
                              : ''
                          }`}
                        />
                        {formik.touched.heading && formik.errors.heading ? (
                          <div className="text-red text-sm">
                            {
                              formik.errors.heading as FormikErrors<
                                FormValues['heading']
                              >
                            }
                          </div>
                        ) : null}
                      </div>

                      <div className="flex full gap-4">
                        <div className="w-[50%]">
                          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Sale Price
                          </label>
                          <input
                            type="number"
                            name="salePrice"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.salePrice}
                            placeholder="Sale Price"
                            className={`w-full rounded-lg border-[1.5px] border-stroke placeholder:text-lightgrey bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                              formik.touched.salePrice &&
                              formik.errors.salePrice
                                ? 'border-red-500'
                                : ''
                            }`}
                          />
                          {formik.touched.salePrice &&
                          formik.errors.salePrice ? (
                            <div className="text-red text-sm">
                              {
                                formik.errors.salePrice as FormikErrors<
                                  FormValues['salePrice']
                                >
                              }
                            </div>
                          ) : null}
                        </div>

                        <div className="w-[50%]">
                          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Discount Price
                          </label>
                          <input
                            type="number"
                            name="discountPrice"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.discountPrice}
                            placeholder="Discount Price"
                            className={`w-full rounded-lg border-[1.5px] border-stroke placeholder:text-lightgrey bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                              formik.touched.discountPrice &&
                              formik.errors.discountPrice
                                ? 'border-red-500'
                                : ''
                            }`}
                          />
                          {formik.touched.discountPrice &&
                          formik.errors.discountPrice ? (
                            <div className="text-red text-sm">
                              {formik.errors.discountPrice as String}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="w-full">
                        <label className="mb-3 block py-4 px-2 text-sm font-medium text-black dark:text-white">
                          Select Parent Category (at least one)
                        </label>
                        {isLoading ? (
                          <div>
                            <Loader color="#fff" />
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {categoriesList.map((category) => (
                              <div
                                key={category.id}
                                className="flex items-center space-x-2"
                              >
                                <Checkbox
                                  checked={selectedCategoryIds.includes(
                                    category.id,
                                  )}
                                  onChange={(e) => {
                                    const checked = e.target.checked;
                                    setSelectedCategoryIds((prev) => {
                                      console.log(prev);
                                      if (checked) {
                                        return [category.id];
                                      } else {
                                        setSelectedSubcategoryIds([]);
                                        return [];
                                      }
                                    });
                                  }}
                                  id={`category-${category.id}`}
                                />
                                <label
                                  htmlFor={`category-${category.id}`}
                                  className="ml-2 text-black dark:text-white"
                                >
                                  {category.title}
                                </label>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="mt-4">
                        <h2 className="text-lg font-medium dark:text-white">
                          Subcategories
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                          {filteredSubcategories.map((subcategory) => (
                            <div
                              key={subcategory.id}
                              className="flex items-center space-x-2 p-2 border rounded"
                            >
                              <Checkbox
                                checked={selectedSubcategoryIds.includes(
                                  subcategory.id,
                                )}
                                onChange={(e) => {
                                  const checked = e.target.checked;
                                  setSelectedSubcategoryIds((prev) => {
                                    if (checked) {
                                      // If a new subcategory is checked, add it to the selected list
                                      return [...prev, subcategory.id];
                                    } else {
                                      // If the current subcategory is unchecked, remove it from the selected list
                                      return prev.filter(
                                        (id) => id !== subcategory.id,
                                      );
                                    }
                                  });
                                }}
                                id={`subcategory-${subcategory.id}`} // Corrected with template literals
                              />
                              <label
                                htmlFor={`subcategory-${subcategory.id}`} // Corrected with template literals
                                className="ml-2 text-black dark:text-white"
                              >
                                {subcategory.title}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="w-2/4">
                          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Meta Title
                          </label>
                          <input
                            type="text"
                            name="Meta_Title"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Meta_Title}
                            placeholder="Meta Title"
                            className={`w-full rounded-lg border-[1.5px] border-stroke placeholder:text-lightgrey bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                              formik.touched.name && formik.errors.name
                                ? 'border-red-500'
                                : ''
                            }`}
                          />
                          {formik.touched.Meta_Title &&
                          formik.errors.Meta_Title ? (
                            <div className="text-red text-sm">
                              {formik.errors.code as String}
                            </div>
                          ) : null}
                        </div>
                        <div className="w-2/4">
                          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Canonical Tag
                          </label>
                          <input
                            onBlur={formik.handleBlur}
                            type="text"
                            name="Canonical_Tag"
                            onChange={formik.handleChange}
                            value={formik.values.Canonical_Tag}
                            placeholder="Canonical Tag"
                            className={`w-full rounded-lg border-[1.5px] border-stroke placeholder:text-lightgrey bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                              formik.touched.name && formik.errors.name
                                ? 'border-red-500'
                                : ''
                            }`}
                          />

                          {formik.touched.Canonical_Tag &&
                          formik.errors.Canonical_Tag ? (
                            <div className="text-red text-sm">
                              {formik.errors.code as String}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                          Meta Description
                        </label>
                        <textarea
                          name="Meta_Description"
                          onChange={formik.handleChange}
                          value={formik.values.Meta_Description}
                          placeholder="Meta Description"
                          className={`w-full rounded-lg border-[1.5px] border-stroke placeholder:text-lightgrey bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                            formik.touched.description &&
                            formik.errors.description
                              ? 'border-red-500'
                              : ''
                          }`}
                        />
                        {formik.touched.Meta_Description &&
                        formik.errors.Meta_Description ? (
                          <div className="text-red text-sm">
                            {formik.errors.code as String}
                          </div>
                        ) : null}
                      </div>

                      <div className="flex gap-4">
                        <div className="w-full">
                          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Images Alt Text
                          </label>
                          <input
                            type="text"
                            name="Images_Alt_Text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.Images_Alt_Text}
                            placeholder="Images Alt Text"
                            className={`w-full rounded-lg border-[1.5px] border-stroke placeholder:text-lightgrey bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                              formik.touched.name && formik.errors.name
                                ? 'border-red-500'
                                : ''
                            }`}
                          />
                          {formik.touched.Images_Alt_Text &&
                          formik.errors.Images_Alt_Text ? (
                            <div className="text-red text-sm">
                              {formik.errors.code as String}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-5">
               
                  
                  <div className="p-4 rounded-sm border border-stroke bg-white dark:border-strokedark dark:bg-lightdark">
                    <div>
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Sub Heading
                      </label>
                      <textarea
                        name="Sub_Heading"
                        onChange={formik.handleChange}
                        value={formik.values.Sub_Heading}
                        placeholder="Sub Heading"
                        className={`w-full rounded-lg border-[1.5px] border-stroke placeholder:text-lightgrey bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                          formik.touched.Sub_Heading &&
                          formik.errors.Sub_Heading
                            ? 'border-red-500'
                            : ''
                        }`}
                      />
                      {formik.touched.Sub_Heading &&
                      formik.errors.Sub_Heading ? (
                        <div className="text-red text-sm">
                          {
                            formik.errors.heading as FormikErrors<
                              FormValues['Sub_Heading']
                            >
                          }
                        </div>
                      ) : null}
                    </div>

                    <div>
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Sub Heading Description
                      </label>
                      <textarea
                        name="Sub_Heading_description"
                        onChange={formik.handleChange}
                        value={formik.values.Sub_Heading_description}
                        placeholder="Sub Heading Description"
                        className={`w-full rounded-lg border-[1.5px] border-stroke placeholder:text-lightgrey bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                          formik.touched.Sub_Heading_description &&
                          formik.errors.Sub_Heading_description
                            ? 'border-red-500'
                            : ''
                        }`}
                      />
                      {formik.touched.Sub_Heading_description &&
                      formik.errors.Sub_Heading_description ? (
                        <div className="text-red text-sm">
                          {
                            formik.errors.heading as FormikErrors<
                              FormValues['Sub_Heading_description']
                            >
                          }
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="rounded-sm border border-stroke bg-white dark:border-strokedark dark:bg-lightdark">
                    <div className="border-b border-stroke p-4 dark:border-strokedark">
                      <h3 className="font-medium text-black dark:text-white">
                        Model Details
                      </h3>
                    </div>
                    <div className="flex flex-col gap-5 p-4">
                      <FieldArray name="modelDetails">
                        {({ push, remove }) => (
                          <div className="flex flex-col gap-2">
                            {formik.values.modelDetails &&
                              formik.values.modelDetails.map(
                                (model: any, index: any) => (
                                  <div
                                    key={index}
                                    className="flex items-center"
                                  >
                                    <input
                                      type="text"
                                      name={`modelDetails[${index}].name`}
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={
                                        formik.values.modelDetails[index].name
                                      }
                                      placeholder="Model Name"
                                      className={`w-full rounded-lg border-[1.5px] border-stroke placeholder:text-lightgrey bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary 
                                      ${
                                        formik.touched.modelDetails &&
                                        (
                                          formik.touched
                                            .modelDetails as FormikTouched<
                                            FormValues['modelDetails']
                                          >
                                        )?.[index]?.name &&
                                        (
                                          formik.errors
                                            .modelDetails as FormikErrors<
                                            FormValues['modelDetails']
                                          >
                                        )?.[index]?.name
                                          ? 'border-red-500'
                                          : ''
                                      }`}
                                    />
                                    <input
                                      type="text"
                                      name={`modelDetails[${index}].detail`}
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={
                                        formik.values.modelDetails[index].detail
                                      }
                                      placeholder="Model Detail"
                                      className={`w-full rounded-lg ml-2 border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary 
                                        ${
                                          formik.touched.modelDetails &&
                                          (
                                            formik.touched
                                              .modelDetails as FormikTouched<
                                              FormValues['modelDetails']
                                            >
                                          )?.[index]?.detail &&
                                          (
                                            formik.errors
                                              .modelDetails as FormikErrors<
                                              FormValues['modelDetails']
                                            >
                                          )?.[index]?.detail
                                            ? 'border-red-500'
                                            : ''
                                        }`}
                                    />
                                    <button
                                      type="button"
                                      onClick={() => remove(index)}
                                      className="ml-2 text-red "
                                    >
                                      <RxCross2
                                        className="text-red"
                                        size={25}
                                      />
                                    </button>
                                  </div>
                                ),
                              )}
                            <button
                              type="button"
                              onClick={() => push({ name: '', detail: '' })}
                              className="px-4 py-2  bg-[#cdb7aa] text-white rounded-md  hover:text-white w-fit"
                            >
                              Add Model
                            </button>
                          </div>
                        )}
                      </FieldArray>
                    </div>
                  </div>

                  <div className="rounded-sm border border-stroke bg-white dark:border-strokedark dark:bg-lightdark">
                    <div className="border-b border-stroke py-4 px-4 dark:border-strokedark">
                      <h3 className="font-medium text-black dark:text-white">
                        Colors
                      </h3>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <FieldArray name="colors">
                        {({ push, remove }) => (
                          <div className="flex flex-col gap-2">
                            {formik.values.colors &&
                              formik.values.colors.map(
                                (spec: any, index: any) => (
                                  <div
                                    key={index}
                                    className="flex items-center"
                                  >
                                    <input
                                      type="text"
                                      name={`colors[${index}].colorName`}
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={
                                        formik.values.colors[index].colorName
                                      }
                                      placeholder="Add color Code"
                                      className={`w-full rounded-lg border-[1.5px] border-stroke placeholder:text-lightgrey bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary 
                                     ${
                                       formik.touched.colors &&
                                       (formik.touched.colors &&
                                         (formik.touched
                                           .colors as FormikTouched<
                                           FormValues['colors']
                                         >))[index]?.colorName &&
                                       formik.errors.color &&
                                       (
                                         formik.errors.colors as FormikErrors<
                                           FormValues['colors']
                                         >
                                       )[index]?.colorName
                                         ? 'border-red-500'
                                         : ''
                                     }
                                      
                                      `}
                                    />
                                    <button
                                      type="button"
                                      onClick={() => remove(index)}
                                      className="ml-2 text-red"
                                    >
                                      <RxCross2
                                        className="text-red"
                                        size={25}
                                      />
                                    </button>
                                  </div>
                                ),
                              )}
                            <button
                              type="button"
                              onClick={() => push({ colorName: '' })}
                              className="px-4 py-2  bg-[#cdb7aa] text-white rounded-md  hover:text-white w-fit"
                            >
                              Add Colors
                            </button>
                          </div>
                        )}
                      </FieldArray>
                    </div>
                  </div>

                  <div className="rounded-sm border border-stroke bg-white dark:border-strokedark dark:bg-lightdark">
                    <div className="border-b border-stroke py-4 px-4 dark:border-strokedark">
                      <h3 className="font-medium text-black dark:text-white">
                        Specification
                      </h3>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <FieldArray name="spacification">
                        {({ push, remove }) => (
                          <div className="flex flex-col gap-2">
                            {formik.values.spacification &&
                              formik.values.spacification.map(
                                (spec: any, index: any) => (
                                  <div
                                    key={index}
                                    className="flex items-center"
                                  >
                                    <input
                                      type="text"
                                      name={`spacification[${index}].specsDetails`}
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={
                                        formik.values.spacification[index]
                                          .specsDetails
                                      }
                                      placeholder="Specification Details"
                                      className={`w-full rounded-lg border-[1.5px] border-stroke placeholder:text-lightgrey bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary 
               ${
                 formik.touched.spacification &&
                 (
                   formik.touched.spacification as FormikTouched<
                     FormValues['spacification']
                   >
                 )?.[index]?.specsDetails &&
                 (
                   formik.errors.spacification as FormikErrors<
                     FormValues['spacification']
                   >
                 )?.[index]?.specsDetails
                   ? 'border-red-500'
                   : ''
               }`}
                                    />
                                    <button
                                      type="button"
                                      onClick={() => remove(index)}
                                      className="ml-2 text-red"
                                    >
                                      <RxCross2
                                        className="text-red"
                                        size={25}
                                      />
                                    </button>
                                  </div>
                                ),
                              )}
                            <button
                              type="button"
                              onClick={() => push({ specsDetails: '' })}
                              className="px-4 py-2  bg-[#cdb7aa] text-white rounded-md  hover:text-white w-fit"
                            >
                              Add Specification
                            </button>
                          </div>
                        )}
                      </FieldArray>
                    </div>
                  </div>

                  <div className="rounded-sm border border-stroke bg-white dark:border-strokedark dark:bg-lightdark">
                    <div className="border-b border-stroke py-4 px-4 dark:border-strokedark">
                      <h3 className="font-medium text-black dark:text-white">
                        Banner Image
                      </h3>
                    </div>
                    {bannerImageUrl && bannerImageUrl?.length > 0 ? (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
                        <div>
                          {bannerImageUrl.map((item: any, index) => {
                            return (
                              <>
                                <div
                                  className="relative group rounded-lg overflow-hidden shadow-md bg-white transform transition-transform duration-300 hover:scale-105"
                                  key={index}
                                >
                                  <div className="absolute top-1 right-1 invisible group-hover:visible text-red bg-white rounded-full">
                                    <RxCross2
                                      className="cursor-pointer text-red-500 hover:text-red-700"
                                      size={17}
                                      onClick={() => {
                                        ImageRemoveHandler(
                                          item.public_id,
                                          setBannerImageUrl,
                                        );
                                      }}
                                    />
                                  </div>
                                  <Image
                                    key={index}
                                    className="object-cover w-full h-full"
                                    width={300}
                                    height={400}
                                    src={item?.imageUrl}
                                    alt={`productImage-${index}`}
                                  />
                                </div>

                                <input
                                  className="border mt-2 w-full rounded-md border-stroke px-2 text-14 py-2 focus:border-primary active:border-primary outline-none border-stroke bg-white dark:border-strokedark dark:bg-lightdark "
                                  placeholder="altText"
                                  type="text"
                                  name="altText"
                                  value={item.altText}
                                  onChange={(e) =>
                                    handlealtTextbannerImageUrl(
                                      index,
                                      String(e.target.value),
                                    )
                                  }
                                />
                              </>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <Imageupload setposterimageUrl={setBannerImageUrl} />
                    )}
                  </div>

                  <div className="rounded-sm border border-stroke bg-white dark:border-strokedark dark:bg-lightdark">
                    <div className="border-b border-stroke py-4 px-4 dark:border-strokedark">
                      <h3 className="font-medium text-black dark:text-white">
                        Product Images
                      </h3>
                    </div>
                    <Imageupload setImagesUrl={setImagesUrl} />
                    {imagesUrl && imagesUrl.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                        {imagesUrl.map((item: any, index) => {
                          return (
                            <div key={index}>
                              <div className="relative group rounded-lg overflow-hidden shadow-md bg-white transform transition-transform duration-300 hover:scale-105">
                                <div className="absolute top-1 right-1 invisible group-hover:visible text-red bg-white rounded-full z-10">
                                  <RxCross2
                                    className="cursor-pointer btext-red-500 hover:text-red-700"
                                    size={17}
                                    onClick={() => {
                                      ImageRemoveHandler(
                                        item.public_id,
                                        setImagesUrl,
                                      );
                                    }}
                                  />
                                </div>
                                <div key={index} className=" relative ">
                                  <div className="h-[100px] w-full overflow-hidden">
                                    <Image
                                      className="object-cover w-full h-full"
                                      width={300}
                                      height={200}
                                      src={item.imageUrl}
                                      alt={`productImage-${index}`}
                                    />
                                  </div>

                                  <input
                                    type="number"
                                    placeholder="Add Image Index"
                                    className=" rounded-b-md p-2 text-sm focus:outline-none w-full border bg-white dark:border-strokedark dark:bg-lightdark"
                                    value={item.imageIndex}
                                    onChange={(e) =>
                                      handleImageIndex(
                                        index,
                                        Number(e.target.value),
                                      )
                                    }
                                  />
                                </div>
                              </div>
                              <input
                                className="border mt-2 w-full rounded-md border-stroke px-2 text-14 py-2 bg-white dark:border-strokedark dark:bg-lightdark focus:border-primary active:border-primary outline-none"
                                placeholder="altText"
                                type="text"
                                name="altText"
                                value={item.altText}
                                onChange={(e) =>
                                  handlealtText(index, String(e.target.value))
                                }
                              />
                            </div>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              {imgError ? (
                <div className="flex justify-center">
                  <div className="text-red pt-2 pb-2">{imgError}</div>
                </div>
              ) : null}

              <button
                type="submit"
                className="px-10 py-2 mt-2  bg-[#cdb7aa] text-white rounded-md  hover:text-white"
              >
                {loading ? <Loader color="#fff" /> : 'Submit'}
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default FormElements;
