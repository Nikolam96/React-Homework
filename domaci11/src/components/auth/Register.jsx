import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "./../../api/authApi";
import Input from "./Input";

export const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    age: "",
    weight: "",
    password: "",
  });
  const navigate = useNavigate();

  async function register() {
    try {
      const registerResponse = await registerUser(
        userData.username,
        userData.password,
        userData.firstName,
        userData.lastName,
        userData.age,
        userData.weight
      );
      alert(registerResponse.data.message);
      navigate("/login");
    } catch (e) {
      alert(e);
    }
  }
  return (
    <div id="register">
      <Input setUserData={setUserData} userData={userData} extend={true} />
      <button onClick={register}>Register</button>
    </div>
  );
};
