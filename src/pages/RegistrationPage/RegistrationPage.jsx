import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";

function RegistrationPage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Register</h1>
      <RegistrationForm />
    </div>
  );
}

export default RegistrationPage;
