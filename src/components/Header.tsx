import { NavLink } from "react-router-dom";

function Header() {
    const getNavClass = ({
        isActive,
    }: {
        isActive: boolean;
    }) =>
        `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${isActive
            ? "bg-white text-blue-600"
            : "text-blue-100 hover:bg-blue-500 hover:text-white"
        }`;

    return (
        <header className="bg-blue-600 text-white shadow-md">
            <div className="mx-auto flex min-h-18 max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 sm:px-6 md:flex-row md:py-0 lg:px-8">
                <NavLink
                    to="/"
                    className="text-xl font-bold tracking-tight"
                >
                    MEX Learning
                </NavLink>

                <nav className="flex flex-wrap justify-center gap-2">
                    <NavLink to="/" end className={getNavClass}>
                        Home
                    </NavLink>

                    <NavLink to="/courses" className={getNavClass}>
                        Courses
                    </NavLink>

                    <NavLink
                        to="/favorites"
                        className={getNavClass}
                    >
                        Favorites
                    </NavLink>

                    <NavLink to="/dashboard" className={getNavClass}>
                        Dashboard
                    </NavLink>

                    <NavLink to="/login" className={getNavClass}>
                        Login
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;