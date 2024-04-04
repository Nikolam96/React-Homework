import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Posts from "./components/Posts";
import Navigation from "./components/Navigation";
import { NotFound } from "./components/NotFound";
import { Todos } from "./components/Todos";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await response.json();
      setPosts(data);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<h1>Welcome to our Page</h1>} />
        <Route path="/posts" element={<Posts posts={posts} />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
