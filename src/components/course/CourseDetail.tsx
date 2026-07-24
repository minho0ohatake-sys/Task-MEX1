import { Link } from "react-router-dom";
import type { Course } from "../../types/course";

type CourseDetailProps = {
  course: Course;
};

function CourseDetail({ course }: CourseDetailProps) {
  const {
    title,
    description,
    instructor,
    imageUrl,
    category,
    level,
    duration,
    price,
    rating,
  } = course;

  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="grid md:grid-cols-2">
        <img
          src={imageUrl}
          alt={title}
          className="h-full min-h-80 w-full object-cover"
        />

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
              {category}
            </span>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
              {level}
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
            {title}
          </h1>

          <p className="mt-4 leading-7 text-slate-600">
            {description}
          </p>

          <dl className="mt-6 grid gap-4 rounded-xl bg-slate-50 p-5 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-slate-500">
                Giảng viên
              </dt>

              <dd className="mt-1 font-semibold text-slate-900">
                {instructor}
              </dd>
            </div>

            <div>
              <dt className="text-sm text-slate-500">
                Thời lượng
              </dt>

              <dd className="mt-1 font-semibold text-slate-900">
                {duration} giờ
              </dd>
            </div>

            <div>
              <dt className="text-sm text-slate-500">
                Đánh giá
              </dt>

              <dd className="mt-1 font-semibold text-amber-500">
                ★ {rating}
              </dd>
            </div>

            <div>
              <dt className="text-sm text-slate-500">
                Học phí
              </dt>

              <dd className="mt-1 font-semibold text-blue-600">
                {formattedPrice}
              </dd>
            </div>
          </dl>

          <Link
            to="/courses"
            className="mt-8 inline-flex rounded-lg border border-blue-600 px-5 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
          >
            ← Quay lại danh sách
          </Link>
        </div>
      </div>
    </article>
  );
}

export default CourseDetail;