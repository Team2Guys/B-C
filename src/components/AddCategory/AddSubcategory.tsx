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
  short_description?: string;
  CategoryId: undefined;
  Meta_Title?: string;
  Meta_description?: string;
  Canonical_Tag?: string;
  Images_Alt_Text?: string;
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
          short_description: editCategory.short_description,
          CategoryId: editCategory.CategoryId || undefined,
          Images_Alt_Text: editCategory?.Images_Alt_Text,
          Canonical_Tag: editCategory?.Canonical_Tag,
          Meta_Title: editCategory?.Meta_Title,
          Meta_description: editCategory?.Meta_description,
        }
      : null;
  let CategorImageUrl = editCategory && editCategory.posterImage;
  const [posterimageUrl, setposterimageUrl] = useState<
    any[] | null | undefined
  >(CategorImageUrl ? [CategorImageUrl] : null);
  const [bannerImageUrl, setBannerImageUrl] = useState<any[] | null>(
    editCategory && editCategory.bannerImage && [editCategory.bannerImage],
  );
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
      let bannerImage = bannerImageUrl && bannerImageUrl[0];
      if (!posterImageUrl) {
        setloading(false);
        return showToast('warn', 'Make sure Image is selected😴');
      }
      console.log(bannerImage + 'bannerImage');
      let { CategoryId, ...newValue } = {
        ...values,
        posterImage: posterImageUrl,
        bannerImage: bannerImage !== undefined ? bannerImage : null,
        category: {
          connect: { id: values.CategoryId },
        },
      };
      console.log(CategoryId, 'CategoryId');
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
      setBannerImageUrl(null);
      console.log('Before Reset form');
      resetForm();
      console.log('After Reset form');
    } catch (err) {
      console.log('error occurred', err);
      setloading(false);
    }
  };

  const { data: categoriesList = [] } = useQuery<ICategory[], Error>({
    queryKey: ['category'],
    queryFn: fetchCategories,
  });

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
                              <div key={index}>
                                <div className="relative group rounded-lg overflow-hidden shadow-md bg-white transform transition-transform duration-300 hover:scale-105">
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
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <Imageupload setposterimageUrl={setposterimageUrl} />
                      )}
                    </div>
                    <div className="rounded-sm border border-stroke bg-white  dark:border-strokedark dark:bg-lightdark">
                      <div className="border-b border-stroke py-4 px-2 dark:bg-lightdark dark:bg-black dark:text-white  dark:border-white">
                        <h3 className="font-medium text-black dark:text-white">
                          Banner Image
                        </h3>
                      </div>
                      {bannerImageUrl && bannerImageUrl.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4  dark:bg-black dark:text-white dark:bg-lightdark dark:border-white">
                          {bannerImageUrl.map((item: any, index) => {
                            return (
                              <div key={index}>
                                <div className="relative group rounded-lg overflow-hidden shadow-md bg-white transform transition-transform duration-300 hover:scale-105">
                                  <div className="absolute top-1 right-1 invisible group-hover:visible text-red bg-white rounded-full ">
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
                                    height={200}
                                    src={item.imageUrl}
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
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <Imageupload setposterimageUrl={setBannerImageUrl} />
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
                        <label className=" block py-4 px-2 text-sm font-medium text-black dark:text-white">
                          Category Short Description
                        </label>
                        <textarea
                          name="short_description"
                          onChange={formik.handleChange}
                          value={formik.values.short_description}
                          placeholder="Short Description"
                          className={`w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                            formik.touched.short_description &&
                            formik.errors.short_description
                              ? 'border-red-500'
                              : ''
                          }`}
                        />
                        {formik.touched.short_description &&
                        formik.errors.short_description ? (
                          <div className="text-red-500 text-sm">
                            {formik.errors.short_description}
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
                      <div className="flex gap-4 mt-4">
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
                              formik.touched.Meta_Title &&
                              formik.errors.Meta_Title
                                ? 'border-red-500'
                                : ''
                            }`}
                          />
                          {formik.touched.Meta_Title &&
                          formik.errors.Meta_Title ? (
                            <div className="text-red text-sm">
                              {formik.errors.Meta_Title as String}
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
                              formik.touched.Canonical_Tag &&
                              formik.errors.Canonical_Tag
                                ? 'border-red-500'
                                : ''
                            }`}
                          />

                          {formik.touched.Canonical_Tag &&
                          formik.errors.Canonical_Tag ? (
                            <div className="text-red text-sm">
                              {formik.errors.Canonical_Tag as String}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                          Meta Description
                        </label>
                        <textarea
                          name="Meta_description"
                          onChange={formik.handleChange}
                          value={formik.values.Meta_description}
                          placeholder="Meta Description"
                          className={`w-full rounded-lg border-[1.5px] border-stroke placeholder:text-lightgrey bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                            formik.touched.description &&
                            formik.errors.description
                              ? 'border-red-500'
                              : ''
                          }`}
                        />
                        {formik.touched.Meta_description &&
                        formik.errors.Meta_description ? (
                          <div className="text-red text-sm">
                            {formik.errors.Meta_description as String}
                          </div>
                        ) : null}
                      </div>

                      <div className="flex gap-4 mt-2">
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
                              formik.touched.Images_Alt_Text &&
                              formik.errors.Images_Alt_Text
                                ? 'border-red-500'
                                : ''
                            }`}
                          />
                          {formik.touched.Images_Alt_Text &&
                          formik.errors.Images_Alt_Text ? (
                            <div className="text-red text-sm">
                              {formik.errors.Images_Alt_Text as String}
                            </div>
                          ) : null}
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
