'use client';
import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import axios from 'axios';
import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import showToast from 'components/Toaster/Toaster';

interface ProductOptions {
  shutters?: boolean;
  curtains?: boolean;
  blinds?: boolean;
  roller_blinds?: boolean;
  wooden_blinds?: boolean;
  other_blinds?: boolean;
  plantation_bhutters?: boolean;
  others?: boolean;
}
interface IAppointments {
  name: string;
  phone_number: string;
  area: string;
  email: string;
  whatsapp_number: string;
  windows: string;
  prefered_Date: Date;
  prefered_contact_method: string[];
  how_user_find_us: string;
  user_query: string;
  product_type: string[];
  other: string;
  prefered_time: string;
}

interface ContactMethods {
  email: boolean;
  telephone: boolean;
  whatsapp: boolean;
}

interface AppointmentProps {
  singlePage?: boolean;
  className?: string;
}

const BookAppointment: React.FC<AppointmentProps> = ({
  singlePage,
  className,
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const PostAppointments = async (appointmentData: IAppointments) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/appointments/AddAppointment`,
        appointmentData,
      );
      return response.data;
    } catch (error: any) {
      showToast('error', error.message || JSON.stringify(error));
    }
  };

  const getInitialSelectedOptions = (): ProductOptions => {
    if (singlePage) {
      return {
        curtains: false,
        blinds: false,
        roller_blinds: false,
        wooden_blinds: false,
        other_blinds: false,
        plantation_bhutters: false,
        others: false,
      };
    } else {
      return {
        shutters: false,
        curtains: false,
        blinds: false,
      };
    }
  };

  const [selectedOptions, setSelectedOptions] = useState<ProductOptions>(
    getInitialSelectedOptions(),
  );

  const [contactMethods, setContactMethods] = useState<ContactMethods>({
    email: false,
    telephone: false,
    whatsapp: false,
  });

  const formInitialValues = {
    name: '',
    phone_number: '',
    area: '',
    email: '',
    whatsapp_number: '',
    windows: '',
    prefered_Date: new Date(),
    prefered_contact_method: contactMethods,
    how_user_find_us: '',
    user_query: '',
    productoption: selectedOptions,
    other: '',
    prefered_time: '',
  };

  const [formData, setFormData] = useState(formInitialValues);
  const [wordCount, setWordCount] = useState(0);
  const [errors, setErrors] = useState({
    name: '',
    phone_number: '',
    email: '',
    windows: '',
    area: '',
  });

  const handleCheckboxChange = (option: keyof ProductOptions) => {
    setSelectedOptions((prevOptions) => {
      const updatedOptions = { ...prevOptions, [option]: !prevOptions[option] };
      setFormData({
        ...formData,
        productoption: updatedOptions,
      });
      return updatedOptions;
    });
  };

  const handleChangeContact = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const updatedContactMethods = {
      ...contactMethods,
      [name]: checked,
    };
    setContactMethods(updatedContactMethods);
    setFormData({
      ...formData,
      prefered_contact_method: updatedContactMethods,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (date >= today) {
        setFormData({ ...formData, prefered_Date: date });
      } else {
        alert('Please select a date that is today or later.');
      }
    }
  };

  const validate = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      phone_number: '',
      email: '',
      windows: '',
      area: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
    } else if (/\d/.test(formData.name)) {
      newErrors.name = 'Name cannot contain numbers.';
      isValid = false;
    }

    if (!formData.phone_number.trim()) {
      newErrors.phone_number = 'Phone number is required.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
      isValid = false;
    }

    if (!formData.windows.trim()) {
      newErrors.windows = 'Select Windows is required.';
      isValid = false;
    }

    if (!formData.area.trim()) {
      newErrors.area = 'Address  is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      try {
        setLoading(true);
        const {
          productoption,
          prefered_contact_method,
          prefered_time,
          ...withoutproductoption
        } = formData;
        console.log(
          productoption,
          prefered_contact_method,
          prefered_time,
          withoutproductoption,
        );
        let productTypeArray: any = Object.keys(formData.productoption)
          .map((item) => {
            const key = item as keyof ProductOptions;
            if (formData.productoption[key]) return item;
          })
          .filter((item) => item !== undefined);

        let prefered_contact_method_list: any = Object.keys(
          formData.prefered_contact_method,
        )
          .map((item) => {
            const key = item as keyof ContactMethods;
            if (formData.prefered_contact_method[key]) return item;
          })
          .filter((item) => item !== undefined);

        const response = await PostAppointments({
          ...withoutproductoption,
          prefered_time,
          prefered_contact_method: prefered_contact_method_list,
          product_type: productTypeArray,
        });
        console.log('response:', response);
        toast.success('Appointment submitted successfully!');
        setFormData(formInitialValues);
      } catch (error) {
        toast.error('Failed to submit the appointment. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  const preferTimeOptions = [
    { value: 'am', label: 'AM' },
    { value: 'pm', label: 'PM' },
  ];

  const referralOptions = [
    { value: 'google', label: 'Google' },
    { value: 'Facebook', label: 'Facebook' },
    { value: 'Instagram', label: 'Instagram' },
    { value: 'TikTok', label: 'TikTok' },
    { value: 'Friends', label: 'Friends' },
    { value: 'Returning Customers', label: 'Returning Customers' },
    { value: 'Radio', label: 'Radio' },
    { value: 'Others', label: 'Others' },
  ];

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    if (value.length <= 350) {
      handleSelectChange('user_query', value);
      setWordCount(value.length);
    }
  };

  return (
    <div
      className={`bg-white  text-left text-black ${className} ${singlePage ? 'w-full rounded-lg px-3 py-4' : 'xl:w-5/12 py-4 bg-white drop-shadow-md rounded-xl  mt-5'}`}
    >
      {!singlePage && (
        <h3 className="font-bold text-lg text-center tracking-[5px] uppercase">
          Book a free appointment
        </h3>
      )}
      <form
        onSubmit={handleSubmit}
        className={` bg-white rounded-md ${singlePage ? 'w-full p-4 ' : ' px-4 py-2'}`}
      >
        <div
          className={`xs:grid  mb-3 ${singlePage ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-6' : 'grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-5'}`}
        >
          <div>
            <label htmlFor="name" className="block text-11 font-light ">
              Name *
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Full Name"
              id="name"
              className={`mt-1 h-9 px-2 border border-gray-300 w-full rounded text-11 ${errors.name ? 'border-red-500' : ''}`}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone_number"
              className="block text-11 font-light mb-1 "
            >
              Phone Number *
            </label>
            {/* <div className='border flex items-center px-1 h-9  border-gray-300 w-full rounded text-11 outline-none'>
              <div className='w-2/12'>
              <Image width={25} height={25} src={"/assets/images/aedflag.png"} alt='flag'/>
              </div>
              <div className='w-10/12 px-[2px]'>
              <input className='h-8 m-[1px] border  w-full' type='text' />
              </div>
            </div> */}
            <PhoneInput
              className="mt-1 h-9 p-2 border border-gray-300 w-full rounded text-11 outline-none"
              international
              defaultCountry="AE"
              limitMaxLength
              countryCallingCodeEditable={false}
              value={formData.phone_number}
              onChange={(phone: any) =>
                setFormData({ ...formData, phone_number: phone })
              }
            />
            {errors.phone_number && (
              <p className="text-red-500 text-xs">{errors.phone_number}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-11 font-light ">
              E-Mail *
            </label>
            <input
              type="email"
              placeholder="Enter Your E-Mail"
              name="email"
              id="email"
              className={`mt-1 h-9 px-2 border border-gray-300 w-full rounded text-11 ${errors.email ? 'border-red-500' : ''}`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>
          <div className="relative overflow-hidden">
            <label
              htmlFor="whatsapp_number"
              className="block text-11 font-light mb-1 "
            >
              WhatsApp No. If Different
            </label>
            <PhoneInput
              className="mt-1 h-9 p-2 border border-gray-300 w-full rounded text-11 outline-none"
              international
              defaultCountry="AE"
              limitMaxLength
              countryCallingCodeEditable={false}
              value={formData.whatsapp_number}
              onChange={(phone: any) =>
                setFormData({ ...formData, whatsapp_number: phone })
              }
            />
          </div>
          <div>
            <label htmlFor="windows " className="block text-11 font-light ">
              How Many Windows *
            </label>
            <input
              type="number"
              placeholder="Enter No of Windows"
              name="windows"
              id="windows"
              className={`mt-1 h-9 px-2 border border-gray-300 w-full rounded text-11 ${errors.windows ? 'border-red-500' : ''}`}
              value={formData.windows}
              onChange={handleChange}
            />
            {/* <Select
              options={windowOptions}
              defaultInputValue="How Many Windows?"
              onChange={(option) =>
                handleSelectChange('windows', option?.value || '')
              }
              value={windowOptions.find(
                (option) => option.value === formData.windows,
              )}
              className={`mt-1 w-full text-11 ${errors.windows ? 'border-red-500' : ''}`}
            /> */}
            {errors.windows && (
              <p className="text-red-500 text-xs">{errors.windows}</p>
            )}
          </div>
          <div className="w-full custom-datepicker">
            <label
              htmlFor="preferredDate"
              className="block text-11 font-light "
            >
              Preferred Data
            </label>

            <DatePicker
              selected={formData.prefered_Date}
              onChange={handleDateChange}
              className="h-[38px] mt-1 w-full text-11 border p-2 rounded-md border-[#D1D5DB]"
              dateFormat="dd/MM/yy" // Set date format to DD/MM/YY
              minDate={new Date()} // Disable past dates
            />
          </div>
          <div className="w-full custom-datepicker">
            <label
              htmlFor="preferredTime"
              className="block text-11 font-light "
            >
              Preferred Time
            </label>
            <Select
              instanceId="window-options-select"
              options={preferTimeOptions}
              defaultValue={preferTimeOptions.find(
                (option) => option.value === 'pm',
              )}
              onChange={(option: any) =>
                handleSelectChange('prefered_time', option?.value || '')
              }
              value={preferTimeOptions.find(
                (option) => option.value === formData.prefered_time,
              )}
              className="mt-1 w-full text-11"
            />
            {/* <DatePicker
              selected={
                formData.prefered_time ? new Date(formData.prefered_time) : null
              }
              placeholderText="AM/PM"
              onChange={handletimeChange}
              showTimeSelect
              showTimeSelectOnly
              dateFormat="h:mm aa"
              className="h-[38px] mt-1 w-full text-11 border p-2 rounded-md border-[#D1D5DB]"
            /> */}
          </div>
          <div
            className={`w-full   ${singlePage ? 'col-span-4' : 'xl:col-span-2 2xl:col-span-1 '}`}
          >
            <label
              htmlFor="how_user_find_us"
              className="block text-11 font-light "
            >
              How Did You Hear About Us?
            </label>
            <Select
              instanceId="window-options-select"
              options={referralOptions}
              onChange={(option: any) =>
                handleSelectChange('how_user_find_us', option?.value || '')
              }
              value={referralOptions.find(
                (option) => option.value === formData.how_user_find_us,
              )}
              className="mt-1 w-full text-11"
            />
          </div>
          <div
            className={`w-full   ${singlePage ? 'col-span-4' : 'col-span-3'}`}
          >
            <label htmlFor="Address " className="block text-11 font-light ">
              Address *
            </label>
            <input
              type="text"
              name="area"
              placeholder="Enter Your Address"
              id="area"
              className={`mt-1 h-9 p-2 border border-gray-300 w-full rounded text-11 ${errors.name ? 'border-red-500' : ''}`}
              value={formData.area}
              onChange={handleChange}
              // required
            />

            {errors.area && (
              <p className="text-red-500 text-xs">{errors.area}</p>
            )}
          </div>
        </div>
        {!singlePage && (
          <div className="flex flex-wrap justify-between gap-2 mb-3">
            <div className=" p-2 bg-white rounded-md">
              <h2 className="text-11 font-light mb-3">
                Tell us what you need:
              </h2>

              <div className="flex flex-row flex-wrap sm:flex-nowrap gap-2 sm:gap-4">
                <div>
                  <label className="flex items-center text-11 text-[#898989]">
                    <input
                      type="checkbox"
                      checked={selectedOptions.blinds}
                      onChange={() => handleCheckboxChange('blinds')}
                      className="mr-2 appearance-none w-4 h-4 border-2 border-secondary flex justify-center items-center rounded-sm checked:bg-secondary checked:border-secondary checked:before:content-['✔'] checked:before:text-white"
                    />
                    Blinds
                  </label>
                </div>

                <div>
                  <label className="flex items-center text-11 text-[#898989]">
                    <input
                      type="checkbox"
                      checked={selectedOptions.curtains}
                      onChange={() => handleCheckboxChange('curtains')}
                      className="mr-2 appearance-none w-4 h-4 border-2 border-secondary flex justify-center items-center rounded-sm checked:bg-secondary checked:border-secondary checked:before:content-['✔'] checked:before:text-white"
                    />
                    Curtains
                  </label>
                </div>
                <div>
                  <label className="flex items-center text-11 text-[#898989]">
                    <input
                      type="checkbox"
                      checked={selectedOptions.shutters}
                      onChange={() => handleCheckboxChange('shutters')}
                      className="mr-2 appearance-none w-4 h-4 border-2 border-secondary flex justify-center items-center rounded-sm checked:bg-secondary checked:border-secondary checked:before:content-['✔'] checked:before:text-white"
                    />
                    Shutters
                  </label>
                </div>
              </div>
            </div>
            <div className="p-2 rounded-md">
              <h2 className="text-11 font-light mb-3">
                How shall we contact you?
              </h2>
              <div className="flex flex-wrap sm:flex-nowrap flex-row gap-2 mt-2">
                <label className="flex items-center text-11 text-[#898989]">
                  <input
                    type="checkbox"
                    name="whatsapp"
                    checked={contactMethods.whatsapp}
                    onChange={handleChangeContact}
                    className="mr-2 appearance-none w-4 h-4 border-2 border-secondary flex justify-center items-center rounded-sm checked:bg-secondary checked:border-secondary checked:before:content-['✔'] checked:before:text-white"
                  />
                  WhatsApp
                </label>

                <label className="flex items-center text-11 text-[#898989]">
                  <input
                    type="checkbox"
                    name="telephone"
                    checked={contactMethods.telephone}
                    onChange={handleChangeContact}
                    className="mr-2 appearance-none w-4 h-4 border-2 border-secondary flex justify-center items-center rounded-sm checked:bg-secondary checked:border-secondary checked:before:content-['✔'] checked:before:text-white"
                  />
                  Telephone
                </label>
                <label className="flex items-center text-11 text-[#898989]">
                  <input
                    type="checkbox"
                    name="email"
                    checked={contactMethods.email}
                    onChange={handleChangeContact}
                    className="mr-2 appearance-none w-4 h-4 border-2 border-secondary flex justify-center items-center rounded-sm checked:bg-secondary checked:border-secondary checked:before:content-['✔'] checked:before:text-white"
                  />
                  Email
                </label>
              </div>
            </div>
          </div>
        )}
        {singlePage && (
          <>
            <div className="w-full  mx-auto my-6">
              <label className="block text-11 font-light ">
                Window Dressing Type
              </label>
              <div className="flex flex-row flex-wrap md:flex-nowrap justify-start md:justify-between gap-5 mt-2">
                {Object.keys(selectedOptions).map((option) => (
                  <div
                    key={option}
                    className="flex items-center whitespace-nowrap"
                  >
                    <input
                      type="checkbox"
                      id={option}
                      name={option}
                      className="appearance-none w-4 h-4 border-2 border-secondary flex justify-center items-center rounded-sm checked:bg-secondary checked:border-secondary checked:before:content-['✔'] checked:before:text-white checked:before:text-xs"
                      checked={selectedOptions[option as keyof ProductOptions]}
                      onChange={() =>
                        handleCheckboxChange(option as keyof ProductOptions)
                      }
                    />
                    <label htmlFor={option} className="ml-2 text-11">
                      {option.replace('_', ' ').toUpperCase()}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="flex flex-col mt-4">
              <label htmlFor="form-textarea" className="text-13 font-light">
                What is your query regarding?
              </label>
              <textarea
                name="other"
                id="other"
                value={formData.other}
                onChange={handleChange}
                className="border border-[#D1D5DB] h-64 rounded-md mt-1"
              ></textarea>
            </div> */}
          </>
        )}

        <div className={`w-full   ${singlePage ? 'col-span-4' : 'col-span-3'}`}>
          <label htmlFor="user_query" className="block text-11 font-light ">
            Any Other Requirements
          </label>
          <textarea
            id="user_query"
            name="user_query"
            value={formData.user_query}
            onChange={handleInputChange}
            className="mt-1 w-full text-11 border p-2 rounded-md border-[#D1D5DB]"
            placeholder="Enter your query (max 350 characters)"
            rows={2}
          />
          {wordCount > 0 && (
            <div className="text-sm text-gray-400 mt-1">
              {wordCount}
              {/* /350 words */}
            </div>
          )}

          {/* <Select
              options={queryOptions}
              onChange={(option) =>
                handleSelectChange('user_query', option?.value || '')
              }
              value={queryOptions.find(
                (option) => option.value === formData.user_query,
              )}
              className="mt-1 w-full text-11"
            /> */}
        </div>

        <div className="text-center mt-4">
          <button
            type="submit"
            className="w-fit bg-secondary hover:bg-primary text-white py-2 px-8 sm:px-14 rounded"
            disabled={loading}
          >
            {loading ? <Loader color="#fff" /> : 'Submit Request'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookAppointment;
