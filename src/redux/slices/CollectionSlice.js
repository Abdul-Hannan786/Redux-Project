import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

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
    addToast: (state, actions) => {
      toast.success(actions.payload, {
        style: {
          borderRadius: "10px",
        },
      });
    },
  },
});

export const { addCollection, removeCollection, clearCollection, addToast } =
  collectionSlice.actions;
export default collectionSlice.reducer;
