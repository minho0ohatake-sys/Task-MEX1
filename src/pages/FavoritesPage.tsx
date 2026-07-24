import { Link } from "react-router-dom";
import CourseList from "../components/course/CourseList";
import { selectFavoriteCourses } from "../features/favorites/favoriteSelectors";
import { useAppSelector } from "../store/hooks";

function FavoritesPage() {
  const favoriteCourses = useAppSelector(
    selectFavoriteCourses,
  );

  const status = useAppSelector(
    (state) => state.courses.status,
  );

  if (
    status === "idle" ||
    status === "loading"
  ) {
    return (
      <section className="grid min-h-72 place-content-center text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />

        <p className="mt-4 text-slate-600">
          Đang tải khóa học yêu thích...
        </p>
      </section>
    );
  }

  if (favoriteCourses.length === 0) {
    return (
      <section className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
        <div className="text-6xl text-red-400">
          ♡
        </div>

        <h1 className="mt-5 text-3xl font-bold text-slate-900">
          Chưa có khóa học yêu thích
        </h1>

        <p className="mx-auto mt-3 max-w-md text-slate-600">
          Hãy khám phá danh sách khóa học và nhấn vào
          biểu tượng trái tim để lưu khóa học bạn quan tâm.
        </p>

        <Link
          to="/courses"
          className="mt-7 inline-flex rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Khám phá khóa học
        </Link>
      </section>
    );
  }

  return (
    <section>
      <div className="mb-8">
        <span className="font-semibold text-red-500">
          Khóa học đã lưu
        </span>

        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
          Khóa học yêu thích
        </h1>

        <p className="mt-3 text-slate-600">
          Bạn đã lưu {favoriteCourses.length} khóa học.
        </p>
      </div>

      <CourseList courses={favoriteCourses} />
    </section>
  );
}

export default FavoritesPage;