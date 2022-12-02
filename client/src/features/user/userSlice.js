import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  user: {}
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsers: (state, { payload }) => {
      state.users = payload;
    },
    getUserById: (state, { payload }) => {
      state.user = payload;
    },
    deleteUser: (state, { payload }) => {
      state.users = state.users.filter(user => user._id !== payload)
    }
  },
});


export const { getUsers, getUserById, deleteUser } = userSlice.actions;

export default userSlice.reducer;