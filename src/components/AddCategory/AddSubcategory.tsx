'use client';
import React, { SetStateAction, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import Image from 'next/image';
import axios from 'axios';
import { Formik, Form } from 'formik';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useQuery } from '@tanstack/react-query';
import { ICategory, ISUBCATEGORY } from 'types/types';
import showToast from 'components/Toaster/Toaster';
import { fetchCategories } from 'config/fetch';
import Imageupload from 'components/ImageUpload/Imageupload';
import {
  subcategoryValidationSchema,
  subcategoryInitialValues,
} from 'data/data';
import { ImageRemoveHandler } from 'utils/helperFunctions';
import Loader from 'components/Loader/Loader';
import ProtectedRoute from 'hooks/AuthHookAdmin';
import { Checkbox } from 'antd';
import Cookies from 'js-cookie';

interface editCategoryNameType {
  title: string;
  description: string;
  CategoryId: undefined;
}

interface editCategoryProps {
  seteditCategory: any;
  editCategory: any;
  setMenuType: React.Dispatch<SetStateAction<string>>;
}

const FormLayout = ({
  seteditCategory,
  editCategory,
  setMenuType,
}: editCategoryProps) => {
  const admin_token = Cookies.get('2guysAdminToken');
  const super_admin_token = Cookies.get('superAdminToken');

  let token = admin_token ? admin_token : super_admin_token;

  let CategoryName =
    editCategory && editCategory.title
      ? {
          title: editCategory.title,
          description: editCategory.description,
          CategoryId: editCategory.CategoryId || undefined,
        }
      : null;
  let CategorImageUrl = editCategory && editCategory.posterImage;
  const [posterimageUrl, setposterimageUrl] = useState<
    any[] | null | undefined
  >(CategorImageUrl ? [CategorImageUrl] : null);
  const [loading, setloading] = useState<boolean>(false);
  const [editCategoryName, setEditCategoryName] = useState<
    editCategoryNameType | null | undefined
  >(CategoryName);

  const onSubmit = async (values: ISUBCATEGORY, { resetForm }: any) => {
    console.log(values, 'values');
    if (values.CategoryId === undefined) {
      return showToast('warn', 'Select parent category😟');
    }
    try {
      setloading(true);
      let posterImageUrl = posterimageUrl && posterimageUrl[0];
      if (!posterImageUrl) {
        setloading(false);
        return showToast('warn', 'Make sure Image is selected😴');
      }
      let { CategoryId, ...newValue } = {
        ...values,
        posterImage: posterImageUrl,
        category: {
          connect: { id: values.CategoryId },
        },
      };

      let updateFlag = editCategoryName ? true : false;
      let addProductUrl = updateFlag
        ? `/api/categories/updatesubCategory/${editCategory.id}`
        : null;
      let url = `${process.env.NEXT_PUBLIC_BASE_URL}${
        updateFlag ? addProductUrl : '/api/categories/Addsubcategory'
      }`;

      let response;
      if (updateFlag) {
        response = await axios.put(url, newValue, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMenuType('Categories');
        seteditCategory(null);
        setEditCategoryName(null);
      } else {
        response = await axios.post(url, newValue, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
      console.log(response, 'response');
      showToast(
        'success',
        updateFlag
          ? 'Sub Category has been sucessufully Updated🎉'
          : 'Sub Category has been sucessufully Created🎉',
      );
      setloading(false);

      setposterimageUrl(null);
      console.log('Before Reset form');
      resetForm();
      console.log('After Reset form');
    } catch (err) {
      console.log('error occurred', err);
      setloading(false);
    }
  };

  const {
    data: categoriesList = [],
    isLoading,
  } = useQuery<ICategory[], Error>({
    queryKey: ['category'],
    queryFn: fetchCategories,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <p
        className="text-lg font-black mb-4 flex items-center justify-center gap-2  w-fit p-2 cursor-pointer text-black dark:text-white "
        onClick={() => {
          setMenuType('Categories');
        }}
      >
        <IoMdArrowRoundBack /> Back
      </p>
      <Formik
        initialValues={
          editCategoryName ? editCategoryName : subcategoryInitialValues
        }
        // initialValues={subcategoryInitialValues}
        validationSchema={subcategoryValidationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form onSubmit={formik.handleSubmit}>
              <div className="flex justify-center  dark:text-white  ">
                <div className="flex flex-col gap-9 w-2/5   dark:text-white  dark:border-white">
                  <div className="rounded-md e bg-white  dark:bg-lightdark dark:bg-black dark:text-white  te p-3">
                    <div className="rounded-sm border border-stroke bg-white  dark:border-strokedark dark:bg-lightdark">
                      <div className="border-b border-stroke py-4 px-2 dark:bg-lightdark dark:bg-black dark:text-white  dark:border-white">
                        <h3 className="font-medium text-black dark:text-white">
                          Add Sub Category Images
                        </h3>
                      </div>
                      {posterimageUrl && posterimageUrl.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4  dark:bg-black dark:text-white dark:bg-lightdark dark:border-white">
                          {posterimageUrl.map((item: any, index) => {
                            return (
                              <div
                                className="relative group rounded-lg overflow-hidden shadow-md bg-white transform transition-transform duration-300 hover:scale-105"
                                key={index}
                              >
                                <div className="absolute top-1 right-1 invisible group-hover:visible text-red bg-white rounded-full ">
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
                                  height={200}
                                  src={item.imageUrl}
                                  alt={`productImage-${index}`}
                                />
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <Imageupload setposterimageUrl={setposterimageUrl} />
                      )}
                    </div>

                    <div className="flex flex-col gap-5.5 p-6.5">
                      <div>
                        <label className=" block py-4 px-2 text-sm font-medium text-black dark:text-white">
                          Sub Category Name
                        </label>
                        <input
                          type="text"
                          name="title"
                          onChange={formik.handleChange}
                          value={formik.values.title}
                          placeholder="Title"
                          className={`w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                            formik.touched.title && formik.errors.title
                              ? 'border-red-500'
                              : ''
                          }`}
                        />
                        {formik.touched.title && formik.errors.title ? (
                          <div className="text-red-500 text-sm">
                            {formik.errors.title}
                          </div>
                        ) : null}
                      </div>

                      <div>
                        <label className=" block py-4 px-2 text-sm font-medium text-black dark:text-white">
                          Category Description
                        </label>
                        <textarea
                          name="description"
                          onChange={formik.handleChange}
                          value={formik.values.description}
                          placeholder="Description"
                          className={`w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                            formik.touched.title && formik.errors.title
                              ? 'border-red-500'
                              : ''
                          }`}
                        />
                        {formik.touched.title && formik.errors.title ? (
                          <div className="text-red-500 text-sm">
                            {formik.errors.title}
                          </div>
                        ) : null}
                      </div>

                      <div>
                        <label className="mb-3 block py-4 px-2 text-sm font-medium text-black dark:text-white">
                          Select Parent Category (atleat one)
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {categoriesList.map((category) => (
                            <div
                              key={category.id}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                name="CategoryId"
                                checked={
                                  formik.values.CategoryId === category.id
                                }
                                onChange={() =>
                                  formik.setFieldValue(
                                    'CategoryId',
                                    formik.values.CategoryId === category.id
                                      ? null
                                      : category.id,
                                  )
                                }
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="mt-4 px-8 py-2 bg-primary text-white rounded"
                >
                  {loading ? <Loader /> : 'Submit'}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default ProtectedRoute(FormLayout);
