import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-300">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
                {/* Brand */}
                <div className="lg:col-span-2">
                    <Link
                        to="/"
                        className="text-2xl font-bold text-white transition-colors hover:text-blue-400"
                    >
                        MEX Learning
                    </Link>

                    <p className="mt-4 max-w-md leading-7 text-slate-400">
                        Nền tảng học tập trực tuyến giúp bạn khám phá
                        khóa học, phát triển kỹ năng và quản lý hành
                        trình học tập hiệu quả.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h2 className="font-bold text-white">
                        Liên kết
                    </h2>

                    <nav className="mt-4 grid gap-3 text-sm">
                        <Link
                            to="/"
                            className="transition-colors hover:text-blue-400"
                        >
                            Trang chủ
                        </Link>

                        <Link
                            to="/courses"
                            className="transition-colors hover:text-blue-400"
                        >
                            Khóa học
                        </Link>

                        <Link
                            to="/login"
                            className="transition-colors hover:text-blue-400"
                        >
                            Đăng nhập
                        </Link>

                        <Link
                            to="/dashboard"
                            className="transition-colors hover:text-blue-400"
                        >
                            Dashboard
                        </Link>
                    </nav>
                </div>

                {/* Resources */}
                <div>
                    <h2 className="font-bold text-white">
                        Tài nguyên
                    </h2>

                    <div className="mt-4 grid gap-3 text-sm">
                        <Link
                            to="/dashboard/my-courses"
                            className="transition-colors hover:text-blue-400"
                        >
                            Khóa học của tôi
                        </Link>

                        <Link
                            to="/favorites"
                            className="transition-colors hover:text-blue-400"
                        >
                            Khóa học yêu thích
                        </Link>

                        <Link
                            to="/dashboard/profile"
                            className="transition-colors hover:text-blue-400"
                        >
                            Hồ sơ cá nhân
                        </Link>

                        <a
                            href="https://github.com/minho0ohatake-sys/Task-MEX1"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors hover:text-blue-400"
                        >
                            GitHub Project ↗
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-800">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8">
                    <p>
                        © 2026 MEX Learning. All rights reserved.
                    </p>

                    <p>
                        Developed by{" "}
                        <a
                            href="https://github.com/minho0ohatake-sys"
                            target="_blank"
                            rel="noreferrer"
                            className="font-semibold text-slate-300 transition-colors hover:text-blue-400"
                        >
                            Nguyễn Quang Minh
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;