import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

const selectCourses = (state: RootState) =>
  state.courses.items;

const selectFavoriteIds = (state: RootState) =>
  state.favorites.ids;

export const selectFavoriteCourses =
  createSelector(
    [selectCourses, selectFavoriteIds],
    (courses, favoriteIds) =>
      courses.filter((course) =>
        favoriteIds.includes(course.id),
      ),
  );