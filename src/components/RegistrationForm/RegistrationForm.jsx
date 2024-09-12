import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import css from "./RegistrationForm.module.css";
import { selectAuthError } from "../../redux/auth/selectors";
import { apiRegister } from "../../redux/auth/operations";

const RegisterValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Username is required!")
    .min(2, "Username must be longer than 2 characters")
    .max(100, "Username must be less than 100 characters"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password must be longer than 8 characters")
    .max(100, "Password must be less than 100 characters"),

  email: Yup.string()
    .email("Invalid email address!")
    .required("Email is required!"),
});

function RegistrationForm() {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const INITIAL_VALUES = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    dispatch(apiRegister(values));
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={RegisterValidationSchema}
    >
      {({ errors }) => (
        <Form className={css.form}>
          <label className={css.label}>
            <span>Username:</span>
            <Field type="text" name="name" className={css.input} />
            <ErrorMessage
              className={css.errorText}
              name="name"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span>Email:</span>
            <Field type="text" name="email" className={css.input} />
            <ErrorMessage
              className={css.errorText}
              name="email"
              component="span"
            />
          </label>

          <label className={css.label}>
            <span>Password:</span>
            <Field type="password" name="password" className={css.input} />
            <ErrorMessage
              className={css.errorText}
              name="password"
              component="span"
            />
          </label>

          <button
            disabled={Object.keys(errors).length > 0}
            className={css.submitBtn}
            type="submit"
          >
            Sing Up
          </button>
          {error && (
            <p className={css.errorText}>Oops, some error occured... {error}</p>
          )}
        </Form>
      )}
    </Formik>
  );
}

export default RegistrationForm;
