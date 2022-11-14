import { createSlice } from "@reduxjs/toolkit";

const initialLang = "en";

export const languages = createSlice({
  name: "filter",
  initialState: initialLang,
  reducers: {
    newFilter(_state, action) {
      return action.payload;
    },
  },
});

export const { curentLang } = languages.actions;
