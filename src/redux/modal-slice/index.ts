import { createSlice } from "@reduxjs/toolkit";

interface ModalAuthorizationType {
  open: boolean;
  isLoading: boolean;
}

interface InitialStateType {
  authorizationModalVisiblty: ModalAuthorizationType;
  logOutModalVisiblty: boolean;
}

const initialState: InitialStateType = {
  authorizationModalVisiblty: {
    open: false,
    isLoading: false,
  },
  logOutModalVisiblty: false,
};
const modalSlice = createSlice({
  initialState,
  name: "Modal",
  reducers: {
    setAuthorizationModalVisiblty(state, { payload }) {
      state.authorizationModalVisiblty = payload;
    },
    setLogoutModalVisiblty(state) {
      state.logOutModalVisiblty = !state.logOutModalVisiblty;
    },
  },
});

export const { setAuthorizationModalVisiblty, setLogoutModalVisiblty } =
  modalSlice.actions;
export default modalSlice.reducer;
