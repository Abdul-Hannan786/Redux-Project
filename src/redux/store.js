import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    search: SearchReducer,
  },
});
