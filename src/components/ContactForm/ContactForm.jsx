import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const phoneRegExp = /^[1-9]{3}-[0-9]{2}-[0-9]{2}$/;

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required!")
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required!"),
  number: Yup.string()
    .required("Must be number")
    .min(7, "Number must be 7 characters")
    .matches(phoneRegExp, "Correct format xxx-xx-xx")
    .max(10, "Number must be 10 characters"),
});

function ContactForm() {
  const dispatch = useDispatch();
  const INITIAL_VALUES = { name: "", number: "" };

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      ...values,
    };
    dispatch(addContact(newContact));
    toast.success(`Add contact Name: ${values.name} Number: ${values.number}`, {
      duration: 2000,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div className={css.nameLabel}>
          <label>Name</label>
          <Field type="text" name="name" id="name" className={css.input} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.numberLabel}>
          <label>Number</label>
          <Field type="text" name="number" id="number" className={css.input} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button type="submit" className={css.submitBtn}>
          Add new contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
