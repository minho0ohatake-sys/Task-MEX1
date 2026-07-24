import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import MainLayout from "./layouts/MainLayout";
import CourseDetailPage from "./pages/CourseDetailPage";
import CoursesPage from "./pages/CoursesPage";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Routes>
      {/* Public routes */}
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

      {/* Private routes */}
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