import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

function Navigation() {
  return (
    <div className={css.wrapper}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
    </div>
  );
}

export default Navigation;
