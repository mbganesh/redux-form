import { createSlice } from "@reduxjs/toolkit";

export const signupSlice = createSlice({
  name: "signup",
  initialState: {
    data: {
      name: "",
      phoneno: "",
      emailid: "",
      password: "",
    },
  },
  reducers: {
    signuphit: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { signuphit } = signupSlice.actions;
export default signupSlice.reducer;
