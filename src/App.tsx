import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRoute";
import { fetchCourses } from "./features/courses/coursesSlice";
import DashboardLayout from "./layouts/DashboardLayout";
import MainLayout from "./layouts/MainLayout";
import CourseDetailPage from "./pages/CourseDetailPage";
import CoursesPage from "./pages/CoursesPage";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MyCoursesPage from "./pages/MyCoursesPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import {
  useAppDispatch,
  useAppSelector,
} from "./store/hooks";

function App() {
  const dispatch = useAppDispatch();

  const coursesStatus = useAppSelector(
    (state) => state.courses.status,
  );

  useEffect(() => {
    if (coursesStatus === "idle") {
      dispatch(fetchCourses());
    }
  }, [coursesStatus, dispatch]);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="courses"
          element={<CoursesPage />}
        />
        <Route
          path="courses/:id"
          element={<CourseDetailPage />}
        />
        <Route path="login" element={<LoginPage />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route
          path="dashboard"
          element={<DashboardLayout />}
        >
          <Route
            index
            element={<DashboardPage />}
          />
          <Route
            path="my-courses"
            element={<MyCoursesPage />}
          />
          <Route
            path="profile"
            element={<ProfilePage />}
          />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;