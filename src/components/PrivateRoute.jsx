import { Navigate } from "react-router-dom";
import { selectAuthIsLoggedIn } from "../redux/auth/selectors";
import { useSelector } from "react-redux";

function PrivateRoute({ component }) {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return isLoggedIn ? component : <Navigate to="/login" replace />;
}

export default PrivateRoute;
