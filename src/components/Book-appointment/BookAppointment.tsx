'use client';
import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

type ProductOptions = {
  shutters?: boolean;
  curtains?: boolean;
  blinds?: boolean;
  roller_blinds?: boolean;
  wooden_blinds?: boolean;
  other_blinds?: boolean;
  plantation_bhutters?: boolean;
  others?: boolean;
};

interface ContactMethods {
  email: boolean;
  telephone: boolean;
  whatsapp: boolean;
}

interface AppointmentProps {
  singlePage?: boolean;
}

const BookAppointment: React.FC<AppointmentProps> = ({ singlePage }) => {
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

  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    area: '',
    email: '',
    whatsappNumber: '',
    selectWindows: '',
    preferredDate: new Date(),
    preferredTime: new Date(),
    referralSource: '',
    query: '',
    productoption: selectedOptions,
    contactMethods: contactMethods,
    other: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    selectWindows: '',
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
    setFormData({ ...formData, contactMethods: updatedContactMethods });
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
      setFormData({ ...formData, preferredDate: date });
    }
  };

  const handleTimeChange = (time: Date | null) => {
    if (time) {
      setFormData({ ...formData, preferredTime: time });
    }
  };

  const validate = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      phoneNumber: '',
      email: '',
      selectWindows: '',
      area: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
      isValid = false;
    }

    if (!formData.selectWindows.trim()) {
      newErrors.selectWindows = 'Select Windows is required.';
      isValid = false;
    }

    if (!formData.area.trim()) {
      newErrors.area = 'Area is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Data:', formData);
    }
  };

  const windowOptions = [
    { value: 'window1', label: 'Window 1' },
    { value: 'window2', label: 'Window 2' },
  ];

  const areaOptions = [
    { value: 'area1', label: 'Area 1' },
    { value: 'area2', label: 'Area 2' },
  ];

  const referralOptions = [
    { value: 'google', label: 'Google' },
    { value: 'friend', label: 'Friend' },
    { value: 'social_media', label: 'Social Media' },
  ];

  const queryOptions = [
    { value: 'product_inquiry', label: 'Product Inquiry' },
    { value: 'support', label: 'Support' },
    { value: 'feedback', label: 'Feedback' },
  ];

  return (
    <div
      className={`bg-white px-3 py-4 text-left text-black ${singlePage ? 'w-full rounded-lg' : 'lg:w-2/5 rounded-md lg:mt-5'}`}
    >
      {!singlePage && (
        <h3 className="font-bold text-lg text-center tracking-[5px]">
          BOOK YOUR FREE APPOINTMENT
        </h3>
      )}
      <form
        onSubmit={handleSubmit}
        className={`p-4 bg-white rounded-md ${singlePage ? 'w-full ' : 'max-w-lg mx-auto'}`}
      >
        <div
          className={`xs:grid gap-6 mb-3 ${singlePage ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1 xs:grid-cols-2 sm:grid-cols-3'}`}
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
              htmlFor="phoneNumber"
              className="block text-10 font-medium mb-1 text-gray-700"
            >
              Phone Number *
            </label>
            <PhoneInput
              enableSearch={true}
              disableSearchIcon={true}
              country={'ae'}
              value={formData.phoneNumber}
              onChange={(phone) =>
                setFormData({ ...formData, phoneNumber: phone })
              }
              inputStyle={{
                width: '100%',
                border: '1px solid #D1D5DB',
                fontSize: '11px',
                borderRadius: '0.375rem',
              }}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs">{errors.phoneNumber}</p>
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
              // required
              options={areaOptions}
              onChange={(option) =>
                handleSelectChange('area', option?.value || '')
              }
              value={areaOptions.find(
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
              htmlFor="whatsappNumber"
              className="block text-10 font-medium mb-1 text-gray-700"
            >
              WhatsApp No. If Different
            </label>
            <PhoneInput
              country={'ae'}
              value={formData.whatsappNumber}
              onChange={(phone) =>
                setFormData({ ...formData, whatsappNumber: phone })
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
              htmlFor="selectWindows"
              className="block text-10 font-medium text-gray-700"
            >
              Select Windows *
            </label>
            <Select
              options={windowOptions}
              onChange={(option) =>
                handleSelectChange('selectWindows', option?.value || '')
              }
              value={windowOptions.find(
                (option) => option.value === formData.selectWindows,
              )}
              className={`mt-1 w-full text-10 ${errors.selectWindows ? 'border-red-500' : ''}`}
            />
            {errors.selectWindows && (
              <p className="text-red-500 text-xs">{errors.selectWindows}</p>
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
              selected={formData.preferredDate}
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
              selected={formData.preferredTime}
              onChange={handleTimeChange}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              dateFormat="h:mm aa"
              className="h-[38px] mt-1 w-full text-10 border p-2 rounded-md border-[#B3B3B3]"
            />
          </div>
          <div>
            <label
              htmlFor="referralSource"
              className="block text-10 font-medium text-gray-700"
            >
              How Did You Hear About Us?
            </label>
            <Select
              options={referralOptions}
              onChange={(option) =>
                handleSelectChange('referralSource', option?.value || '')
              }
              value={referralOptions.find(
                (option) => option.value === formData.referralSource,
              )}
              className="mt-1 w-full text-10"
            />
          </div>
          <div className="w-full col-span-3">
            <label
              htmlFor="query"
              className="block text-10 font-medium text-gray-700"
            >
              Your Query
            </label>
            <Select
              options={queryOptions}
              onChange={(option) =>
                handleSelectChange('query', option?.value || '')
              }
              value={queryOptions.find(
                (option) => option.value === formData.query,
              )}
              className="mt-1 w-full text-10"
            />
          </div>
        </div>
        {!singlePage && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
            <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
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
            <div className="p-6 rounded-md max-w-md mx-auto">
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
                  <div key={option} className="flex items-center">
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
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookAppointment;
