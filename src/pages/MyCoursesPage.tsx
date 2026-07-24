import CourseList from "../components/course/CourseList";
import { selectMyCourses } from "../features/courses/courseSelectors";
import { useAppSelector } from "../store/hooks";

function MyCoursesPage() {
  const myCourses = useAppSelector(
    selectMyCourses,
  );

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