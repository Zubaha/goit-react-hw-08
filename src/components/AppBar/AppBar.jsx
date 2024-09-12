import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import UserNav from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";

function AppBar() {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Navigation />
        {isLoggedIn ? <UserNav /> : <AuthNav />}
      </nav>
    </header>
  );
}

export default AppBar;
