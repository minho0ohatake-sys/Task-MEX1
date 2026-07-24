import {
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

type FavoritesState = {
  ids: string[];
};

const STORAGE_KEY = "mex-learning-favorites";

function loadFavoriteIds(): string[] {
  try {
    const savedValue =
      localStorage.getItem(STORAGE_KEY);

    if (!savedValue) {
      return [];
    }

    const parsedValue: unknown =
      JSON.parse(savedValue);

    if (!Array.isArray(parsedValue)) {
      return [];
    }

    return parsedValue.filter(
      (id): id is string =>
        typeof id === "string",
    );
  } catch {
    return [];
  }
}

const initialState: FavoritesState = {
  ids: loadFavoriteIds(),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    favoriteToggled(
      state,
      action: PayloadAction<string>,
    ) {
      const courseId = action.payload;
      const isFavorite =
        state.ids.includes(courseId);

      if (isFavorite) {
        state.ids = state.ids.filter(
          (id) => id !== courseId,
        );
      } else {
        state.ids.push(courseId);
      }
    },

    favoritesCleared(state) {
      state.ids = [];
    },
  },
});

export const {
  favoriteToggled,
  favoritesCleared,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;