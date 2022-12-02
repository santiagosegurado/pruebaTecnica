import { login } from "../features/auth/authSlice";
import { deleteUser, getUserById, getUsers } from "../features/user/userSlice";



export const startLogin = ({ email, password }) => async (dispatch) => {
  const resp = await fetch("http://localhost:4000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await resp.json();

  dispatch(login(data));
};

export const startRegister = (user) => async (dispatch) => {
  const resp = await fetch("http://localhost:4000/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  const data = await resp.json();

  dispatch(login(data));
};


export const getAllUsers = () => async(dispatch) => {

  const resp = await fetch("http://localhost:4000/api/user");
  const data = await resp.json();

  dispatch(getUsers(data));

};


export const getUser = (id) => async(dispatch) => {

  const resp = await fetch(`http://localhost:4000/api/user/${id}`, {
    headers: {
      "token": JSON.parse(localStorage.getItem("auth")).accessToken
    }
  });
  const data = await resp.json();

  dispatch(getUserById(data));

};


export const destroyUser = (id) => async(dispatch) => {

  const resp = await fetch(`http://localhost:4000/api/user/${id}`, {
    method: "DELETE",
    headers: {
      "token": JSON.parse(localStorage.getItem("auth")).accessToken
    }
  });
  const data = await resp.json();

  console.log(data)

  dispatch(deleteUser(id));

};


