import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
type ProductOptions = {
  shutters: boolean;
  curtains: boolean;
  blinds: boolean;
};
interface ContactMethods {
  email: boolean;
  telephone: boolean;
  whatsapp: boolean;
}

function BookAppointment() {
  const [selectedOptions, setSelectedOptions] = useState<ProductOptions>({
    shutters: false,
    curtains: false,
    blinds: false,
  });
  const [contactMethods, setContactMethods] = useState<ContactMethods>({
    email: false,
    telephone: false,
    whatsapp: false,
  });

  const handleCheckboxChange = (option: keyof ProductOptions) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
  };
  const handleChangeContact = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setContactMethods((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

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
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
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
    <div className="bg-white px-3 py-4 rounded-md lg:w-2/5 text-left lg:mt-5 text-black">
      <h3 className="font-bold text-lg text-center tracking-[5px]">
        BOOK YOUR FREE APPOINTMENT
      </h3>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-4 bg-white rounded-md"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-3">
          <div>
            <label
              htmlFor="name"
              className="block text-10 font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Full Name"
              id="name"
              className="mt-1 p-2 border border-gray-300 w-full rounded text-10"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-10 font-medium mb-1 text-gray-700"
            >
              Phone Number
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
          </div>
          <div>
            <label
              htmlFor="area"
              className="block text-10 font-medium text-gray-700"
            >
              Area *
            </label>
            <Select
              options={areaOptions}
              onChange={(option) =>
                handleSelectChange('area', option?.value || '')
              }
              value={areaOptions.find(
                (option) => option.value === formData.area,
              )}
              className="mt-1 w-full text-10 "
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-3">
          <div className="mb-4">
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
              className="mt-1 p-2 border border-gray-300 w-full rounded text-10"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
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
          <div className="mb-3">
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
              className="mt-1 w-full text-10  "
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-3">
          <div className="mb-2 w-full">
            <label
              htmlFor="preferredDate"
              className="block text-10 font-medium text-gray-700"
            >
              Preferred Date
            </label>
            <DatePicker
              selected={formData.preferredDate}
              onChange={handleDateChange}
              className="mt-1 w-full text-10 border p-2 rounded"
            />
          </div>
          <div className="mb-2 w-full">
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
              timeCaption="Time"
              dateFormat="h:mm aa"
              className="mt-1 w-full text-10 border p-2 rounded"
            />
          </div>
          <div className="mb-2 w-full">
            <label
              htmlFor="referralSource"
              className="block text-10 font-medium text-gray-700"
            >
              How did you find us?
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
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
          <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
            <h2 className="text-sm mb-4">Tell us what you need:</h2>

            <div className="flex flex-row gap-2">
              <div className="">
                <label className="flex items-center text-10">
                  <input
                    type="checkbox"
                    checked={selectedOptions.shutters}
                    onChange={() => handleCheckboxChange('shutters')}
                    className="mr-2"
                  />
                  Shutters
                </label>
              </div>

              <div className="">
                <label className="flex items-center text-10">
                  <input
                    type="checkbox"
                    checked={selectedOptions.curtains}
                    onChange={() => handleCheckboxChange('curtains')}
                    className="mr-2"
                  />
                  Curtains
                </label>
              </div>

              <div className="">
                <label className="flex items-center text-10">
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
          <div className="p-6  rounded-md max-w-md mx-auto">
            <h2 className="text-sm mb-4">How shall we contact you?</h2>
            <div className=" flex flex-row gap-2">
              <label className="flex items-center text-10">
                <input
                  type="checkbox"
                  name="email"
                  checked={contactMethods.email}
                  onChange={handleChangeContact}
                  className="mr-2"
                />
                Email
              </label>
              <label className="flex items-center text-10">
                <input
                  type="checkbox"
                  name="telephone"
                  checked={contactMethods.telephone}
                  onChange={handleChangeContact}
                  className="mr-2"
                />
                Telephone
              </label>
              <label className="flex items-center text-10">
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
        <div className="mb-2 w-full">
          <label
            htmlFor="query"
            className="block text-10 font-medium text-gray-700"
          >
            How shall we contact You?
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
}

export default BookAppointment;
