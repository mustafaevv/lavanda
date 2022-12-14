import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart") || "{}");
const saveToLocalStorage = (state) =>
  localStorage.setItem("cart", JSON.stringify(state));

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state[action.payload.id] = {
        ...action.payload,
        quantity: 1,
      };
      saveToLocalStorage(state);
    },
    addOne: (state, action) => {
      state[action.payload].quantity++;
      saveToLocalStorage(state);
    },
    removeFromCart: (state, action) => {
      delete state[action.payload];
      saveToLocalStorage(state);
    },
    removeOne: (state, action) => {
      if (state[action.payload].quantity > 1) {
        state[action.payload].quantity--;
        saveToLocalStorage(state);
      }
    },
  },
});

export const getItemsCount = createSelector(
  (state) => Object.values(state.cart),
  (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity, 0)
);

export const { addToCart, addOne, removeFromCart, removeOne } = cart.actions;

export default cart.reducer;
