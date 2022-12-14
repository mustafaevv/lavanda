import { configureStore } from "@reduxjs/toolkit";

import cart from "./cart";
import favorite from "./favorite";

const store = configureStore({
  reducer: {
    favorite,
    cart
  },
});

export default store;
