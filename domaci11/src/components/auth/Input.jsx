import { useState } from "react";
import PropTypes from "prop-types";

const Input = ({ setUserData, userData, extend }) => {
  const [showPass, setShowPass] = useState(false);
  const [showData, setShowData] = useState(extend);

  return (
    <div>
      {showData && (
        <>
          <label>Name:</label>
          <input
            type={"text"}
            placeholder="Enter Name"
            value={userData.firstName}
            onChange={(e) => {
              setUserData({ ...userData, firstName: e.target.value });
            }}
          />
          <br />
          <br />
          <label>Lastname:</label>
          <input
            type={"text"}
            placeholder="Enter Lastname"
            value={userData.lastName}
            onChange={(e) => {
              setUserData({ ...userData, lastName: e.target.value });
            }}
          />
          <br />
          <br />
          <label>Age:</label>
          <input
            type={"number"}
            placeholder="Enter Age"
            value={userData.age}
            onChange={(e) => {
              setUserData({ ...userData, age: e.target.value });
            }}
          />
          <br />
          <br />
          <label>Weight:</label>
          <input
            type={"number"}
            placeholder="Enter weight"
            value={userData.weight}
            onChange={(e) => {
              setUserData({ ...userData, weight: e.target.value });
            }}
          />
          <br />
          <br />
        </>
      )}
      <label>Username:</label>
      <input
        type={"text"}
        placeholder="Enter Username"
        value={userData.username}
        onChange={(e) => {
          setUserData({ ...userData, username: e.target.value });
        }}
      />
      <br />
      <br />
      <label>Password:</label>
      <input
        type={showPass ? "text" : "password"}
        placeholder="Enter Password"
        value={userData.password}
        onChange={(e) => {
          setUserData({ ...userData, password: e.target.value });
        }}
      />
      <button onClick={() => setShowPass(!showPass)}>
        {showPass ? "Hide" : "Show"} Password
      </button>
      <br />
      <br />
    </div>
  );
};
export default Input;

Input.propTypes = {
  setUserData: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired,
  extend: PropTypes.bool.isRequired,
};
