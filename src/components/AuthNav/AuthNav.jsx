import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

function AuthNav() {
  return (
    <div className={css.wrapper}>
      <NavLink className={css.link} to="/login">
        Log In
      </NavLink>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>
    </div>
  );
}

export default AuthNav;
