import {
  useState,
  type FormEvent,
} from "react";
import {
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function LoginPage() {
  const navigate = useNavigate();
  const { isLoggedIn, login } = useAuth();

  const [email, setEmail] = useState("");

  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const normalizedEmail = email.trim();

    if (!normalizedEmail) {
      return;
    }

    login(normalizedEmail);
    navigate("/dashboard", { replace: true });
  };

  return (
    <section className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h1 className="text-3xl font-bold text-slate-900">
        Đăng nhập
      </h1>

      <p className="mt-2 text-slate-600">
        Nhập email bất kỳ để đăng nhập vào dashboard.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5"
      >
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            placeholder="example@email.com"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-3 focus:ring-blue-100"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Đăng nhập
        </button>
      </form>
    </section>
  );
}

export default LoginPage;