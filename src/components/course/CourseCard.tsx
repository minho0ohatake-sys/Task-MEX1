import { Link } from "react-router-dom";
import { favoriteToggled } from "../../features/favorites/favoritesSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../store/hooks";
import type { Course } from "../../types/course";

type CourseCardProps = {
  course: Course;
};

function CourseCard({ course }: CourseCardProps) {
  const dispatch = useAppDispatch();

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

  const isFavorite = useAppSelector(
    (state) =>
      state.favorites.ids.includes(id),
  );

  const formattedPrice =
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);

  const handleToggleFavorite = () => {
    dispatch(favoriteToggled(id));
  };

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="h-48 w-full object-cover"
        />

        <button
          type="button"
          onClick={handleToggleFavorite}
          aria-label={
            isFavorite
              ? `Bỏ yêu thích ${title}`
              : `Yêu thích ${title}`
          }
          title={
            isFavorite
              ? "Bỏ khỏi yêu thích"
              : "Thêm vào yêu thích"
          }
          className={`absolute top-4 right-4 grid h-11 w-11 place-content-center rounded-full text-xl shadow-md transition hover:scale-110 ${
            isFavorite
              ? "bg-red-500 text-white"
              : "bg-white text-slate-500 hover:text-red-500"
          }`}
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>

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