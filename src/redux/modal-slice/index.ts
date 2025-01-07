import { createSlice } from "@reduxjs/toolkit";

interface ModalAuthorizationType {
  open: boolean;
  isLoading: boolean;
}

interface InitialStateType {
  authorizationModalVisiblty: ModalAuthorizationType;
}

const initialState: InitialStateType = {
  authorizationModalVisiblty: {
    open: false,
    isLoading: false,
  },
};
const modalSlice = createSlice({
  initialState,
  name: "Modal",
  reducers: {
    setAuthorizationModalVisiblty(state, { payload }) {
      state.authorizationModalVisiblty = payload;
    },
  },
});

export const { setAuthorizationModalVisiblty } = modalSlice.actions;
export default modalSlice.reducer;
