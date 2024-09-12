import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectAuthUser } from "../../redux/auth/selectors";
import { apiLogout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);
  const onLogout = () => {
    dispatch(apiLogout());
  };
  return (
    <div className={css.wrapper}>
      <NavLink className={css.link} to="/contacts">
        Contacts
      </NavLink>
      <p className={css.welcomeText}>Welcome, {user.email}</p>
      <button className={css.button} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
