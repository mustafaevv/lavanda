import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("favorite") || "{}");

export const favorite = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    handleLike: (state, action) => {
      if (state[action.payload.id]) delete state[action.payload.id];
      else state[action.payload.id] = action.payload;
      localStorage.setItem("favorite", JSON.stringify(state));
    },
  },
});

export const { handleLike } = favorite.actions;

export default favorite.reducer;
