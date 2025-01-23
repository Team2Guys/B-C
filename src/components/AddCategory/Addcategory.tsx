'use client';
import React, { SetStateAction, useLayoutEffect, useState } from 'react';
import Imageupload from 'components/ImageUpload/Imageupload';
import { RxCross2 } from 'react-icons/rx';
import Image from 'next/image';
import { ImageRemoveHandler } from 'utils/helperFunctions';

import Toaster from 'components/Toaster/Toaster';
import axios from 'axios';
import { Formik, Form } from 'formik';
import { IoMdArrowRoundBack } from 'react-icons/io';

import { categoryInitialValues, categoryValidationSchema } from 'data/data';
import ProtectedRoute from 'hooks/AuthHookAdmin';
import Loader from 'components/Loader/Loader';
import { Category } from 'types/interfaces';
import Cookies from 'js-cookie';
interface editCategoryNameType {
  name: string;
  description: string;
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
      ? { name: editCategory.title, description: editCategory.description }
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
  >({
    ...CategoryName,
    name: CategoryName?.name || '',
    description: CategoryName?.description || '',
    Images_Alt_Text: editCategory?.Images_Alt_Text ?? '',
    Canonical_Tag: editCategory?.Canonical_Tag ?? '',
    Meta_Title: editCategory?.Meta_Title ?? '',
    Meta_description: editCategory?.Meta_description ?? '',
  });

  const onSubmit = async (values: Category, { resetForm }: any) => {
    try {
      setloading(true);
      let posterImageUrl = posterimageUrl && posterimageUrl[0];
      let bannerImage = bannerImageUrl && bannerImageUrl[0];
      if (!posterImageUrl) throw new Error('Please select relevant Images');
      let { name, ...newValue } = {
        ...values,
        title: values.name,
        posterImage: posterImageUrl,
        bannerImage: bannerImage !== undefined ? bannerImage : null,
      };
      console.log(name, 'name');
      let updateFlag = CategoryName ? true : false;
      let addProductUrl = updateFlag
        ? `/api/categories/updateCategory/${editCategory.id} `
        : null;
      let url = `${process.env.NEXT_PUBLIC_BASE_URL}${
        updateFlag ? addProductUrl : '/api/categories/AddCategory'
      }`;
      console.log('newValues');
      console.log(newValue);
      let response;
      if (updateFlag) {
        response = await axios.put(url, newValue, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        response = await axios.post(url, newValue, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
      console.log(response, 'response');
      setloading(false);
      Toaster(
        'success',
        updateFlag
          ? 'Category has been sucessufully updated !'
          : 'Category has been sucessufully Created !',
      );
      updateFlag ? seteditCategory(null) : null;
      setposterimageUrl(null);
      setBannerImageUrl(null);

      resetForm();
      setMenuType('Categories');
    } catch (err) {
      console.log('error occurred', err);
      setloading(false);
    }
  };

  console.log(setEditCategoryName, 'setEditCategoryName');

  useLayoutEffect(() => {
    const CategoryHandler = async () => {
      try {
        if (!editCategory) return;

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
        } = editCategory as any;

        console.log('Reach add product now edit');
        console.log(
          editCategory,
          posterImage,
          imageUrls,
          _id,
          createdAt,
          updatedAt,
          CategoryId,
          SubCategoryId,
          __v,
          ...EditInitialProductValues,
        );
      } catch (err) {
        console.log(err, 'err');
      }
    };

    CategoryHandler();
  }, []);

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
        className="text-lg font-black mb-4 flex items-center justify-center gap-2  w-fit p-2 cursor-pointer text-black dark:text-white"
        onClick={() => {
          setMenuType('Categories');
        }}
      >
        <IoMdArrowRoundBack /> Back
      </p>

      <Formik
        initialValues={
          editCategoryName ? editCategoryName : categoryInitialValues
        }
        validationSchema={categoryValidationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form onSubmit={formik.handleSubmit}>
              <div className="flex justify-center ">
                <div className="flex flex-col gap-9 w-2/5 dark:border-strokedark dark:bg-lightdark rounded-md">
                  <div className="rounded-md  bg-white   dark:bg-lightdark p-4">
                    <div className="rounded-sm border border-stroke bg-white  dark:border-strokedark dark:bg-lightdark">
                      <div className="border-b border-stroke py-4 px-4 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-white">
                          Add Category Images
                        </h3>
                      </div>
                      {posterimageUrl && posterimageUrl.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                          {posterimageUrl.map((item: any, index) => {
                            return (
                              <div key={index}>
                                <div className="relative group rounded-lg overflow-hidden shadow-md bg-white  transform transition-transform duration-300 hover:scale-105">
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
                      <div className="border-b border-stroke py-4 px-4 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-white">
                          Banner Images for Blogs
                        </h3>
                      </div>
                      {bannerImageUrl && bannerImageUrl.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                          {bannerImageUrl.map((item: any, index) => {
                            return (
                              <div key={index}>
                                <div className="relative group rounded-lg overflow-hidden shadow-md bg-white  transform transition-transform duration-300 hover:scale-105">
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

                    <div className="flex flex-col space-y-3 mt-2">
                      <div>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                          Category Title
                        </label>
                        <input
                          type="text"
                          name="name"
                          onChange={formik.handleChange}
                          value={formik.values.name}
                          placeholder="Title"
                          className={`w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                            formik.touched.name && formik.errors.name
                              ? 'border-red-500'
                              : ''
                          }`}
                        />
                        {formik.touched.name && formik.errors.name ? (
                          <div className="text-red-500 text-sm">
                            {formik.errors.name}
                          </div>
                        ) : null}
                      </div>

                      <div>
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                          Category Description
                        </label>
                        <textarea
                          name="description"
                          onChange={formik.handleChange}
                          value={formik.values.description}
                          placeholder="Description"
                          className={`w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                            formik.touched.name && formik.errors.name
                              ? 'border-red-500'
                              : ''
                          }`}
                        />
                        {formik.touched.name && formik.errors.name ? (
                          <div className="text-red-500 text-sm">
                            {formik.errors.name}
                          </div>
                        ) : null}
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
                  className="mt-4 px-8 py-2 bg-[#cdb7aa] text-white rounded "
                >
                  {loading ? <Loader color="#fff" /> : 'Submit'}
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
