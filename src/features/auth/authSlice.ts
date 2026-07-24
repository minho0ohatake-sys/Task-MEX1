import {
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

export type User = {
  email: string;
  courseIds: string[];
};

type AuthState = {
  user: User | null;
  isLoggedIn: boolean;
};

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(
      state,
      action: PayloadAction<string>,
    ) {
      state.user = {
        email: action.payload,
        courseIds: [
          "react-fundamentals",
          "typescript-complete",
          "tailwind-css",
        ],
      };

      state.isLoggedIn = true;
    },

    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;