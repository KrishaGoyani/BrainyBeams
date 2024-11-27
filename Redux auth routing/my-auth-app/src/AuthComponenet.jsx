import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, loginFailure, logout } from "./features/auth/authSlice";

const AuthComponent = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, error } = useSelector((state) => state.auth);

  const handleLogin = () => {
    const userData = { id: 1, name: "Brainy Beams", email: "brainybeams@mail.com" };
    try {
      dispatch(loginSuccess(userData));
    } catch {
      dispatch(loginFailure("Login failed. Please try again."));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h1>{isAuthenticated ? `Welcome, ${user.name}` : "Please log in"}</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AuthComponent;
