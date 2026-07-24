import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>

      <footer className="bg-slate-900 py-6 text-center text-sm text-slate-300">
        <div className="mx-auto max-w-7xl px-4">
          © 2026 MEX Learning
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;