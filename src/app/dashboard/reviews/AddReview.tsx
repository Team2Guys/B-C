"use client"
import React, { SetStateAction, useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import Imageupload from 'components/ImageUpload/Imageupload';

import { handleImageAltText, ImageRemoveHandler } from 'utils/helperFunctions';
import Image from 'next/image';
import { RxCross2 } from 'react-icons/rx';

import { IoMdArrowRoundBack } from 'react-icons/io';
import revalidateTag from 'components/ServerActons/ServerAction';
import showToast from 'components/Toaster/Toaster';
import { ProductImages } from 'types/types';
import { createReview, updateReview } from 'config/fetch';
import { initiValuesProps, IREVIEWS,  } from 'types/general';



interface I_Add_Review {
  setEditsetReview: React.Dispatch<SetStateAction<IREVIEWS | undefined>>
  setselecteMenu: React.Dispatch<SetStateAction<string>>,
  editReview: IREVIEWS | undefined
}


function AddReview({ editReview, setEditsetReview, setselecteMenu }: I_Add_Review) {
  const [loading, setloading] = useState(false)

  const [posterimageUrl, setposterimageUrl] = useState<ProductImages[] | undefined>((editReview && editReview.posterImageUrl) ? [editReview.posterImageUrl] : undefined);
  const [formDate, setformDate] = useState<initiValuesProps>({
    name: editReview?.name,
    starRating: editReview?.starRating,
    ReviewsDescription: editReview?.ReviewsDescription,
    reviewDate: editReview?.reviewDate,

  })



  useEffect(() => {

    setformDate({
      name: editReview?.name,
      starRating: editReview?.starRating,
      ReviewsDescription: editReview?.ReviewsDescription,
      reviewDate: editReview?.reviewDate,

    })
  }, [editReview])


  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    ReviewsDescription: Yup.string().required('Description is required'),
    starRating: Yup.number()
      .min(1, 'Rating must be at least 1')
      .max(5, 'Rating must be at most 5')
      .nullable(),
    posterImageUrl: Yup.string().nullable(),
  });

  const apiHandler = async (values: initiValuesProps) => {
    try {
      setloading(true)
      const posterImageUrl = posterimageUrl && posterimageUrl[0];

      const payload = {
        ...values,
        posterImageUrl,
      };

      if (editReview?.name) {
        await updateReview({id:editReview.id, ...payload});

      } else {
       await createReview(payload);

      }

      setEditsetReview(undefined);
      setselecteMenu('All Reviews')
      revalidateTag("reviews")
    } //eslint-disable-next-line
catch (error:any) {
  const graphQLError = error?.graphQLErrors?.[0]?.message;
  showToast('error', graphQLError || "Internal server error")
    } finally{
      setloading(false)
    }
  };



  const handleSubmit = async (values: initiValuesProps, { resetForm }: FormikHelpers<initiValuesProps>) => {

  const posterImageUrl = posterimageUrl && posterimageUrl[0];
  console.log(values, 'values')
  const payload = {
    ...values,
    posterImageUrl: posterImageUrl
  };
  await apiHandler(payload)
  resetForm()
  


  };

  return (
    <>
      <p
        className="text-lg font-black mb-4 flex items-center justify-center gap-2 hover:bg-parimary bg-black rounded-sm w-fit p-2 cursor-pointer text-white"
        onClick={() => {
          setselecteMenu('All Reviews');
        }}
      >
        <IoMdArrowRoundBack /> Back
      </p>

      <Formik enableReinitialize initialValues={formDate} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {() => (


          <Form className="space-y-4 max-w-2xl mx-auto">

            <div className="rounded-sm border  bg-white dark:bg-primary border-stroke">
              <div className="border-b bg-white dark:bg-primary py-4 px-2 ">
                <h3 className="font-medium  text-black dark:text-white">
           Reviewer Image
                </h3>
              </div>
              {posterimageUrl && posterimageUrl.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4  dark:border-white dark:bg-black">
                  {posterimageUrl.map((item: ProductImages, index: number) => {

                    return (
                      <div
                        className="relative group rounded-lg overflow-hidden shadow-md bg-white transform transition-transform duration-300 hover:scale-105"
                        key={index}
                      >
                        <div className="absolute top-1 right-1 invisible group-hover:visible text-red bg-white rounded-full ">
                          <RxCross2
                            className="cursor-pointer text-red-500 dark:text-red-700"
                            size={17}
                            onClick={() => {
                              ImageRemoveHandler(
                                item.public_id || "",
                                setposterimageUrl,

                              );
                            }}
                          />
                        </div>

                        <Image
                          key={index}
                          className="object-cover w-full h-full dark:bg-black dark:shadow-lg cursor-crosshair"
                          width={300}
                          height={200}
                          src={item.imageUrl}
                          loading='lazy'
                          alt={`productImage-${index}`}
                        />

                        <input
                          className="border  mt-2 w-full rounded-md border-stroke px-2 text-14 py-2 focus:border-primary active:border-primary outline-none"
                          placeholder="Alt Text"
                          type="text"
                          name="altText"
                          value={item?.altText || ""}
                          onChange={(e) =>
                            handleImageAltText(
                              index,
                              String(e.target.value),
                              setposterimageUrl,
                              "altText"
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
            <div>
               <label className='primary-label' htmlFor="name">Name</label>
              <Field name="name" type="text" className="primary-input" />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
               <label className='primary-label' htmlFor="starRating">Star Rating</label>
              <Field name="starRating" type="number" className="primary-input" />
              <ErrorMessage name="starRating" component="div" className="text-red-500 text-sm" />
            </div>
            <div>
               <label className='primary-label' htmlFor="ReviewsDescription">Description</label>
              <Field name="ReviewsDescription" as="textarea" rows={4} className="primary-input" />
              <ErrorMessage name="ReviewsDescription" component="div" className="text-red-500 text-sm" />
            </div>

            <div className='flex flex-col gap-2'>
               <label className='primary-label' htmlFor="reviewDate">Review Date</label>
              <Field name="reviewDate" type="date" className="primary-input w-fit items-center" />
              <ErrorMessage name="reviewDate" component="div" className="text-red-500 text-sm" />
            </div>


            <button type="submit" className="dashboard_primary_button">
              {loading  ? "Submitting" : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </>

  )
}

export default AddReview


