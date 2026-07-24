import {
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { Course } from "../../types/course";

type CoursesState = {
  items: Course[];
  status: "idle" | "succeeded";
};

const initialState: CoursesState = {
  items: [],
  status: "idle",
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    coursesLoaded(
      state,
      action: PayloadAction<Course[]>,
    ) {
      state.items = action.payload;
      state.status = "succeeded";
    },
  },
});

export const { coursesLoaded } =
  coursesSlice.actions;

export default coursesSlice.reducer;