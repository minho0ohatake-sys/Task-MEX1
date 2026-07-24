import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { getMockCourses } from "../../data/courses";
import type { RootState } from "../../store/store";
import type { Course } from "../../types/course";

export type CoursesStatus =
  | "idle"
  | "loading"
  | "succeeded"
  | "failed";

type CoursesState = {
  items: Course[];
  status: CoursesStatus;
  error: string | null;
};

type FetchCoursesOptions = {
  simulateError?: boolean;
};

const initialState: CoursesState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchCourses = createAsyncThunk<
  Course[],
  FetchCoursesOptions | undefined,
  {
    state: RootState;
    rejectValue: string;
  }
>(
  "courses/fetchCourses",
  async (options, { rejectWithValue }) => {
    try {
      return await getMockCourses(options);
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }

      return rejectWithValue(
        "Đã xảy ra lỗi không xác định.",
      );
    }
  },
  {
    condition: (_, { getState }) => {
      return (
        getState().courses.status !== "loading"
      );
    },
  },
);

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        fetchCourses.fulfilled,
        (state, action) => {
          state.status = "succeeded";
          state.items = action.payload;
          state.error = null;
        },
      )
      .addCase(
        fetchCourses.rejected,
        (state, action) => {
          state.status = "failed";
          state.error =
            action.payload ??
            action.error.message ??
            "Không thể tải khóa học.";
        },
      );
  },
});

export default coursesSlice.reducer;