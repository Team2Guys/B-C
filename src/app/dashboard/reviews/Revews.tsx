
import { Field, Form, Formik } from "formik";
import DatePicker from "react-datepicker";

function ReviewsForm() {
    return (
      <Formik
        initialValues={{
          customer_name: '',
          star_rating: '',
          createdAt: new Date(),
          reveiw_description: '',
          last_editedBy: '',
          posterImage: null,
        }}
        onSubmit={(values) => {
   
          console.log('Submitted data:', values);
          // Submit formData using axios/fetch
        }}
      >
        {({ setFieldValue, values }) => (
          <Form className="flex flex-col gap-4 max-w-md mx-auto mt-10">
            <label>
              Customer Name:
              <Field
                type="text"
                name="customer_name"
                className="border px-3 py-1 rounded w-full"
              />
            </label>
  
            <label>
              Star Rating:
              <Field
                type="text"
                name="star_rating"
                className="border px-3 py-1 rounded w-full"
              />
            </label>
  
            <label>
              Created At:
              <DatePicker
                selected={values.createdAt}
                onChange={(date) => setFieldValue('createdAt', date)}
                showTimeSelect
                dateFormat="Pp"
                className="border px-3 py-1 rounded w-full"
              />
            </label>
  
            <label>
              Review Description:
              <Field
                as="textarea"
                name="reveiw_description"
                className="border px-3 py-1 rounded w-full"
              />
            </label>
  
            <label>
              Last Edited By:
              <Field
                type="text"
                name="last_editedBy"
                className="border px-3 py-1 rounded w-full"
              />
            </label>
  
            <label>
              Poster Image:
              <input
                type="file"
                name="posterImage"
                onChange={(event) => {
                  const file = event.currentTarget.files?.[0] || null;
                  setFieldValue('posterImage', file);
                }}
                className="border px-3 py-1 rounded w-full"
              />
            </label>
  
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    );
  }
  
  export default ReviewsForm;
  