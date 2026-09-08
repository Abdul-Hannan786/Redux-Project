import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    activeTab: "images",
    result: [],
    loading: false,
    error: null,
  },
  reducers: {
    setQuery: (state, actions) => {
      state.query = actions.payload;
    },
    setActiveTab: (state, actions) => {
      state.activeTab = actions.payload;
    },
    setResult: (state, actions) => {
      state.loading = false;
      state.result = actions.payload;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, actions) => {
      state.error = actions.payload;
      state.loading = false;
    },
    clearResult: (state) => {
      state.result = [];
    },
  },
});

export const { setQuery, setActiveTab, setResult, setError, setLoading, clearResult } =
  searchSlice.actions;
export default searchSlice.reducer;
