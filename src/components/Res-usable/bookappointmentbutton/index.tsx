"use client"
import React from 'react'
import Link from 'next/link'

const AppointmentButton = () => {
  return (
    <div className="h-fit flex justify-center mt-5">
    <Link
      href="/request-appointment/"
      className="px-8 py-4 rounded-md text-white bg-secondary hover:bg-primary"
    >
      Book A Free Appointment
    </Link>
  </div>
  )
};

export default AppointmentButton;