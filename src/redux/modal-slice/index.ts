import { createSlice } from "@reduxjs/toolkit";

interface ModalAuthorizationType {
  open: boolean;
  isLoading: boolean;
}

interface InitialStateType {
  authorizationModalVisiblty: ModalAuthorizationType;
  orderModalVisiblty: boolean;
}

const initialState: InitialStateType = {
  authorizationModalVisiblty: {
    open: false,
    isLoading: false,
  },
  orderModalVisiblty: false,
};
const modalSlice = createSlice({
  initialState,
  name: "Modal",
  reducers: {
    setAuthorizationModalVisiblty(state, { payload }) {
      state.authorizationModalVisiblty = payload;
    },
    setOrderModalVisiblty(state) {
      state.orderModalVisiblty = !state.orderModalVisiblty;
    },
  },
});

export const { setAuthorizationModalVisiblty, setOrderModalVisiblty } =
  modalSlice.actions;
export default modalSlice.reducer;
