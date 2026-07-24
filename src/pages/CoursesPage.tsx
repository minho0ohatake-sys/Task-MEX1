import CourseList from "../components/course/CourseList";
import { fetchCourses } from "../features/courses/coursesSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../store/hooks";

function CoursesPage() {
  const dispatch = useAppDispatch();

  const { items, status, error } =
    useAppSelector((state) => state.courses);

  const handleRetry = () => {
    dispatch(fetchCourses());
  };

  if (
    status === "idle" ||
    status === "loading"
  ) {
    return (
      <section className="grid min-h-72 place-content-center text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />

        <p className="mt-4 font-medium text-slate-600">
          Đang tải khóa học...
        </p>
      </section>
    );
  }

  if (status === "failed") {
    return (
      <section className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
        <h1 className="text-2xl font-bold text-red-700">
          Không thể tải dữ liệu
        </h1>

        <p className="mt-3 text-red-600">
          {error}
        </p>

        <button
          type="button"
          onClick={handleRetry}
          className="mt-6 rounded-lg bg-red-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-red-700"
        >
          Thử lại
        </button>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
        <h1 className="text-2xl font-bold text-slate-900">
          Chưa có khóa học
        </h1>

        <p className="mt-3 text-slate-600">
          Danh sách khóa học hiện đang trống.
        </p>
      </section>
    );
  }

  return (
    <section>
      <div className="mb-8">
        <span className="font-semibold text-blue-600">
          Khám phá kiến thức
        </span>

        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
          Danh sách khóa học
        </h1>

        <p className="mt-3 max-w-2xl text-slate-600">
          Lựa chọn khóa học phù hợp để phát triển kỹ năng.
        </p>
      </div>

      <CourseList courses={items} />
    </section>
  );
}

export default CoursesPage;