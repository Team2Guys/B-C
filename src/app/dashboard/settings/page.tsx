'use client';
import React, { useState, useEffect } from 'react';
import Breadcrumb from 'components/Dashboard/Breadcrumbs/Breadcrumb';
import Image from 'next/image';
import DefaultLayout from 'components/Dashboard/Layouts/DefaultLayout';
import ProtectedRoute from 'hooks/AuthHookAdmin';
import { useAppSelector } from 'components/Others/HelperRedux';
import { uploadPhotosToBackend } from 'utils/helperFunctions';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useAppDispatch } from 'components/Others/HelperRedux';
import { loggedInAdminAction } from '../../../redux/slices/AdminsSlice';
import { ImageRemoveHandler } from 'utils/helperFunctions';
import { IMAGE_INTERFACE } from 'types/interfaces';
import { CiMail } from 'react-icons/ci';
import { Button } from 'components/ui/button';
import Loader from 'components/Loader/Loader';

const Settings = () => {
  const { loggedInUser }: any = useAppSelector((state) => state.usersSlice);
  const token = Cookies.get('2guysAdminToken');
  const dispatch = useAppDispatch();
  let AdminType = loggedInUser && loggedInUser.role == 'super-Admin';
  const [loading, setloading] = useState(false);


  const initialFormData = {
    fullname: loggedInUser ? `${loggedInUser.fullname}` : '',
  };


  const initialValue = {
    name: loggedInUser ? `${loggedInUser.email}` : '',
  };



  const [formData, setFormData] = useState(initialFormData);

  const [profilePhoto, setProfilePhoto] = useState<IMAGE_INTERFACE[]>([]);
  console.log(loggedInUser, 'loggedInUser');

  const handlePhotoChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      let imageUrl: any = await uploadPhotosToBackend([file]);

      imageUrl ? setProfilePhoto([imageUrl]) : null;
    }
  };

  const adminUpdateHandler = async () => {
    try {
      let initialFormData = {
        email: loggedInUser.email,
        fullname: formData.fullname,
        posterImageUrl: loggedInUser.posterImageUrl
      };

      if (loggedInUser) {
        let { fullname, posterImageUrl, ...extractedData } = loggedInUser;
        console.log(fullname,posterImageUrl, 'fullname');

        if (profilePhoto && profilePhoto.length > 0) {
          initialFormData = {
            ...initialFormData,
            posterImageUrl: profilePhoto[0],
          };
        }

        let combinedData = {
          ...initialFormData,
          ...extractedData,
        };

        let response: any = await axios.put(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/admins/editAdmin/${loggedInUser.id}`,
          combinedData,
          {
            headers: {
              Authorization: `Bearer ${token}`
              },
          },
        );
  console.log(response,"responseresponseresponseresponse")
        if (response.status === 200) {
          console.log('Admin updated successfully:', response.data);
        } else {
          console.error('Failed to update admin');
        }
      }




    } catch (error) {
      console.error('Error updating admin:', error);
    }
  };

  useEffect(() => {
    setFormData(initialFormData);
  }, [loggedInUser]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      setloading(true)
      await adminUpdateHandler();
      await AddminProfileTriggerHandler();
    } catch (err) {
      console.log(err, 'err');
    }finally{
      setloading(false)
    }
  };

  const AddminProfileTriggerHandler = async () => {
    try {
      let user: any = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/admins/get-admin-handler`,
        {
          headers: {
            Authorization: `Bearer ${token}`
            },
        },
      );
      dispatch(loggedInAdminAction(user.data));
    } catch (err: any) {
      console.log(err, 'err');
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (loggedInUser && loggedInUser.profilePhoto) {
      console.log(loggedInUser.profilePhoto, 'loggedInUser.profilePhoto');
      Object.keys(loggedInUser.profilePhoto).length > 0
        ? setProfilePhoto([loggedInUser.profilePhoto])
        : null;
    }
  }, [loggedInUser]);

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Settings" />
        <div className="flex flex-col gap-8">
          <div className="col-span-5 xl:col-span-2">
            <div className="rounded-sm  bg-white shadow-default  dark:bg-lightdark">
              <div className="border-b border-stroke px-7 py-4 ">
                <h3 className="font-medium text-black dark:text-white">
                  Profile Photo
                </h3>
              </div>
              <div className="px-7 py-5">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                  {
                   profilePhoto &&  profilePhoto.length > 0 ? 

                    profilePhoto.map((profilePhoto, index: number) => {
                      return (
                        <>
                          <div className="h-14 w-14 rounded-full overflow-hidden object-cover" key={index}>
                            <Image
                            className='h-14 w-14 rounded-full'
                              src={
                                profilePhoto && profilePhoto.imageUrl
                                  ? profilePhoto.imageUrl
                                  : '/images/dummy-avatar.jpg'
                              }
                              width={55}
                              height={55}
                              alt="User"
                            />
                          </div>

                          <div>
                            <span className="mb-1.5 text-black dark:text-white">
                              Edit your photo
                            </span>
                            <span className="flex gap-2.5">
                              <button
                                className="text-sm hover:text-primary text-black dark:text-white"
                                type="button"
                                onClick={() =>
                                  ImageRemoveHandler(
                                    profilePhoto?.public_id
                                      ? profilePhoto?.public_id
                                      : '',
                                    setProfilePhoto,
                                  )
                                }
                              >
                                Delete
                              </button>
                              <button
                                className="text-sm hover:text-primary text-black dark:text-white"
                                type="button"
                              >
                                Update
                              </button>
                            </span>
                          </div>
                        </>
                      );
                    })
                    :
                    <div className="h-14 w-14 rounded-full overflow-hidden object-cover" >
                      <Image
                      className="h-14 w-14 rounded-full"
                      src={
                        loggedInUser && loggedInUser.posterImageUrl
                          ? loggedInUser.posterImageUrl.imageUrl
                          : "/images/dummy-avatar.jpg"
                      }
                      width={55}
                      height={55}
                      alt="User"
                    />
                                 
                  </div>
                  }
      

                    {/* <div className="h-14 w-14 rounded-full overflow-hidden">
                      <Image
                        src={profilePhoto ? profilePhoto.imageUrl : '/images/dummy-avatar.jpg'}
                        width={55}
                        height={55}
                        alt="User"
                      />
                    </div>
                    <div>
                      <span className="mb-1.5 text-black dark:text-white">
                        Edit your photo
                      </span>
                      <span className="flex gap-2.5">
                        <button className="text-sm hover:text-primary text-black dark:text-white" type="button" disabled={AdminType}>
                          Delete
                        </button>
                        <button className="text-sm hover:text-primary text-black dark:text-white" type="button" disabled={AdminType}>
                          Update
                        </button>
                      </span>
                    </div> */}
                  </div>
                  <div className="relative mb-4 h-36 rounded-md border-dashed border-stroke dark:border-strokedark bg-gray dark:bg-meta-4">
                    <input
                      disabled={AdminType}
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center justify-center">
                      <span className="my-2 inline-block rounded-full bg-white border-primary border  p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="20"
                          height="20"
                        >
                          <path
                            fill="#c72031"
                            d="M10 16v-5h4v5h5l-7 7-7-7h5zm-4-16v2h12v-2h-12zm-4 4h20v2h-20v-2z"
                          />
                        </svg>
                      </span>
                      <p className="text-black dark:text-white text-sm">
                        <span className="text-primary dark:text-primary text-sm">
                          Click to upload
                        </span>{' '}
                        or drag and drop
                      </p>
                      <p className="mt-1.5 text-black dark:text-white text-sm">
                        SVG, PNG, JPG or GIF
                      </p>
                      <p className="text-black dark:text-white text-sm">
                        (max, 800 X 800px)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm  bg-white dark:bg-lightdark">
              <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Personal Information
                </h3>
              </div>
              <div className="p-7">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="mb-5 flex flex-col gap-5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      {/* Add additional form fields if needed */}
                    </div>
                  </div>

                  <div className="mb-5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="name"
                    >
                      Full Name
                    </label>
                    <input
                      disabled={AdminType}
                      className="w-full rounded border border-stroke bg-gray px-4 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-lightdark dark:text-white dark:focus:border-primary"
                      type="text"
                      name="fullname"
                      id="fullname"
                      placeholder="Full Name"
                      value={formData.fullname}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="emailAddress"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-4 text-black dark:text-white">
                        <CiMail
                          size={20}
                          className="text-black dark:text-white"
                        />
                      </span>
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 pl-11 pr-4 text-black dark:text-white dark:placeholder:text-white focus:border-primary focus-visible:outline-none  "
                        type="email"
                        name="emailAddress"
                        id="emailAddress"
                        placeholder="Email Address"
                        value={initialValue.name}
                        disabled={true}
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-4">
                    <Button
                      className="dark:bg-primary dark:text-white"
                      type="submit"
                      disabled={loading}
                    >
                     {loading ? <Loader color="white" /> :  "Save"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProtectedRoute(Settings);
