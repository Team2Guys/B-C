import BookAppointment from "components/Book-appointment/BookAppointment";
import Choose from "components/Choose-us/Choose";
import Container from "components/Res-usable/Container/Container";

function Appointment() {
  return (
    <>
      <Container>
        <div className="flex gap-4">
        <Choose/>
        <BookAppointment/>
        </div>
      </Container>
    </>
  );
}

export default Appointment;
