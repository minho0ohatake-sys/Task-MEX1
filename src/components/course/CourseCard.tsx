import { Link } from "react-router-dom";
import type { Course } from "../../types/course";

type CourseCardProps = {
  course: Course;
};

function CourseCard({ course }: CourseCardProps) {
  const {
    id,
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
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src={imageUrl}
        alt={title}
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            {category}
          </span>

          <span className="text-sm font-medium text-amber-500">
            ★ {rating}
          </span>
        </div>

        <h2 className="text-xl font-bold text-slate-900">
          {title}
        </h2>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
          {description}
        </p>

        <p className="mt-3 text-sm text-slate-500">
          Giảng viên: {instructor}
        </p>

        <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
          <span>{level}</span>
          <span>•</span>
          <span>{duration} giờ</span>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <strong className="text-lg text-blue-600">
            {formattedPrice}
          </strong>

          <Link
            to={`/courses/${id}`}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Xem chi tiết
          </Link>
        </div>
      </div>
    </article>
  );
}

export default CourseCard;