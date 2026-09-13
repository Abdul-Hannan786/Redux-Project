import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "./slices/searchSlice";
import CollectionReducer from "./slices/CollectionSlice";

export const store = configureStore({
  reducer: {
    search: SearchReducer,
    collection: CollectionReducer
  },
});
