import {
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function PrivateRoute() {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  return <Outlet />;
}

export default PrivateRoute;