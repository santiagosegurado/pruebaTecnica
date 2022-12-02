import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  name: "",
  username: "",
  email: "",
  accessToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state._id = payload._id;
      state.name = payload.name;
      state.username = payload.username;
      state.accessToken = payload.accessToken;
      state.email = payload.email;
      localStorage.setItem("auth", JSON.stringify(payload));
    },
    logout: (state) => {
      state.accessToken = ''
      state._id = ''
      state.name = ''
      state.username = ''
      state.email = ''

      localStorage.removeItem('auth')
    }
  },
});


export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
