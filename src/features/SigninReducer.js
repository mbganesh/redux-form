import { createSlice } from "@reduxjs/toolkit";

export const signinSlice = createSlice({
  name: "signin",
  initialState: {
    data: {
      emailid: "",
      password: ""
    },
  },
  reducers: {
    signinhit: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { signinhit } = signinSlice.actions;
export default signinSlice.reducer;
