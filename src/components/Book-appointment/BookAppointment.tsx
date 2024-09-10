'use client';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { City } from 'country-state-city';

import axios from 'axios';
import Loader from 'components/Loader/Loader';

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
  prefered_time: string
}

interface ContactMethods {
  email: boolean;
  telephone: boolean;
  whatsapp: boolean;
}

interface AppointmentProps {
  singlePage?: boolean;
}

const BookAppointment: React.FC<AppointmentProps> = ({ singlePage }) => {
  const [loading, setLoading] = useState<boolean>(false)

  const PostAppointments = async (appointmentData: IAppointments) => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/appointments/AddAppointment`, appointmentData);
    return response.data;
  };
  const [uaeCities, setUaeCities] = useState<Array<{ value: string; label: string }>>([]);

  useEffect(() => {
    const fetchCities = async () => {
      const cities = await City.getCitiesOfCountry('AE');
      if (cities) {
        setUaeCities(cities.map((city) => ({ value: city.name, label: city.name })));
      }
    };
    fetchCities();
  }, []);

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


  const [selectedOptions, setSelectedOptions] = useState<ProductOptions>(getInitialSelectedOptions());

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
    prefered_time: new Date()
  }

  const [formData, setFormData] = useState(formInitialValues);

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
    setFormData({ ...formData, prefered_contact_method: updatedContactMethods });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };



  const timeHandler = (date: Date) => {
    let time = new Date(date);


    let hours = time.getHours();
    let minutes = time.getMinutes();


    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;
    let minutesStr = minutes < 10 ? "0" + minutes : minutes;


    let formattedTime = hours + ":" + minutesStr + " " + ampm;
    return formattedTime
  }

  const handleDateChange = (date: Date | null) => {
    if (date) {

      setFormData({ ...formData, prefered_Date: date });
    }
  };

  const handletimeChange = (date: Date | null) => {
    if (date) {
      setFormData({ ...formData, prefered_time: date });
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
      newErrors.area = 'Area is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      try {
        setLoading(true)
        const { productoption, prefered_contact_method, prefered_time, ...withoutproductoption } = formData

        let productTypeArray: any = Object.keys(formData.productoption).map((item) => {
          const key = item as keyof ProductOptions;
          if (formData.productoption[key]) return item
        }).filter((item) => item !== undefined)


        let prefered_contact_method_list: any = Object.keys(formData.prefered_contact_method).map((item) => {
          const key = item as keyof ContactMethods;
          if (formData.prefered_contact_method[key]) return item
        }).filter((item) => item !== undefined)

        let newTime = timeHandler(prefered_time)
        
        const response = await PostAppointments({ ...withoutproductoption, prefered_time: newTime, prefered_contact_method: prefered_contact_method_list, product_type: productTypeArray });
        console.log('response:', response);
        setFormData(formInitialValues)
      } catch (error) {
        console.error('Error submitting appointment:', error);
      } finally {
        setLoading(false)

      }
    }
  };

  const windowOptions = [
    { value: 'window1', label: 'Window 1' },
    { value: 'window2', label: 'Window 2' },
  ];

  const referralOptions = [
    { value: 'google', label: 'Google' },
    { value: 'friend', label: 'Friend' },
    { value: 'social_media', label: 'Social Media' },
  ];
              
  const queryOptions = [
    { value: 'productinquiry', label: 'Product Inquiry' },
    { value: 'support', label: 'Support' },
    { value: 'feedback', label: 'Feedback' },
  ];


  return (
    <div
      className={`bg-white  text-left text-black ${singlePage ? 'w-full rounded-lg px-3 py-4' : 'xl:w-2/5 py-4 rounded-md mt-5'}`}
    >
      {!singlePage && (
        <h3 className="font-bold text-lg text-center tracking-[5px]">
          BOOK YOUR FREE APPOINTMENT
        </h3>
      )}
      <form
        onSubmit={handleSubmit}
        className={` bg-white rounded-md ${singlePage ? 'w-full p-4 ' : ' px-6 py-2'}`}
      >
        <div
          className={`xs:grid  mb-3 ${singlePage ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6' : 'grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3'}`}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-10 font-medium text-gray-700"
            >
              Name *
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Full Name"
              id="name"
              className={`mt-1 p-2 border border-gray-300 w-full rounded text-10 ${errors.name ? 'border-red-500' : ''}`}
              value={formData.name}
              onChange={handleChange}
            // required
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone_number"
              className="block text-10 font-medium mb-1 text-gray-700"
            >
              Phone Number *
            </label>
            <PhoneInput
              enableSearch={true}
              disableSearchIcon={true}
              country={'ae'}
              value={formData.phone_number}
              onChange={(phone) =>
                setFormData({ ...formData, phone_number: phone })
              }
              inputStyle={{
                width: '100%',
                border: '1px solid #D1D5DB',
                fontSize: '11px',
                borderRadius: '0.375rem',
              }}
            />
            {errors.phone_number && (
              <p className="text-red-500 text-xs">{errors.phone_number}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="area"
              className="block text-10 font-medium text-gray-700"
            >
              Area *
            </label>

            <Select
              options={uaeCities}
              onChange={(option) =>
                handleSelectChange('area', option?.value || '')
              }
              value={uaeCities.find(
                (option) => option.value === formData.area,
              )}
              className={`mt-1 w-full text-10 ${errors.area ? 'border-red-500' : ''}`}
            />
            {errors.area && (
              <p className="text-red-500 text-xs">{errors.area}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-10 font-medium text-gray-700"
            >
              E-Mail *
            </label>
            <input
              type="email"
              placeholder="Enter Your E-Mail"
              name="email"
              id="email"
              className={`mt-1 p-2 border border-gray-300 w-full rounded text-10 ${errors.email ? 'border-red-500' : ''}`}
              value={formData.email}
              onChange={handleChange}
            // required
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="whatsapp_number"
              className="block text-10 font-medium mb-1 text-gray-700"
            >
              WhatsApp No. If Different
            </label>
            <PhoneInput
              country={'ae'}
              value={formData.whatsapp_number}
              onChange={(phone) =>
                setFormData({ ...formData, whatsapp_number: phone })
              }
              inputStyle={{
                width: '100%',
                border: '1px solid #D1D5DB',
                fontSize: '11px',
                borderRadius: '0.375rem',
              }}
            />
          </div>
          <div>
            <label
              htmlFor="windows "
              className="block text-10 font-medium text-gray-700"
            >
              Select Windows *
            </label>
            <Select
              options={windowOptions}
              onChange={(option) =>
                handleSelectChange('windows', option?.value || '')
              }
              value={windowOptions.find(
                (option) => option.value === formData.windows,
              )}
              className={`mt-1 w-full text-10 ${errors.windows ? 'border-red-500' : ''}`}
            />
            {errors.windows && (
              <p className="text-red-500 text-xs">{errors.windows}</p>
            )}
          </div>
          <div className="w-full custom-datepicker">
            <label
              htmlFor="preferredDate"
              className="block text-10 font-medium text-gray-700"
            >
              Preferred Date
            </label>
            <DatePicker
              selected={formData.prefered_Date}
              onChange={handleDateChange}
              className="h-[38px] mt-1 w-full text-10 border p-2 rounded-md border-[#B3B3B3]"
            />
          </div>
          <div className="w-full custom-datepicker">
            <label
              htmlFor="preferredTime"
              className="block text-10 font-medium text-gray-700"
            >
              Preferred Time
            </label>
            <DatePicker
              selected={formData.prefered_time}
              onChange={handletimeChange}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              dateFormat="h:mm aa"
              className="h-[38px] mt-1 w-full text-10 border p-2 rounded-md border-[#B3B3B3]"
            />
          </div>
          <div>
            <label
              htmlFor="how_user_find_us"
              className="block text-10 font-medium text-gray-700"
            >
              How Did You Hear About Us?
            </label>
            <Select
              options={referralOptions}
              onChange={(option) =>
                handleSelectChange('how_user_find_us', option?.value || '')
              }
              value={referralOptions.find(
                (option) => option.value === formData.how_user_find_us,
              )}
              className="mt-1 w-full text-10"
            />
          </div>
          <div className="w-full col-span-3">
            <label
              htmlFor="user_query"
              className="block text-10 font-medium text-gray-700"
            >
              Your Query
            </label>
            <Select
              options={queryOptions}
              onChange={(option) =>
                handleSelectChange('user_query', option?.value || '')
              }
              value={queryOptions.find(
                (option) => option.value === formData.user_query,
              )}
              className="mt-1 w-full text-10"
            />
          </div>
        </div>
        {!singlePage && (
          <div className="flex flex-wrap justify-between gap-2 mb-3">
            <div className="max-w-md mx-auto p-2 bg-white shadow-md rounded-md">
              <h2 className="text-sm mb-4">Tell us what you need:</h2>

              <div className="flex flex-row gap-2">
                <div>
                  <label className="flex items-center text-11">
                    <input
                      type="checkbox"
                      checked={selectedOptions.shutters}
                      onChange={() => handleCheckboxChange('shutters')}
                      className="mr-2"
                    />
                    Shutters
                  </label>
                </div>

                <div>
                  <label className="flex items-center text-11">
                    <input
                      type="checkbox"
                      checked={selectedOptions.curtains}
                      onChange={() => handleCheckboxChange('curtains')}
                      className="mr-2"
                    />
                    Curtains
                  </label>
                </div>

                <div>
                  <label className="flex items-center text-11">
                    <input
                      type="checkbox"
                      checked={selectedOptions.blinds}
                      onChange={() => handleCheckboxChange('blinds')}
                      className="mr-2"
                    />
                    Blinds
                  </label>
                </div>
              </div>
            </div>
            <div className="p-2 rounded-md max-w-md mx-auto">
              <label className="text-sm mb-4">How shall we contact you?</label>
              <div className="flex flex-row gap-2 mt-2">
                <label className="flex items-center text-11">
                  <input
                    type="checkbox"
                    name="email"
                    checked={contactMethods.email}
                    onChange={handleChangeContact}
                    className="mr-2"
                  />
                  Email
                </label>
                <label className="flex items-center text-11">
                  <input
                    type="checkbox"
                    name="telephone"
                    checked={contactMethods.telephone}
                    onChange={handleChangeContact}
                    className="mr-2"
                  />
                  Telephone
                </label>
                <label className="flex items-center text-11">
                  <input
                    type="checkbox"
                    name="whatsapp"
                    checked={contactMethods.whatsapp}
                    onChange={handleChangeContact}
                    className="mr-2"
                  />
                  WhatsApp
                </label>
              </div>
            </div>
          </div>
        )}
        {singlePage && (
          <>
            <div className="w-full md:w-4/5 mx-auto mt-6">
              <label className="block text-10 font-medium text-gray-700">
                Window Dressing Type
              </label>
              <div className="flex flex-row flex-wrap md:flex-nowrap justify-start md:justify-between gap-5 mt-2">
                {Object.keys(selectedOptions).map((option) => (
                  <div key={option} className="flex items-center whitespace-nowrap">
                    <input
                      type="checkbox"
                      id={option}
                      name={option}
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
            <div className="flex flex-col mt-4">
              <label
                htmlFor="form-textarea"
                className="text-10 font-medium text-gray-700"
              >
                Other
              </label>
              <textarea
                name="other"
                id="other"
                value={formData.other}
                onChange={handleChange}
                className="border border-[#B3B3B3] h-64 rounded-md mt-1"
              ></textarea>
            </div>
          </>
        )}

        <div className="text-center mt-4">
          <button
            type="submit"
            className="w-fit bg-[#A9B4A4] text-white py-2 px-8 rounded"
            disabled={loading}
          >

            {loading ? <Loader /> : "Submit Request"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookAppointment;
