//! Za domasna:
//? Nov proekt so setup na router v6 i 2 komponenti.
//* Posts fetchot da se napravi vo App.jsx (Obicen tabelaren prikaz na propertijata na postovite).
//? Todos fectchot da se napravi vo samata komponenta (checkbox lista na elementi so OnChange handler na vrednosta zemena od https://jsonplaceholder.typicode.com/todos).

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Posts } from "./components/Posts";
import { Todos } from "./components/Todos";
import { Navigation } from "./components/Navigation";
import { NotFound } from "./components/NotFound";

import "./css/App.css";

export const App = () => {
  const [posts, setPosts] = useState([]);
  function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setPosts(json))
      .catch((err) => alert(err));
  }

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/posts" element={<Posts postsList={posts} />} />
        <Route
          path="/todos"
          element={<Todos todos={todos} setTodos={setTodos} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
