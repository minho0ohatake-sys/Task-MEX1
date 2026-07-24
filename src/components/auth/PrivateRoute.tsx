import {
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

function PrivateRoute() {
  const location = useLocation();

  const isLoggedIn = useAppSelector(
    (state) => state.auth.isLoggedIn,
  );

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