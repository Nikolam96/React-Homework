import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIntoApp } from "./duck/operations";
import { useNavigate, Link } from "react-router-dom";
import Input from "./Input";

export const Login = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function logIn() {
    try {
      dispatch(logIntoApp(loginData.username, loginData.password));
      navigate("/users");
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div id="login">
      <Input setUserData={setLoginData} userData={loginData} extend={false} />
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
      <button onClick={logIn}>Log In</button>
    </div>
  );
};
