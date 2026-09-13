import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("collection")) || [],
};

export const collectionSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addCollection: (state, actions) => {
      const alreadyExists = state.items.find(
        (item) => item.id === actions.payload.id,
      );
      if (!alreadyExists) {
        state.items.push(actions.payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
      }
    },
    removeCollection: (state, actions) => {
      state.items = state.items.filter((item) => item.id !== actions.payload);
      localStorage.setItem("collection", JSON.stringify(state.items));
    },
    clearCollection: (state) => {
      state.items = [];
      localStorage.removeItem("collection");
    },
  },
});

export const { addCollection, removeCollection, clearCollection } =
  collectionSlice.actions;
export default collectionSlice.reducer