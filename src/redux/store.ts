import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modal-slice";
import shopSlice from "./shop-slice";
export const store = configureStore({
  reducer: { modalSlice, shopSlice },
});

export type DispatchType = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;
