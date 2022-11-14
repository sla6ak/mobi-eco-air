import { configureStore } from "@reduxjs/toolkit";
import { languages } from "./langSlise";

export const store = configureStore({
  reducer: {
    language: languages.reducer,
  },
});
