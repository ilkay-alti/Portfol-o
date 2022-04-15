import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    dark: true,
  },
  reducers: {
    chooseTheme: (state) => {
      state.dark = !state.dark;
    },
  },
});

export const { chooseTheme } = themeSlice.actions;
export default themeSlice.reducer;
