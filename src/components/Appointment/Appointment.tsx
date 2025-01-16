"use client"
import React from 'react';
import Choose from 'components/Choose-us/Choose';
import Container from 'components/Res-usable/Container/Container';
import { Divider } from 'antd';
import dynamic from 'next/dynamic';
const BookAppointment = dynamic(() => import('components/Book-appointment/BookAppointment'), { ssr: false });

function Appointment() {
  return (
    <>
      <Divider className="border bg-white !p-0 h-1 !mb-3" />
      <Container>
        <div className="xl:flex gap-4">
          <Choose />
          <div suppressHydrationWarning>
            <BookAppointment singlePage={false} />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Appointment;
