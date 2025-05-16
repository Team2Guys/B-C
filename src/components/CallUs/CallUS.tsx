import Container from 'components/Res-usable/Container/Container'
import Image from 'next/image'
import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CallUS = () => {

   const initialValues = {
      name: '',
      email: '',
      phone: '',
   };

   const validationSchema = Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      phone: Yup.string().required('Required'),
   });

   const handleSubmit = (values: typeof initialValues) => {
      console.log('Form submitted:', values);
   };

   return (
      <div className='mb-16 bg-primary-foreground'>
         <Container className='py-10 lg:!p-16'>
            <div className='bg-primary grid grid-cols-1 sm:grid-cols-9 px-4 xsm:px-0'>
               <div className='relative sm:col-span-5 md:col-span-4 sm:h-[320px] xsm:px-8 sm:px-0'>
                  <Image src='/assets/images/callus/callus.png' fill className='!relative hidden sm:block' alt='call us image' />
                  <div className='sm:absolute top-0 w-full h-full pt-8 sm:py-6 lg:py-8 sm:ps-8 sm:pe-14 2xl:pe-20 flex flex-col justify-center gap-4 items-center sm:items-start sm:justify-between'>
                     <h4 className='text-center sm:text-start text-primary-foreground text-24 sm:text-28 xl:text-[40px] font-semibold font-robotoSerif leading-tight'>Having in Urgent Problem And Can’t Wait?</h4>
                     <div className='flex gap-4 items-center'>
                        <span>
                           <FiPhoneCall className='size-12 xl:size-16 text-primary-foreground' />
                        </span>
                        <div className='flex flex-col text-primary-foreground'>
                           <p className='text-md xl:text-xl font-medium font-robotoSerif'>Call Us Any Time</p>
                           <p className='text-lg xl:text-2xl font-bold font-roboto'>04 252 2025</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='sm:col-span-4 md:col-span-5 flex items-center xsm:px-8 py-8 sm:pe-6 lg:pe-8'>
                     <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        <Form className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 w-full">
                           {/* Name */}
                           <div>
                              <Field
                                 name="name"
                                 placeholder="Name"
                                 className="w-full text-10 xsm:text-sm md:text-base rounded-full px-4 md:px-6 py-3 border-2 text-primary-foreground font-medium font-robotoSerif border-primary-foreground bg-transparent placeholder-primary-foreground outline-none"
                              />
                              <ErrorMessage name="name" component="div" className="text-red-400 text-sm mt-1" />
                           </div>

                           {/* Email */}
                           <div>
                              <Field
                                 name="email"
                                 placeholder="Email"
                                 type="email"
                                 className="w-full text-10 xsm:text-sm md:text-base rounded-full px-4 md:px-6 py-3 border-2 text-primary-foreground font-medium font-robotoSerif border-primary-foreground bg-transparent placeholder-primary-foreground outline-none"
                              />
                              <ErrorMessage name="email" component="div" className="text-red-400 text-sm mt-1" />
                           </div>

                           {/* Phone Number */}
                           <div className="col-span-1">
                              <Field
                                 name="phone"
                                 placeholder="Phone Number"
                                 className="w-full text-10 xsm:text-sm md:text-base rounded-full px-4 md:px-6 py-3 border-2 text-primary-foreground font-medium font-robotoSerif border-primary-foreground bg-transparent placeholder-primary-foreground outline-none"
                              />
                              <ErrorMessage name="phone" component="div" className="text-red-400 text-sm mt-1" />
                           </div>

                           {/* Submit Button */}
                           <div className="col-span-1">
                              <button
                                 type="submit"
                                 className="w-full text-10 xsm:text-sm md:text-base rounded-full px-4 md:px-6 py-3 bg-primary-foreground text-primary font-semibold font-robotoSerif"
                              >
                                 Submit Now
                              </button>
                           </div>
                        </Form>
                     </Formik>
               </div>
            </div>
         </Container>
      </div>
   )
}

export default CallUS