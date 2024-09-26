'use client';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
  Formik,
  FieldArray,
  FormikErrors,
  Form,
  ErrorMessage,
  Field,
} from 'formik';

import { RxCross2 } from 'react-icons/rx';
import Image from 'next/image';
import axios from 'axios';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Imageupload from 'components/ImageUpload/Imageupload';
import { Checkbox } from 'antd';
import { ADDPRODUCTFORMPROPS } from 'types/interfaces';
import showToast from 'components/Toaster/Toaster';
import { useQuery } from '@tanstack/react-query';
import {
  AddproductsinitialValues,
  AddProductvalidationSchema,
} from 'data/data';
import { ICategory } from 'types/types';
import { fetchCategories, fetchSubCategories } from 'config/fetch';
import Loader from 'components/Loader/Loader';
import { ImageRemoveHandler } from 'utils/helperFunctions';
import Cookies from 'js-cookie';
import { Select } from 'antd';


const FormElements: React.FC<ADDPRODUCTFORMPROPS> = ({
  EditInitialValues,
  EditProductValue,
  setselecteMenu,
  setEditProduct,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);
  const [imagesUrl, setImagesUrl] = useState<any[]>([]);
  const [posterimageUrl, setposterimageUrl] = useState<any[] | null>(
    EditInitialValues ? [EditInitialValues.posterImageUrl] : [],
  );
  const [hoverImage, sethoverImage] = useState<any[] | null | undefined>();
  const [loading, setloading] = useState<boolean>(false);
  const [productInitialValue, setProductInitialValue] = useState<
    any | null | undefined
  >(EditProductValue);
  const [imgError, setError] = useState<string | null | undefined>();
  const [Categories, setCategories] = useState<any[]>();
  const [VariationOption, setVariationOption] =
    useState<string>('withoutVariation');
  const [productUpdateFlat, setProductUpdateFlat] = useState(false);
  // const [selectedCategories, setSelectedCategories] = useState<number>(null);
  // const [selectedSubcategories, setSelectedSubcategories] = useState<number[]>(
  //   [],
  // );

  const handleOptionChange = (e: any) => {
    console.log(e);
    setVariationOption(e.target.value);
  };

  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

  const admin_token = Cookies.get('2guysAdminToken');
  const super_admin_token = Cookies.get('superAdminToken');

  let token = admin_token ? admin_token : super_admin_token;

  useLayoutEffect(() => {
    const CategoryHandler = async () => {
      try {
        if (!EditInitialValues) return;

        setProductUpdateFlat(true);
        const {
          posterImage,
          imageUrls,
          _id,
          createdAt,
          updatedAt,
          CategoryId,
          SubCategoryId,
          __v,
          ...EditInitialProductValues
        } = EditInitialValues as any;

        imageUrls ? setImagesUrl(imageUrls) : null;
        posterImage ? setposterimageUrl([posterImage]) : null;

        if (CategoryId) {
          const catArr = [];
          catArr.push(CategoryId);
          setSelectedCategoryIds(catArr);
        }
        if (SubCategoryId) {
          const subcatArr = [];
          subcatArr.push(SubCategoryId);
          setSelectedSubcategoryIds(subcatArr);
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
  }, []);

  const onSubmit = async (values: any, { resetForm }: any) => {
    try {
      setError(null);
      let posterImageUrl = posterimageUrl && posterimageUrl[0];
      let hoverImageUrl = hoverImage && hoverImage[0];
      let createdAt = Date.now();

      if (!posterImageUrl || !(imagesUrl.length > 0)) {
        return showToast('warn', 'Please select relevant Images');
      }

      let newValues = {
        ...values,
        title: values.name,
        posterImage: posterImageUrl,
        hoverImage: hoverImageUrl,
        imageUrls: imagesUrl,
      };

      setloading(true);
      console.log(EditInitialValues);
      let updateFlag = productUpdateFlat;

      let url = updateFlag
        ? `/api/products/edit_product/${EditInitialValues.id} `
        : '/api/products/AddProduct';

      const {
        categories,
        subcategories,
        colors,
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
        hoverImage: newhoverImage,
        id,
        name,
        ...finalValues
      } = newValues;

      let updatedvalue = {
        ...finalValues,
        category: { connect: { id: selectedCategoryIds[0] } },
      };

      if (selectedSubcategoryIds.length > 0) {
        updatedvalue = {
          ...updatedvalue,
          subCategory: { connect: { id: selectedSubcategoryIds[0] } },
        };
      }

      let method: 'post' | 'put' = updateFlag ? 'put' : 'post';

      let response = await axios[method](
        `${process.env.NEXT_PUBLIC_BASE_URL}${url}`,
        updatedvalue,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      showToast(
        'success',
        `Product has been successfully ${updateFlag ? 'updated!' : 'Addded'}`,
      );
      setProductInitialValue(AddproductsinitialValues);
      resetForm();
      setloading(false);
      sethoverImage(null);
      setposterimageUrl(null);
      setImagesUrl([]);
      setSelectedCategoryIds([]);
      setSelectedSubcategoryIds([]);

      updateFlag ? setEditProduct && setEditProduct(undefined) : null;
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
        console.log(err.response.data.message, 'err.response.data.message');
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

  useEffect(() => {
    const CategoryHandler = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories/getAllCategories`,
        );
        const allCategories = await response.json();
        setCategories(allCategories);
      } catch (err) {
        console.log(err, 'err');
      }
    };

    CategoryHandler();
  }, []);

  const {
    data: categoriesList = [],
    error,
    isLoading,
  } = useQuery<ICategory[], Error>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
  const {
    data: subCategoriesList = [],
    error: subError,
    isLoading: subLoading,
  } = useQuery<ICategory[], Error>({
    queryKey: ['subcategories'],
    queryFn: fetchSubCategories,
  });

  const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>([]);
  const [selectedSubcategoryIds, setSelectedSubcategoryIds] = useState<
    number[]
  >([]);
  const [filteredSubcategories, setFilteredSubcategories] = useState<
    ICategory[]
  >([]);

  useEffect(() => {
    setSelectedSubcategoryIds([]);

    const filteredSubcategories = subCategoriesList.filter((subcategory) =>
      selectedCategoryIds.includes(subcategory.CategoryId),
    );

    setFilteredSubcategories(filteredSubcategories);
  }, [selectedCategoryIds, categoriesList]);

  // Handle subcategory selection
  const handleSubcategoryChange = (subcategoryId: number, checked: boolean) => {
    setSelectedSubcategoryIds((prev) => {
      if (checked) {
        return [...prev, subcategoryId];
      } else {
        return prev.filter((id) => id !== subcategoryId);
      }
    });
  };


  const Type= [
    {
    name: "By Type"
  },
  {
    name: "By Room"
  },


]

  

  return (
    <>
      <p
        className="text-lg font-black mb-4 flex items-center justify-center gap-2 hover:bg-gray-200 w-fit p-2 cursor-pointer text-black dark:bg-black dark:text-white"
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
                <div className="flex flex-col gap-9 ">
                  <div className="rounded-sm border border-stroke bg-white dark:bg-black py-4 px-6">
                    <div className="rounded-sm border border-stroke bg-white dark:bg-black">
                      <div className="border-b border-stroke py-4 px-4 ">
                        <h3 className="font-medium text-black dark:text-white">
                          Add Product Images
                        </h3>
                      </div>

                      {posterimageUrl && posterimageUrl?.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
                          {posterimageUrl.map((item: any, index) => {
                            return (
                              <div
                                className="relative group rounded-lg overflow-hidden shadow-md bg-white dark:bg-black transform transition-transform duration-300 hover:scale-105"
                                key={index}
                              >
                                <div className="absolute top-1 right-1 invisible group-hover:visible text-red-600 bg-white dark:bg-black rounded-full">
                                  <RxCross2
                                    className="cursor-pointer text-red-600-500 hover:text-red-600-700"
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
                            );
                          })}
                        </div>
                      ) : (
                        <>
                          <Imageupload setposterimageUrl={setposterimageUrl} />
                        </>
                      )}
                    </div>

                    <div className="flex flex-col ">
                      <div>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white ">
                          Product Title
                        </label>
                        <input
                          type="text"
                          name="name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.name}
                          placeholder="Title"
                          className={`w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                            formik.touched.name && formik.errors.name
                              ? 'border-red-500'
                              : ''
                          }`}
                        />
                        {formik.touched.name && formik.errors.name ? (
                          <div className="text-red-600-600 text-sm">
                            {formik.errors.name as String}
                          </div>
                        ) : null}
                      </div>

                      <div>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                          description{' '}
                        </label>
                        <textarea
                          name="description"
                          onChange={formik.handleChange}
                          value={formik.values.description}
                          placeholder="description"
                          className={`w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                            formik.touched.description &&
                            formik.errors.description
                              ? 'border-red-500'
                              : ''
                          }`}
                        />
                        {formik.touched.description &&
                        formik.errors.description ? (
                          <div className="text-red-600 text-sm">
                            {
                              formik.errors.description as FormikErrors<
                                //@ts-expect-error
                                FormValues['description']
                              >
                            }
                          </div>
                        ) : null}
                      </div>

                      <div className="flex full gap-4">
                        <div className="w-[33%]">
                          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Price
                          </label>

                          <input
                            type="number"
                            name="price"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.price}
                            placeholder="Product Price"
                            className={`w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                              formik.touched.price && formik.errors.price
                                ? 'border-red-500'
                                : ''
                            }`}
                          />
                          {formik.touched.price && formik.errors.price ? (
                            <div className="text-red-600 text-sm">
                              {' '}
                              {formik.errors.price as FormikErrors<string>}
                            </div>
                          ) : null}
                        </div>

                        <div className="w-[33%]">
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
                            className={`w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                              formik.touched.discountPrice &&
                              formik.errors.discountPrice
                                ? 'border-red-500'
                                : ''
                            }`}
                          />
                          {formik.touched.discountPrice &&
                          formik.errors.discountPrice ? (
                            <div className="text-red-600 text-sm">
                              {formik.errors.discountPrice as String}
                            </div>
                          ) : null}
                        </div>


                        <div className="w-[33%]">
                          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                           Select Type
                          </label>
                          <Field name="color" as="select"  
          className={`w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary`}                  
                          >
{Type.map((item, index)=> <option key={index} value={item.name}>{item.name}</option>)}

 </Field>
                          {formik.touched.discountPrice &&
                          formik.errors.discountPrice ? (
                            <div className="text-red-600 text-sm">
                              {formik.errors.discountPrice as String}
                            </div>
                          ) : null}
                        </div>

                      </div>

                      <div className="flex gap-4 flex-col">
                        {/* <div className="w-2/4">
                          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Product Code
                          </label>
                          <input
                            type="text"
                            name="code"
                            onChange={formik.handleChange}
                            value={formik.values.code}
                            placeholder="Product code"
                            className={`w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                              formik.touched.name && formik.errors.name
                                ? 'border-red-500'
                                : ''
                            }`}
                          />
                          {formik.touched.name && formik.errors.code ? (
                            <div className="text-red-600 text-sm">
                              {formik.errors.code as String}
                            </div>
                          ) : null}
                        </div> */}
                        <div className="w-full">
                          <label className="mb-3 block py-4 px-2 text-sm font-medium text-black dark:text-white">
                            Select Parent Category (at least one)
                          </label>
                          {isLoading ? (
                            <div>
                              <Loader />
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
                        
                        {filteredSubcategories.length > 0 && (
                          <div className="mt-4">
                            <h2 className="text-lg font-medium">
                              Subcategories
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                                          return [subcategory.id];
                                        } else {
                                          return [];
                                        }
                                      });
                                    }}
                                    id={`subcategory-${subcategory.id}`}
                                  />
                                  <label
                                    htmlFor={`subcategory-${subcategory.id}`}
                                    className="ml-2 text-black dark:text-white"
                                  >
                                    {subcategory.title}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}





                      </div>





                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-5">
                  <div className="rounded-sm border border-stroke bg-white  dark:bg-black ">
                    <div className="mb-4 p-4 bg-white  dark:bg-black  text-black dark:text-white">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Add Stock Quantity
                      </label>
                      <input
                        type="number"
                        name="stock"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.stock}
                        placeholder="How many items available"
                        className={`w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                          formik.touched.stock && formik.errors.stock
                            ? 'border-red-500'
                            : ''
                        }`}
                      />
                      {formik.touched.stock && formik.errors.stock ? (
                        <div className="text-red-600 text-sm">
                          {formik.errors.stock as String}
                        </div>
                      ) : null}
                    </div>

                    {/* {VariationOption === 'withoutVariation' && (
                      <>
                        {withoutVariation.map((inputField, index) => (
                          <div key={index} className="mb-4">
                            <label className="block text-sm font-medium mb-1 text-dark dark:text-white">
                              {inputField.name.charAt(0).toLocaleUpperCase() +
                                inputField.name.slice(1)}
                            </label>
                            <Field
                              type={inputField.type}
                              name={inputField.name}
                              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary "
                            />
                            <ErrorMessage
                              name={inputField.name}
                              component="div"
                              className="text-red-600-500"
                            />
                          </div>
                        ))}
                      </>
                    )}

                    {VariationOption === 'withVariation' && (
                      <>
                        <FieldArray name="variantStockQuantities">
                          {({ push, remove }) => (
                            <div>
                              {formik.values.variantStockQuantities &&
                                formik.values.variantStockQuantities.map(
                                  (model: any, index: any) => (
                                    <div
                                      key={index}
                                      className="flex flex-col md:flex-row md:items-center mb-4"
                                    >
                                      <div className="md:flex-1 md:mr-4 mb-4 md:mb-0">
                                        <Field
                                          type="text"
                                          name={`variantStockQuantities[${index}].variant`}
                                          placeholder="Variant"
                                          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary "
                                        />
                                        <ErrorMessage
                                          name={`variantStockQuantities[${index}].variant`}
                                          component="div"
                                          className="text-red-600-500 mt-1"
                                        />
                                      </div>
                                      <div className="md:flex-1 md:mr-4 mb-4 md:mb-0">
                                        <Field
                                          type="number"
                                          name={`variantStockQuantities[${index}].quantity`}
                                          placeholder="Quantity"
                                          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary "
                                        />
                                        <ErrorMessage
                                          name={`variantStockQuantities[${index}].quantity`}
                                          component="div"
                                          className="text-red-600-500 mt-1"
                                        />
                                      </div>
                                      <div className="md:flex-none text-right text-red-600 dark:text-red-600 ">
                                        <button
                                          type="button"
                                          onClick={() => remove(index)}
                                          className="text-red-600-500 hover:text-red-600-700"
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  ),
                                )}
                              <div className="text-left">
                                <button
                                  type="button"
                                  onClick={() => push({ name: '', detail: '' })}
                                  className="px-4 py-2 bg-black text-white dark:bg-gray-800 rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
                                >
                                  Add Variation
                                </button>
                              </div>
                            </div>
                          )}
                        </FieldArray>
                      </>
                    )} */}
                  </div>

                  {/* <div className="rounded-sm border border-stroke bg-white  dark:bg-black">
                    <div className="border-b border-stroke py-4 px-6 dark:border-strokedark">
                      <h3 className="font-medium text-black dark:text-white">
                        Additional information
                      </h3>
                    </div>
                    <div className="flex flex-col py-4 px-6">
                      <FieldArray name="additionalInformation">
                        {({ push, remove }) => (
                          <div className="flex flex-col gap-2">
                            {formik.values.additionalInformation &&
                              formik.values.additionalInformation.map(
                                (model: any, index: any) => (
                                  <div
                                    key={index}
                                    className="flex items-center"
                                  >
                                    <input
                                      type="text"
                                      name={`additionalInformation[${index}].name`}
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={
                                        formik.values.additionalInformation[
                                          index
                                        ].name
                                      }
                                      placeholder="Model Name"
                                      className={`w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                                        formik.touched.additionalInformation?.[
                                          index
                                        ]?.name &&
                                        (
                                          formik.errors
                                            .additionalInformation as FormikErrors<
                                            FormValues['additionalInformation']
                                          >
                                        )?.[index]?.name
                                          ? 'border-red-500 dark:border-white'
                                          : ''
                                      }`}
                                    />
                                    <input
                                      type="text"
                                      name={`additionalInformation[${index}].detail`}
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      value={
                                        formik.values.additionalInformation[
                                          index
                                        ].detail
                                      }
                                      placeholder="Model Detail"
                                      className={`w-full rounded-lg ml-2 border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                                        formik.touched.additionalInformation?.[
                                          index
                                        ]?.detail &&
                                        (
                                          formik.errors
                                            .additionalInformation as FormikErrors<
                                            FormValues['additionalInformation']
                                          >
                                        )?.[index]?.detail
                                          ? 'border-red-500 dark:border-white'
                                          : ''
                                      }`}
                                    />
                                    <button
                                      type="button"
                                      onClick={() => remove(index)}
                                      className="ml-2 text-red-600 "
                                    >
                                      <RxCross2
                                        className="text-red-600 dark:text-white"
                                        size={25}
                                      />
                                    </button>
                                  </div>
                                ),
                              )}
                            <button
                              type="button"
                              onClick={() => push({ name: '', detail: '' })}
                              className="px-4 py-2 bg-black text-white dark:bg-gray-800  rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black w-fit"
                            >
                              Add Model
                            </button>
                          </div>
                        )}
                      </FieldArray>
                    </div>
                  </div> */}

                  <div className="rounded-sm border border-stroke bg-white  dark:bg-black ">
                    <div className="border-b border-stroke py-4 px-4 dark:border-strokedark">
                      <h3 className="font-medium text-black dark:text-white">
                        Specification
                      </h3>
                    </div>
                    <div className="flex flex-col py-4 px-6">
                      <FieldArray name="spacification">
                        {({ push, remove }) => (
                          <div className="flex flex-col gap-2">
                            {formik.values.spacification?.map(
                              (spec: any, index: any) => (
                                <div key={index} className="flex items-center">
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
                                    className={`w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                                      //@ts-expect-error
                                      formik.touched.spacification?.[index]
                                        ?.specsDetails &&
                                      (
                                        formik.errors
                                          .spacification as FormikErrors<
                                          //@ts-expect-error
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
                                    className="ml-2 text-red-600"
                                  >
                                    <RxCross2
                                      className="text-red-600 dark:text-white"
                                      size={25}
                                    />
                                  </button>
                                </div>
                              ),
                            )}
                            <button
                              type="button"
                              onClick={() => push({ specsDetails: '' })}
                              className="px-4 py-2 bg-[#cdb7aa] text-white rounded-md shadow-md hover:bg-[#cdb7aac6] focus:outline-none focus:ring-2 focus:ring-[#bg-[#cdb7aa]] w-fit"
                            >
                              Add Specification
                            </button>
                          </div>
                        )}
                      </FieldArray>
                    </div>
                  </div>
                  {/* <div className="rounded-sm border border-stroke bg-white  dark:bg-black">
                    <div className="border-b border-stroke py-4 px-4 dark:border-strokedark">
                      <h3 className="font-medium text-black dark:text-white">
                        Colors
                      </h3>
                    </div>
                    <div className="flex flex-col py-4 px-6">
                      <FieldArray name="colors">
                        {({ push, remove }) => (
                          <div className="flex flex-col gap-2">
                            {formik.values.colors.map(
                              (spec: any, index: any) => (
                                <div key={index} className="flex items-center">
                                  <input
                                    type="text"
                                    name={`colors[${index}].colorName`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={
                                      formik.values.colors[index].colorName
                                    }
                                    placeholder="color name"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    // className={`w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                                    //   formik.touched.spacification?.[index]
                                    //     ?.colorName &&
                                    //   (
                                    //     formik.errors
                                    //       .spacification as FormikErrors<
                                    //       FormValues['spacification']
                                    //     >
                                    //   )?.[index]?.specsDetails
                                    //     ? 'border-red-500'
                                    //     : ''
                                    // }`}
                                  />
                                  <button
                                    type="button"
                                    onClick={() => remove(index)}
                                    className="ml-2 text-red-600"
                                  >
                                    <RxCross2
                                      className="text-red-600 dark:text-white"
                                      size={25}
                                    />
                                  </button>
                                </div>
                              ),
                            )}
                            <button
                              type="button"
                              onClick={() => push({ colorName: '' })}
                              className="px-4 py-2 bg-black text-white dark:bg-gray-800  rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black w-fit"
                            >
                              Add color
                            </button>
                          </div>
                        )}
                      </FieldArray>
                    </div>
                  </div> */}

                  {/* <div className="rounded-sm border border-stroke bg-white  dark:bg-black">
                    <div className="border-b border-stroke py-4 px-4 dark:border-strokedark">
                      <h3 className="font-medium text-black dark:text-white">
                        Add Sizes in Length
                      </h3>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                      <FieldArray name="sizes">
                        {({ push, remove2 }) => (
                          <div className="flex flex-col gap-2">
                            {formik.values.sizes.map(
                              (spec: any, index: any) => (
                                <div key={index} className="flex items-center">
                                  <input
                                    type="number"
                                    name={`sizes[${index}].sizesDetails`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.sizes[index].sizes}
                                    placeholder="Sizes"
                                    className={`w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                                      formik.touched.spacification?.[index]
                                        ?.sizesDetails &&
                                      (
                                        formik.errors.sizes as FormikErrors<
                                          FormValues['sizes']
                                        >
                                      )?.[index]?.sizesDetails
                                        ? 'border-red-500'
                                        : ''
                                    }`}
                                  />
                                  <button
                                    type="button"
                                    onClick={() => remove(index)}
                                    className="ml-2 text-red-600"
                                  >
                                    <RxCross2 className="text-red-600 dark:text-white" size={25} />
                                  </button>
                                </div>
                              ),
                            )}
                            <button
                              type="button"
                              onClick={() => push({ sizesDetails: '' })}
                              className="px-4 py-2 bg-black text-white dark:bg-gray-800 rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black w-fit"
                            >
                              Add Sizes
                            </button>
                          </div>
                        )}
                      </FieldArray>
                    </div>
                  </div> */}

                  <div className="rounded-sm border border-stroke bg-white  dark:bg-black">
                    <div className="border-b border-stroke py-4 px-4 dark:border-strokedark">
                      <h3 className="font-medium text-black dark:text-white">
                        Add Hover Image
                      </h3>
                    </div>

                    {hoverImage && hoverImage.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                        {hoverImage.map((item: any, index) => {
                          return (
                            <div
                              className="relative group rounded-lg overflow-hidden shadow-md bg-white transform transition-transform duration-300 hover:scale-105"
                              key={index}
                            >
                              <div className="absolute top-1 right-1 invisible group-hover:visible text-red-600 bg-white rounded-full">
                                <RxCross2
                                  className="cursor-pointer text-red-600-500 hover:text-red-600-700"
                                  size={17}
                                  onClick={() => {
                                    ImageRemoveHandler(
                                      item.public_id,
                                      sethoverImage,
                                    );
                                  }}
                                />
                              </div>
                              <Image
                                key={index}
                                className="object-cover w-full h-full"
                                width={100}
                                height={100}
                                src={item?.imageUrl ? item?.imageUrl : ''}
                                alt={`productImage-${index}`}
                              />
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <Imageupload sethoverImage={sethoverImage} />
                    )}
                  </div>

                  <div className="rounded-sm border border-stroke bg-white  dark:bg-black">
                    <div className="border-b border-stroke py-4 px-4 dark:border-strokedark">
                      <h3 className="font-medium text-black dark:text-white">
                        Add Product Images
                      </h3>
                    </div>

                    <Imageupload setImagesUrl={setImagesUrl} />

                    {imagesUrl && imagesUrl.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                        {imagesUrl.map((item: any, index) => {
                          return (
                            <div
                              className="relative group rounded-lg overflow-hidden shadow-md bg-white transform transition-transform duration-300 hover:scale-105"
                              key={index}
                            >
                              <div className="absolute top-1 right-1 invisible group-hover:visible text-red-600 bg-white rounded-full">
                                <RxCross2
                                  className="cursor-pointer text-red-600-500 hover:text-red-600-700"
                                  size={17}
                                  onClick={() => {
                                    console.log('funciton called');
                                    ImageRemoveHandler(
                                      item.public_id,
                                      setImagesUrl,
                                    );
                                  }}
                                />
                              </div>
                              <Image
                                key={index}
                                className="object-cover w-full h-full"
                                width={300}
                                height={200}
                                src={item.imageUrl}
                                alt={`productImage-${index}`}
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
                  <div className="text-red-600 pt-2 pb-2 text-red-600-500">
                    {imgError}
                  </div>
                </div>
              ) : null}

              <button
                type="submit"
                className="px-10 py-2 bg-[#cdb7aa] text-white rounded-md shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#cdb7aa]"
              >
                {loading ? <Loader /> : 'Submit'}
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default FormElements;
