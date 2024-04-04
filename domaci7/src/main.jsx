import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Posts from "./components/Posts.jsx";
import Post from "./components/Post.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id" element={<Post />} />
      </Route>
    </Routes>
  </Router>
);
