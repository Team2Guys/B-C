"use client";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import Container from "components/Res-usable/Container/Container";

const timeSlots = ["09:00 - 10:30 am", "11:00 - 12:30 pm", "01:00 - 02:30 pm", "03:00 - 04:30 pm"];
const windowOptions = ["1 Window", "2 Windows", "3 Windows", "More than 3"];

const schema = yup.object().shape({
  date: yup.string().required("Date is required"),
  time: yup.string().required("Time is required"),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  phone: yup.string().matches(/^\+?[0-9]{10,}$/, "Enter a valid phone number").required("Phone number is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  address: yup.string().required("Address is required"),
  windows: yup.string().required("Select the number of windows"),
  message: yup.string().optional(),
});

const BookingForm = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true);
    console.log("Form Data:", data);

    // Simulate API call
    setTimeout(() => {
      alert("Form submitted successfully!");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="relative flex items-center justify-center bg-[url('/assets/images/ppc-blinds/bgform.png')] bg-cover bg-center mt-5 sm:mt-12 lg:h-[815px]">
        
      <Container className="w-full bg-white bg-opacity-90 shadow-lg rounded-3xl p-6 md:p-10 my-10 lg:my-0 mx-5 lg:mx-16 xl:mx-20">
        <h2 className="text-center font-juana text-2xl md:text-3xl xl:text-[40px] font-black mb-6">BOOK YOUR FREE CONSULTATION</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Date & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-normal font-proxima lg:text-16 mb-1">Select Date*</label>
              <input type="date" {...register("date")} className="w-full border border-primary rounded-md p-2 bg-[#FFFDEE] focus:ring focus:ring-primary" />
              <p className="text-red-500 text-sm">{errors.date?.message}</p>
            </div>

            <div>
              <label className="block font-normal font-proxima lg:text-16 mb-1">Select Time*</label>
              <Controller
                name="time"
                control={control}
                render={({ field }) => (
                  <select {...field} className="w-full border border-primary rounded-md p-2 bg-[#FFFDEE]">
                    <option value="" className="font-normal font-proxima lg:text-16">Select Time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                )}
              />
              <p className="text-red-500 text-sm">{errors.time?.message}</p>
            </div>
          </div>

          {/* Contact Details */}
          <h3 className="text-lg font-juana lg:text-24 font-black">Please enter your contact details</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-normal font-proxima lg:text-16 mb-1">First Name*</label>
              <input type="text" {...register("firstName")} className="w-full border border-primary rounded-md p-2 bg-[#FFFDEE] font-normal font-proxima lg:text-16" placeholder="Enter Your Full Name" />
              <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
            </div>

            <div>
              <label className="block font-normal font-proxima lg:text-16 mb-1">Last Name*</label>
              <input type="text" {...register("lastName")} className="w-full border border-primary rounded-md p-2 bg-[#FFFDEE] font-normal font-proxima lg:text-16" placeholder="Enter Your Full Name" />
              <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-normal font-proxima lg:text-16 mb-1">Phone Number*</label>
              <input type="text" {...register("phone")} className="w-full border border-primary rounded-md p-2 bg-[#FFFDEE] font-normal font-proxima lg:text-16" placeholder="+971" />
              <p className="text-red-500 text-sm">{errors.phone?.message}</p>
            </div>

            <div>
              <label className="block font-normal font-proxima lg:text-16 mb-1">Email*</label>
              <input type="email" {...register("email")} className="w-full border border-primary rounded-md p-2 bg-[#FFFDEE] font-normal font-proxima lg:text-16" placeholder="Enter Your Email" />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>
          </div>

          <div>
            <label className="block font-normal font-proxima lg:text-16 mb-1">Address*</label>
            <input type="text" {...register("address")} className="w-full border border-primary rounded-md p-2 bg-[#FFFDEE] font-normal font-proxima lg:text-16" placeholder="Enter Your Address" />
            <p className="text-red-500 text-sm">{errors.address?.message}</p>
          </div>

          {/* Windows & Message */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-normal font-proxima lg:text-16 mb-1">Number Of Windows*</label>
              <Controller
                name="windows"
                control={control}
                render={({ field }) => (
                  <select {...field} className="w-full  border border-primary rounded-md p-2 bg-[#FFFDEE] font-normal font-proxima lg:text-16">
                    {windowOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                )}
              />
              <p className="text-red-500 text-sm">{errors.windows?.message}</p>
            </div>

            <div>
              <label className="block font-normal font-proxima lg:text-16 mb-1">Message</label>
              <textarea {...register("message")} className="w-full  border border-primary rounded-md p-2 bg-[#FFFDEE] font-normal font-proxima lg:text-16" placeholder="Message" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default BookingForm;
