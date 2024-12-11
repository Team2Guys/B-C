import React from 'react'
import BookAppointment from 'components/Book-appointment/BookAppointment';
import Choose from 'components/Choose-us/Choose';
import Container from 'components/Res-usable/Container/Container';
import { Divider } from 'antd';

function Appointment() {
  return (
    <>
      <Divider className="border bg-white !p-0 !m-0 h-1" />
      <Container className='mt-4'>
        <div className="xl:flex gap-4 ">
          <Choose />
          <BookAppointment singlePage={false} />
        </div>
      </Container>
    </>
  );
}

export default Appointment;
