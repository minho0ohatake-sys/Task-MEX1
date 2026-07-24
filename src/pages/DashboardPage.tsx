import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function DashboardPage() {
  const { user } = useAuth();

  const courseCount = user?.courseIds.length ?? 0;

  return (
    <section>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard Overview
        </h1>

        <p className="mt-2 text-slate-600">
          Xin chào, {user?.email}.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Tổng khóa học
          </p>

          <strong className="mt-3 block text-4xl text-blue-600">
            {courseCount}
          </strong>

          <Link
            to="/dashboard/my-courses"
            className="mt-5 inline-block font-semibold text-blue-600 hover:underline"
          >
            Xem khóa học →
          </Link>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Đang học
          </p>

          <strong className="mt-3 block text-4xl text-amber-500">
            {courseCount}
          </strong>

          <p className="mt-5 text-sm text-slate-500">
            Tiếp tục hành trình học tập
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">
            Hoàn thành
          </p>

          <strong className="mt-3 block text-4xl text-emerald-600">
            0
          </strong>

          <p className="mt-5 text-sm text-slate-500">
            Chưa có khóa học hoàn thành
          </p>
        </article>
      </div>
    </section>
  );
}

export default DashboardPage;