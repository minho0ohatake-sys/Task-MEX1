import { Link } from "react-router-dom";
import CourseList from "../components/course/CourseList";
import { useAppDispatch, useAppSelector, } from "../store/hooks";
import { fetchCourses } from "../features/courses/coursesSlice";
import { useEffect } from "react";

const features = [
  {
    icon: "📚",
    title: "Khóa học chất lượng",
    description:
      "Nội dung được xây dựng rõ ràng, phù hợp với nhiều trình độ.",
  },
  {
    icon: "💻",
    title: "Học mọi lúc",
    description:
      "Truy cập khóa học dễ dàng trên máy tính, tablet và điện thoại.",
  },
  {
    icon: "📈",
    title: "Theo dõi tiến độ",
    description:
      "Quản lý khóa học và theo dõi hành trình học tập trong dashboard.",
  },
];

function HomePage() {

  const dispatch = useAppDispatch();

  const { items, status } = useAppSelector(
    (state) => state.courses
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCourses());
    }
  }, [dispatch, status]);

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white shadow-xl">
        <div className="grid items-center lg:grid-cols-2">
          <div className="p-8 sm:p-12 lg:p-16">
            <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
              Nền tảng học tập trực tuyến
            </span>

            <h1 className="mt-6 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
              Phát triển kỹ năng cùng MEX Learning
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Khám phá các khóa học thực tế, xây dựng kỹ năng
              chuyên môn và tiến gần hơn đến mục tiêu nghề nghiệp
              của bạn.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/courses"
                className="rounded-xl bg-white px-6 py-3 text-center font-semibold text-blue-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Khám phá khóa học
              </Link>

              <Link
                to="/login"
                className="rounded-xl border border-white/50 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Đăng nhập
              </Link>
            </div>
          </div>

          <div className="relative min-h-80 lg:h-full">
            <img
              src="https://picsum.photos/seed/mex-learning/900/700"
              alt="Không gian học tập trực tuyến"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent lg:bg-gradient-to-r lg:from-blue-700/50 lg:to-transparent" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <strong className="text-3xl font-bold text-blue-600">
            20+
          </strong>
          <p className="mt-2 text-sm text-slate-600">
            Khóa học
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <strong className="text-3xl font-bold text-blue-600">
            10+
          </strong>
          <p className="mt-2 text-sm text-slate-600">
            Giảng viên
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <strong className="text-3xl font-bold text-blue-600">
            1.000+
          </strong>
          <p className="mt-2 text-sm text-slate-600">
            Học viên
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <strong className="text-3xl font-bold text-blue-600">
            4.8/5
          </strong>
          <p className="mt-2 text-sm text-slate-600">
            Đánh giá trung bình
          </p>
        </article>
      </section>

      {/* Courses */}
      <section>
        <div className="mb-8 text-center">
          <span className="font-semibold text-blue-600">
            Khóa học nổi bật
          </span>

          <h2 className="mt-2 text-3xl font-bold">
            Danh sách khóa học
          </h2>

          <p className="mt-3 text-slate-600">
            Khám phá các khóa học được nhiều học viên lựa chọn.
          </p>
        </div>

        {status === "loading" || status === "idle" ? (
          <p className="text-center">
            Đang tải khóa học...
          </p>
        ) : (
          <CourseList courses={items} />
        )}

        <div className="mt-8 text-center">
          <Link
            to="/courses"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Xem tất cả khóa học
          </Link>
        </div>
      </section>

      {/* Features */}
      <section>
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-semibold text-blue-600">
            Tại sao chọn chúng tôi?
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Học tập đơn giản và hiệu quả
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            MEX Learning cung cấp những công cụ cần thiết để
            bạn học tập và phát triển kỹ năng.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="grid h-14 w-14 place-content-center rounded-2xl bg-blue-100 text-2xl">
                {feature.icon}
              </span>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl bg-slate-900 px-6 py-12 text-center text-white sm:px-12">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Sẵn sàng bắt đầu học?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
          Khám phá danh sách khóa học và bắt đầu hành trình
          phát triển kỹ năng của bạn ngay hôm nay.
        </p>

        <Link
          to="/courses"
          className="mt-8 inline-flex rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-500"
        >
          Xem tất cả khóa học
        </Link>
      </section>
    </div>
  );
}

export default HomePage;