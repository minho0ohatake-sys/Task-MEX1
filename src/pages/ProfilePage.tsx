import { useAppSelector } from "../store/hooks";

function ProfilePage() {
  const user = useAppSelector(
    (state) => state.auth.user,
  );

  const email = user?.email ?? "Chưa cập nhật";

  const displayName =
    email !== "Chưa cập nhật"
      ? email.split("@")[0]
      : "Học viên";

  const avatarText = displayName
    .slice(0, 2)
    .toUpperCase();

  const courseCount =
    user?.courseIds.length ?? 0;

  return (
    <section className="space-y-6">
      {/* Page heading */}
      <div>
        <span className="font-semibold text-blue-600">
          Tài khoản
        </span>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Thông tin cá nhân
        </h1>

        <p className="mt-2 text-slate-600">
          Xem và quản lý thông tin tài khoản của bạn.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        {/* Profile summary */}
        <article className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <div className="mx-auto grid h-24 w-24 place-content-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-3xl font-bold text-white shadow-md">
            {avatarText}
          </div>

          <h2 className="mt-5 text-2xl font-bold capitalize text-slate-900">
            {displayName}
          </h2>

          <p className="mt-2 break-all text-sm text-slate-500">
            {email}
          </p>

          <span className="mt-4 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Tài khoản đang hoạt động
          </span>

          <div className="mt-6 border-t border-slate-200 pt-6">
            <p className="text-sm text-slate-500">
              Khóa học đã đăng ký
            </p>

            <strong className="mt-2 block text-3xl text-blue-600">
              {courseCount}
            </strong>
          </div>
        </article>

        {/* Account information */}
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Chi tiết tài khoản
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Thông tin đăng nhập và vai trò của bạn.
              </p>
            </div>

            <span className="rounded-lg bg-blue-100 px-3 py-2 text-sm font-semibold text-blue-700">
              Student
            </span>
          </div>

          <dl className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-5">
              <dt className="text-sm font-medium text-slate-500">
                Tên hiển thị
              </dt>

              <dd className="mt-2 font-semibold capitalize text-slate-900">
                {displayName}
              </dd>
            </div>

            <div className="rounded-xl bg-slate-50 p-5">
              <dt className="text-sm font-medium text-slate-500">
                Email
              </dt>

              <dd className="mt-2 break-all font-semibold text-slate-900">
                {email}
              </dd>
            </div>

            <div className="rounded-xl bg-slate-50 p-5">
              <dt className="text-sm font-medium text-slate-500">
                Vai trò
              </dt>

              <dd className="mt-2 font-semibold text-slate-900">
                Học viên
              </dd>
            </div>

            <div className="rounded-xl bg-slate-50 p-5">
              <dt className="text-sm font-medium text-slate-500">
                Trạng thái
              </dt>

              <dd className="mt-2 font-semibold text-emerald-600">
                Đang hoạt động
              </dd>
            </div>
          </dl>

          <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-5">
            <h3 className="font-semibold text-blue-900">
              MEX Learning Student
            </h3>

            <p className="mt-2 text-sm leading-6 text-blue-700">
              Tiếp tục học tập và hoàn thành các khóa học
              trong dashboard để phát triển kỹ năng của bạn.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ProfilePage;