import { NavLink, Outlet } from "react-router-dom";

function DashboardLayout() {
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

  return (
    <div className="min-h-screen bg-slate-100 md:grid md:grid-cols-[240px_1fr]">
      <aside className="bg-slate-900 p-5 text-white md:min-h-screen md:p-6">
        <h2 className="mb-6 text-2xl font-bold">
          Dashboard
        </h2>

        <nav className="grid gap-2 sm:grid-cols-3 md:grid-cols-1">
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
      </aside>

      <main className="p-4 sm:p-6 md:p-10">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;