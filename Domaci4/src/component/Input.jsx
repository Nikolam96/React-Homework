import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "../assets/index.css";

//* Testiram sa submit,ali moze umesto onSubmit/onChange

export function Input() {
  const previousInputValue = useRef("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showTable, setShowTable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      ["firstName"]: e.target.firstName.value,
      ["lastName"]: e.target.lastName.value,
      ["email"]: e.target.email.value,
      ["password"]: e.target.password.value,
      ["confirmPassword"]: e.target.confirmPassword.value,
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="form-container">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h3>Sign Up</h3>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter your last name"
            name="lastName"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <br />
      <br />
      <button onClick={() => setShowTable(!showTable)}>
        {showTable ? "Hide Table" : "Show Table"}
      </button>
      <br />
      <br />
      {showTable && (
        <table border={1} cellSpacing={5} cellPadding={15}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Confirm Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{form.firstName}</td>
              <td>{form.lastName}</td>
              <td>{form.email}</td>
              <td>{form.password}</td>
              <td>{form.confirmPassword}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
