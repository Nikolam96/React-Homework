import { useState, useEffect } from "react";
import Input from "./Input";
import Select from "./Select";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [comment, setcomment] = useState("");
  const [app, setapp] = useState("");
  const [type, settype] = useState("password");

  const elements = [
    { value: "Facebook", name: "Facebook" },
    { value: "Instagram", name: "Instagram" },
    { value: "SnapChat", name: "SnapChat" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    !username || !password || !app
      ? alert("Invalid input")
      : alert(
          `Username : ${username}
         Password : ${password}
         Social : ${app}
         Comment : ${comment}`
        );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type={"text"}
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
          placeholder={"Enter Username"}
        />
        <Input
          type={type}
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          placeholder={"Enter Password"}
          name={"password"}
          onClick={() => settype(type === "password" ? "text" : "password")}
        />
        <Select elements={elements} onChange={(e) => setapp(e.target.value)} />
        <Input
          type={"text"}
          value={comment}
          onChange={(e) => {
            setcomment(e.target.value);
          }}
          placeholder={"Enter Comment"}
          name={"comment"}
        />
        <button>Sing In</button>
      </form>
    </>
  );
};
export default Login;
