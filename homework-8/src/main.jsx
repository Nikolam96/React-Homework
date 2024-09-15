import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { Comments } from "./components/Comments.jsx";
import { CommentsDetails } from "./components/CommentsDetails.jsx";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/comments" element={<Comments />}></Route>
      <Route path="/comments/:id" element={<CommentsDetails />}></Route>
    </Routes>
  </Router>
);
