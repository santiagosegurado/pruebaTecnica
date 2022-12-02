import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { useDispatch, useSelector } from "react-redux";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { login } from "./features/auth/authSlice";

export const App = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("auth"))) {
      
      dispatch(login(JSON.parse(localStorage.getItem("auth"))));
    }

  }, [auth]);


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes auth={{...auth}}/>}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
