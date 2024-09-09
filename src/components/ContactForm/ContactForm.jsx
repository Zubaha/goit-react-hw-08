import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const phoneRegExp = /^[1-9]{3}-[0-9]{2}-[0-9]{2}$/;
const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required!")
    .min(3, "Too short!")
    .max(50, "too long!")
    .required("Required!"),
  number: Yup.string()
    .required("Must be number")
    .min(7, "Number must be 7 characters")
    .matches(phoneRegExp, "Correct format xxx-xx-xx")
    .max(10, "Number must be 10 characters"),
});

function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      ...values,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div className={css.nameLabel}>
          <label>Name</label>
          <Field
            type="text"
            name="name"
            id="name"
            className={css.input}
          ></Field>
          <ErrorMessage name="name">
            {(msg) => <div className={css.error}>{msg}</div>}
          </ErrorMessage>
        </div>
        <div className={css.numberLabel}>
          <label>Number</label>
          <Field
            type="text"
            name="number"
            id="number"
            className={css.input}
          ></Field>
          <ErrorMessage name="number">
            {(msg) => <div className={css.error}>{msg}</div>}
          </ErrorMessage>
        </div>
        <button type="submit" className={css.submitBtn}>
          Add new contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
