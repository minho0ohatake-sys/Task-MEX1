import CourseList from "../components/course/CourseList";
import { useAppSelector } from "../store/hooks";

function CoursesPage() {
  const courses = useAppSelector(
    (state) => state.courses.items,
  );

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

      <CourseList courses={courses} />
    </section>
  );
}

export default CoursesPage;