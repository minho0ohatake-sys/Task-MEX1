import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import coursesReducer from "../features/courses/coursesSlice";
import favoritesReducer from "../features/favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: coursesReducer,
    favorites: favoritesReducer,
  },
});

store.subscribe(() => {
  try {
    const favoriteIds =
      store.getState().favorites.ids;

    localStorage.setItem(
      "mex-learning-favorites",
      JSON.stringify(favoriteIds),
    );
  } catch {
    // Không làm ứng dụng bị lỗi nếu localStorage
    // không khả dụng.
  }
});

export type RootState =
  ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;