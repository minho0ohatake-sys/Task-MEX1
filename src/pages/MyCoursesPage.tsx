import CourseList from "../components/course/CourseList";
import { useAuth } from "../contexts/AuthContext";
import { mockCourses } from "../data/courses";

function MyCoursesPage() {
  const { user } = useAuth();

  const myCourses = mockCourses.filter((course) =>
    user?.courseIds.includes(course.id),
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