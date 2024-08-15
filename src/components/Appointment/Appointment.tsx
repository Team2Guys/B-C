import BookAppointment from 'components/Book-appointment/BookAppointment';
import Choose from 'components/Choose-us/Choose';
import Container from 'components/Res-usable/Container/Container';
import { Divider } from 'antd';

function Appointment() {
  return (
    <>
      <Divider className="border bg-white !p-0 !m-0" />
      <Container>
        <div className="lg:flex gap-4 space-y-3 ">
          <Choose />
          <BookAppointment />
        </div>
      </Container>
    </>
  );
}

export default Appointment;
