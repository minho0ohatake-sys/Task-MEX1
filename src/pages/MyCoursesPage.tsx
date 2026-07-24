import CourseList from "../components/course/CourseList";
import { selectMyCourses } from "../features/courses/courseSelectors";
import { fetchCourses } from "../features/courses/coursesSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../store/hooks";

function MyCoursesPage() {
  const dispatch = useAppDispatch();

  const myCourses = useAppSelector(
    selectMyCourses,
  );

  const { status, error } = useAppSelector(
    (state) => state.courses,
  );

  if (
    status === "idle" ||
    status === "loading"
  ) {
    return (
      <p className="rounded-2xl bg-white p-8 text-center text-slate-600 shadow-sm">
        Đang tải khóa học của bạn...
      </p>
    );
  }

  if (status === "failed") {
    return (
      <section className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
        <p className="text-red-700">
          {error}
        </p>

        <button
          type="button"
          onClick={() => dispatch(fetchCourses())}
          className="mt-5 rounded-lg bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700"
        >
          Thử lại
        </button>
      </section>
    );
  }

  return (
    <section>
      <div className="mb-8">
        <span className="font-semibold text-blue-600">
          Khu vực học tập
        </span>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Khóa học của tôi
        </h1>

        <p className="mt-3 text-slate-600">
          Những khóa học bạn đã đăng ký.
        </p>
      </div>

      <CourseList courses={myCourses} />
    </section>
  );
}

export default MyCoursesPage;