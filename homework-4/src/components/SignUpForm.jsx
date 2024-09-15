import { useState, useEffect } from "react";
import "./../css/Index.css";

export function SignUpForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showTable, setShowTable] = useState(false);

  const handleChange = (e, field) => {
    const { value } = e.target;
    setForm({ ...form, [field]: value });
  };

  useEffect(() => {
    if (showTable) {
      console.log("Form", form);
    }
  }, [form, showTable]);

  return (
    <div>
      <div className="form-container">
        <form>
          <h3>Sign Up</h3>
          <input
            type="text"
            placeholder="Enter your first name"
            value={form.firstName}
            onChange={(e) => handleChange(e, "firstName")}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter your last name"
            value={form.lastName}
            onChange={(e) => handleChange(e, "lastName")}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter your email"
            value={form.email}
            onChange={(e) => handleChange(e, "email")}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={(e) => handleChange(e, "password")}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Confirm password"
            value={form.confirmPassword}
            onChange={(e) => handleChange(e, "confirmPassword")}
          />
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
        <table border={1} cellSpacing={10} cellPadding={10}>
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
