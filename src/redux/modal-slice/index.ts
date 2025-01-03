import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  authorizationModalVisiblty: boolean;
}

const initialState: InitialStateType = {
  authorizationModalVisiblty: false,
};
const modalSlice = createSlice({
  initialState,
  name: "Modal",
  reducers: {
    setAuthorizationModalVisiblty(state) {
      state.authorizationModalVisiblty = !state.authorizationModalVisiblty;
    },
  },
});

export const { setAuthorizationModalVisiblty } = modalSlice.actions;
export default modalSlice.reducer;
