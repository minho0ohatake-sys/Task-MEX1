import { Link, useParams } from "react-router-dom";
import CourseDetail from "../components/course/CourseDetail";
import { useAppSelector } from "../store/hooks";

function CourseDetailPage() {
  const { id } = useParams<{ id: string }>();

  const course = useAppSelector((state) =>
    state.courses.items.find(
      (item) => item.id === id,
    ),
  );

  if (!course) {
    return (
      <section className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">
          Không tìm thấy khóa học
        </h1>

        <p className="mt-3 text-slate-600">
          Khóa học không tồn tại hoặc đã được gỡ bỏ.
        </p>

        <Link
          to="/courses"
          className="mt-6 inline-flex rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Quay lại danh sách
        </Link>
      </section>
    );
  }

  return <CourseDetail course={course} />;
}

export default CourseDetailPage;