import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App.jsx";
import { Users } from "./components/users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.jsx";
import { Login } from "./components/auth/Login.jsx";
import { PrivateRoute } from "./utils/PrivateRoute.jsx";
import { Register } from "./components/auth/Register.jsx";
import Photos from "./components/photos/Photos.jsx";
import Todos from "./components/todos/Todos.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/login" index element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <App />
            </PrivateRoute>
          }
        >
          <Route path="/users" element={<Users />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/todos" element={<Todos />} />
        </Route>
      </Routes>
    </Router>
  </Provider>
);
