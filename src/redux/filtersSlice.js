import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  filters: {
    name: "",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  reducers: {
    setFilterValue(state, action) {
      state.filters.name = action.payload;
    },
  },
});

export const selectNameFilter = (state) => state.filters.filters.name;
export const filtersReducer = filterSlice.reducer;
export const { setFilterValue } = filterSlice.actions;
