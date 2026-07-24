import { Link, useParams } from "react-router-dom";
import { mockCourses } from "../data/courses";

function CourseDetailPage() {
  const { id } = useParams<{ id: string }>();

  const course = mockCourses.find(
    (item) => item.id === id,
  );

  if (!course) {
    return (
      <section className="rounded-2xl bg-white p-8 text-center shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">
          Không tìm thấy khóa học
        </h1>

        <Link
          to="/courses"
          className="mt-6 inline-block text-blue-600 hover:underline"
        >
          Quay lại danh sách
        </Link>
      </section>
    );
  }

  return (
    <section className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="grid md:grid-cols-2">
        <img
          src={course.imageUrl}
          alt={course.title}
          className="h-full min-h-72 w-full object-cover"
        />

        <div className="p-6 sm:p-8">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
            {course.category}
          </span>

          <h1 className="mt-5 text-3xl font-bold text-slate-900">
            {course.title}
          </h1>

          <p className="mt-4 leading-7 text-slate-600">
            {course.description}
          </p>

          <div className="mt-6 space-y-2 text-slate-600">
            <p>Giảng viên: {course.instructor}</p>
            <p>Trình độ: {course.level}</p>
            <p>Thời lượng: {course.duration} giờ</p>
            <p>Đánh giá: ★ {course.rating}</p>
          </div>

          <Link
            to="/courses"
            className="mt-8 inline-block font-semibold text-blue-600 hover:underline"
          >
            ← Quay lại danh sách
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CourseDetailPage;