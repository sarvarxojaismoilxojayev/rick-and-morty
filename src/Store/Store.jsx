import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Cards";

export const store = configureStore({

  reducer: {
    app: cartSlice,
  },
});
