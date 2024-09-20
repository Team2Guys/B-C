"use client";
import { Form, Formik } from 'formik';
import React, { useEffect, useState, SetStateAction } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import dynamic from 'next/dynamic'; // Import dynamic from Next.js
import { Select, Spin } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { ICategory } from 'types/types';
import { fetchCategories } from 'config/fetch';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class MyUploadAdapter {
  private loader: any;

  constructor(loader: any) {
    this.loader = loader;
  }

  upload(): Promise<{ default: string }> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve({ default: reader.result as string });
      };
      reader.onerror = reject;

      this.loader.file.then((file: File) => {
        reader.readAsDataURL(file);
      });
    });
  }

  abort(): void {}
}

function MyCustomUploadAdapterPlugin(editor: any) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
    return new MyUploadAdapter(loader);
  };
}

interface BlogProps {
  setMenuType: React.Dispatch<SetStateAction<string>>;
}

const AddBlogs: React.FC<BlogProps> = ({ setMenuType }) => {
  const {
    data: categories,
    error: categoryError,
    isLoading: categoryLoading,
  } = useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const handleChange = (value: string) => {
    console.log(`Selected category: ${value}`);
  };

  return (
    <>
      <p
        className="text-lg font-black mb-4 flex items-center justify-center gap-2 hover:bg-gray-200 w-fit p-2 cursor-pointer text-black dark:bg-black dark:text-white"
        onClick={() => setMenuType('Blog')}
      >
        <IoMdArrowRoundBack /> Back
      </p>

      <Formik
        initialValues={{
          title: '',
          category: '',
          content: '',
        }}
        onSubmit={(values) => {
          console.log('Submitted Values:', values);
        }}
      >
        {({ setFieldValue }) => (
          <Form className="mt-10 border bg-white rounded-md p-2 space-y-5">
            <div>
              <label className="mb-3 block text-16 font-medium text-black dark:text-white">
                Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                onChange={(e) => setFieldValue('title', e.target.value)}
              />
            </div>

            <div>
              <label className="mb-3 block text-16 font-medium text-black dark:text-white">
                Category
              </label>
              {categoryLoading ? (
                <Spin />
              ) : (
                <Select
                  className="w-full h-[48px] detail-otion font-bold border rounded-md"
                  placeholder="Select Category"
                  onChange={(value) => {
                    setFieldValue('category', value);
                    handleChange(value);
                  }}
                  notFoundContent={
                    categoryError
                      ? 'Error loading categories'
                      : 'No categories found'
                  }
                  options={categories?.map((category) => ({
                    value: category.title,
                    label: category.title,
                  })) || []}
                />
              )}
              {categoryError && (
                <div className="text-red-500">{categoryError.message}</div>
              )}
            </div>

            <CKEditor
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
              onChange={(event, editor) => {
                const data = editor.getData();
                setFieldValue('content', data);
              }}
            />

            <button
              type="submit"
              className="text-white bg-primary px-4 py-2 font-semibold rounded-md"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddBlogs;
