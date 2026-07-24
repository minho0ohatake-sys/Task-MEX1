import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

const selectCourses = (state: RootState) =>
  state.courses.items;

const selectUserCourseIds = (state: RootState) =>
  state.auth.user?.courseIds;

export const selectMyCourses = createSelector(
  [selectCourses, selectUserCourseIds],
  (courses, courseIds) => {
    if (!courseIds) {
      return [];
    }

    return courses.filter((course) =>
      courseIds.includes(course.id),
    );
  },
);