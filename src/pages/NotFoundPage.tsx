import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="grid min-h-screen place-content-center bg-slate-100 px-4 text-center">
      <h1 className="text-8xl font-bold text-blue-600 sm:text-9xl">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-bold text-slate-900">
        Không tìm thấy trang
      </h2>

      <p className="mt-3 text-slate-600">
        Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
      </p>

      <Link
        to="/"
        className="mx-auto mt-8 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
      >
        Quay về trang chủ
      </Link>
    </section>
  );
}

export default NotFoundPage;