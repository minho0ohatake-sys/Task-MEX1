import {
  NavLink,
  Outlet,
  useNavigate,
} from "react-router-dom";
import Header from "../components/Header";
import { useAuth } from "../contexts/AuthContext";

function DashboardLayout() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const getNavClass = ({
    isActive,
  }: {
    isActive: boolean;
  }) =>
    `rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-slate-300 hover:bg-slate-800 hover:text-white"
    }`;

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <Header />

      <div className="flex flex-1 flex-col md:grid md:grid-cols-[240px_1fr]">
        <aside className="flex flex-col bg-slate-900 p-5 text-white md:p-6">
          <div>
            <h2 className="text-2xl font-bold">
              Dashboard
            </h2>

            <p className="mt-2 truncate text-sm text-slate-400">
              {user?.email}
            </p>
          </div>

          <nav className="mt-6 grid gap-2 sm:grid-cols-3 md:grid-cols-1">
            <NavLink
              to="/dashboard"
              end
              className={getNavClass}
            >
              Overview
            </NavLink>

            <NavLink
              to="/dashboard/profile"
              className={getNavClass}
            >
              Profile
            </NavLink>

            <NavLink
              to="/"
              className="rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
            >
              ← Back to Home
            </NavLink>
          </nav>

          <button
            type="button"
            onClick={handleLogout}
            className="mt-6 rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700 md:mt-auto"
          >
            Đăng xuất
          </button>
        </aside>

        <main className="p-4 sm:p-6 md:p-10">
          <Outlet />
        </main>
      </div>

      <footer className="bg-slate-900 py-6 text-center text-sm text-slate-300">
        <div className="mx-auto max-w-7xl px-4">
          © 2026 MEX Learning
        </div>
      </footer>
    </div>
  );
}

export default DashboardLayout;