'use client';
import { Form, Formik } from 'formik';
import React, { useState, SetStateAction, Fragment, useRef } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Select, Spin } from 'antd';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ICategory } from 'types/types';
import { fetchCategories } from 'config/fetch';
import Imageupload from 'components/ImageUpload/Imageupload';
import axios from 'axios';
import showToast from 'components/Toaster/Toaster';
import Loader from 'components/Loader/Loader';
import { Button } from 'components/ui/button';
import { UpdateBlog as IUpdateBlog, UpdateBlog } from 'types/interfaces';
import { RxCross2 } from 'react-icons/rx';
import { ImageRemoveHandler } from 'utils/helperFunctions';
import Image from 'next/image';
import MyEditor from './custom-editor';
import Cookies from 'js-cookie';
import revalidateTag from 'components/ServerActons/ServerAction';

interface IAddBlogs {
  setMenuType: React.Dispatch<SetStateAction<string>>;
  EditInitialValues?: IUpdateBlog;
  setEditBlog: React.Dispatch<SetStateAction<UpdateBlog | null>>;
}

const AddBlogs = ({
  setMenuType,
  EditInitialValues,
  setEditBlog,
}: IAddBlogs) => {
  const [posterimageUrl, setposterimageUrl] = useState<any[] | null>(
    EditInitialValues ? [EditInitialValues.posterImage] : [],
  );
  const [isPublish, setIsPublish] = useState(false);

  const token = Cookies.get('2guysAdminToken');
  const superAdminToken = Cookies.get('superAdminToken');
  let finalToken = token ? token : superAdminToken;
  const headers = {
    authorization: `Bearer ${finalToken}`,
  };

  const blogInitialValues = {
    title: EditInitialValues?.title || '',
    category: EditInitialValues?.category || '',
    content: EditInitialValues?.content || '',
    Images_Alt_Text: EditInitialValues?.Images_Alt_Text || '',
    Canonical_Tag: EditInitialValues?.Canonical_Tag || '',
    Meta_Title: EditInitialValues?.Meta_Title || '',
    Meta_description: EditInitialValues?.Meta_description || '',
    // isPublished: EditInitialValues?.Meta_description || '',
  };
  const queryClient = useQueryClient();
console.log(EditInitialValues, "EditInitialValues")

  const {
    data: categories,
    error: categoryError,
    isLoading: categoryLoading,
  } = useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const addBlogMutation = useMutation({
    mutationFn: async(formData: typeof blogInitialValues) => {
      let posterImage = posterimageUrl && posterimageUrl[0];
      if (!posterImage) {
        if (isPublish) {
          showToast('error', 'Please select Thumnail image😴');
          throw new Error('No poster image selected');
        } else {
          setposterimageUrl([]);
        }
      }

      const values = { ...formData, posterImage };
      if (EditInitialValues) {
        const updatedAt = new Date();
        const finalValues = { updatedAt, isPublished: isPublish, ...values };

      await axios.put(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/update/${EditInitialValues.id}`,
          finalValues,
          { headers },
        );
      revalidateTag('blogs');
      return  

      }

       await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/create_blog`,
        values,
        { headers },
      );

      revalidateTag('blogs');
      
    },

    onSuccess: () => {
      if (isPublish) {
      revalidateTag('blogs');

        setMenuType('Blogs');
        showToast(
          'success',
          EditInitialValues
            ? 'Blog updated successfully🎉'
            : 'Blog added successfully🎉',
        );
        setEditBlog(null);
        //@ts-expect-error
        queryClient.invalidateQueries(['blogs']);

      } else {
        showToast('success', 'Blog saved as Draft🎉');
      }
    },
    onError: (error: any) => {
      showToast('error', error.data.message + '☹');
      console.error('Error adding blog:', error);
    },
  });

  // eslint-disable-next-line no-undef
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleDebouncedMutation = (newValues: typeof blogInitialValues) => {
    if (typingTimeout.current) {
      clearTimeout(typingTimeout.current);
    }

    typingTimeout.current = setTimeout(() => {
      addBlogMutation.mutate(newValues);
    }, 2000);
  };

  return (
    <Fragment>
      <p
        className="text-lg font-black mb-4 flex items-center justify-center gap-2  w-fit p-2 cursor-pointer text-black  dark:text-white"
        onClick={() => {
          setMenuType('Blogs');
          setEditBlog(null);
        }}
      >
        <IoMdArrowRoundBack /> Back{' '}
      </p>

      {categoryLoading ? (
        <div className="animate-pulse space-y-5 bg-gray-300 p-4 rounded-lg">
          <div className="h-24 w-full bg-gray-400 rounded-md"></div>
          <div className="h-12 w-full bg-gray-400 rounded-md"></div>
          <div className="h-12 w-full bg-gray-400 rounded-md"></div>
          <div className="h-40 w-full bg-gray-400 rounded-md"></div>
          <div className="h-12 w-1/4 bg-gray-400 rounded-md"></div>
        </div>
      ) : (
        <Formik
          initialValues={blogInitialValues}
          onSubmit={(values, { resetForm }) => {
            if (isPublish) {
              if (
                values.content === '' ||
                values.category === '' ||
                values.title === ''
              ) {
                return showToast('warn', 'Ensure all fields are filled out 😴');
              }
            }

            addBlogMutation.mutate(values, {
              onSuccess: () => {
                resetForm();
              },
            });
          }}
        >
          {({ setFieldValue, values }) => (
            <Form className="mt-10  bg-white rounded-md p-2 space-y-5 dark:bg-lightdark md:p-4">
              <div className="rounded-sm border border-stroke bg-white dark:bg-lightdark">
                <div className="border-b border-stroke py-4 px-4 ">
                  <h3 className="font-medium text-black dark:text-white">
                    Add Thumbnail
                  </h3>
                </div>

                {(posterimageUrl && posterimageUrl?.length > 0) && posterimageUrl.some((item)=>Object.keys(item).length > 0) ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
                    {posterimageUrl.map((item: any, index) => (
                      <div
                        className="relative group rounded-lg overflow-hidden shadow-md bg-white dark:bg-lightdark transform transition-transform duration-300 hover:scale-105 w-[100px]"
                        key={index}
                      >
                        <div className="absolute top-1 right-1 invisible group-hover:visible text-red-600 bg-white dark:bg-lightdark rounded-full">
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
                          className="object-cover w-[100px]"
                          width={120}
                          height={120}
                          src={item?.imageUrl}
                          alt={`productImage-${index}`}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <Imageupload setposterimageUrl={setposterimageUrl} />
                )}
              </div>

              <div>
                <label className=" block text-16 font-medium text-black dark:text-white">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={values.title}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent placeholder:text-lightgrey px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  onChange={(e) => {
                    setFieldValue('title', e.target.value);
                    handleDebouncedMutation({
                      ...values,
                      title: e.target.value,
                    });
                  }}
                />
              </div>

              <div>
                <label className=" block text-16 font-medium text-black dark:text-white">
                  Category
                </label>
                {categoryLoading ? (
                  <Spin />
                ) : (
                  <Select
                    className="w-full h-[48px] detail-option  border rounded-md "
                    placeholder="Select Category"
                    value={values.category}
                    onChange={(value) => {
                      setFieldValue('category', value);
                      handleDebouncedMutation({ ...values, category: value });
                    }}
                    notFoundContent={
                      categoryError
                        ? 'Error loading categories'
                        : 'No categories found'
                    }
                    options={[
                      { value: '', label: 'Select Category', disabled: true },
                      ...(categories
                        ?.filter((category) => category.title !== 'Commercial')
                        .map((category) => ({
                          value: category.title,
                          label: category.title,
                        })) || []),
                    ]}
                  />
                )}
                {categoryError && (
                  <div className="text-red-500">{categoryError.message}</div>
                )}
              </div>

              {/* <CKEditor
            editor={ClassicEditor}
            config={{
              extraPlugins: [MyCustomUploadAdapterPlugin],
              toolbar: [
                'undo',
                'redo',
                '|',
                'heading',
                'fontSize',
                'fontFamily',
                'bold',
                'italic',
                'underline',
                'strikethrough',
                'alignment',
                'numberedList',
                'bulletedList',
                'blockQuote',
                'link',
                'imageUpload',
                'insertTable',
                'mediaEmbed',
                'highlight',
                'horizontalLine',
                'sourceEditing',
              ],
              image: {
                toolbar: [
                  'imageTextAlternative',
                  'imageStyle:full',
                  'imageStyle:side',
                ],
              },
            }}
            data={values.content}
            onChange={(event, editor) => {
              const data = editor.getData();
              setFieldValue('content', data);
            }}
          /> */}
              <MyEditor
                setFieldValue={setFieldValue}
                values={values}
                addBlogMutation={addBlogMutation}
                handleDebouncedMutation={handleDebouncedMutation}
              />

              <div>
                <label className=" block text-16 font-medium text-black dark:text-white">
                  Meta Title
                </label>
                <input
                  type="text"
                  name="Meta_Title"
                  placeholder="Enter Meta Title"
                  value={values.Meta_Title}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent placeholder:text-lightgrey px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  onChange={(e) => {
                    setFieldValue('Meta_Title', e.target.value);
                    handleDebouncedMutation({
                      ...values,
                      Meta_Title: e.target.value,
                    });
                  }}
                />
              </div>
              <div>
                <label className=" block text-16 font-medium text-black dark:text-white">
                  Canonical Tag
                </label>
                <input
                  type="text"
                  name="Canonical_Tag"
                  placeholder="Enter Canonical Tag"
                  value={values.Canonical_Tag}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent placeholder:text-lightgrey px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  onChange={(e) => {
                    setFieldValue('Canonical_Tag', e.target.value);
                    handleDebouncedMutation({
                      ...values,
                      Canonical_Tag: e.target.value,
                    });
                  }}
                />
              </div>
              <div>
                <label className=" block text-16 font-medium text-black dark:text-white">
                  Meta Description
                </label>
                <textarea
                  name="Meta_description"
                  placeholder="Enter Meta Description"
                  value={values.Meta_description}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent placeholder:text-lightgrey px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  onChange={(e) => {
                    setFieldValue('Meta_description', e.target.value);
                    handleDebouncedMutation({
                      ...values,
                      Meta_description: e.target.value,
                    });
                  }}
                />
              </div>
              <div>
                <label className=" block text-16 font-medium text-black dark:text-white">
                  Image ALT text
                </label>
                <input
                  type="text"
                  name="Images_Alt_Text"
                  placeholder="Enter Image ALT text"
                  value={values.Images_Alt_Text}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent placeholder:text-lightgrey px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  onChange={(e) => {
                    setFieldValue('Images_Alt_Text', e.target.value);
                    handleDebouncedMutation({
                      ...values,
                      Images_Alt_Text: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="flex justify-between">
                <Button
                  disabled={addBlogMutation.isPending  || !EditInitialValues?.isPublished ? true : false}
                  type="submit"
                  className={`text-white ${EditInitialValues?.isPublished ? "bg-yellow-500" : "bg-gray-500"}   px-4 py-2 font-semibold rounded-md`}
                >
                  {addBlogMutation.isPending && !EditInitialValues?.isPublished  ? (
                    <Loader color="#fff" />
                  ) : (
                    'Draft'
                  )}
                </Button>
                <Button
                  disabled={addBlogMutation.isPending || EditInitialValues?.isPublished ? true : false}
                  type="submit"
                  className={`text-white  ${EditInitialValues?.isPublished ? "bg-gray-400 cursor-default" : "bg-green-600" } px-4 py-2 font-semibold rounded-md`}
                  onClick={() => setIsPublish(true)}
                >
                  {addBlogMutation.isPending && EditInitialValues?.isPublished  && isPublish? (
                    <Loader color="#fff" />
                  ) : (
                    'PUBLISH'
                  )}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </Fragment>
  );
};

export default AddBlogs;