import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modal-slice";
import shopSlice from "./shop-slice";
import couponSlice from "./coupon-slice";
export const store = configureStore({
  reducer: { modalSlice, shopSlice, couponSlice },
});

export type DispatchType = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;
