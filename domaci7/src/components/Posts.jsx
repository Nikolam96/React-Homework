import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(true);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => setLoader(false));
  }, []);

  async function deletePost(postId) {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    setPosts(posts.filter((post) => post.id !== postId));
  }

  async function addPost() {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          userId: Math.random() * 1000,
          id: Math.random() * 1000,
          title: title,
          body: body,
        }
      );
      alert("Status : 200");
      setPosts([...posts, response.data]);
      setTitle("");
      setBody("");
    } catch (error) {
      console.error("Error adding post:", error);
    }
  }

  return (
    <div id="posts">
      {loader ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <label htmlFor="title">Title:</label>
          <br />
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br /> <br />
          <label htmlFor="body">Body:</label>
          <br />
          <input
            type="text"
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <br /> <br />
          <button onClick={addPost}>Add Post</button>
          <br /> <br />
          <table border={1}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => {
                return (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>
                      {post.body.substring(0, 100)}...{" "}
                      <Link to={`/post/${post.id}`}>Show More</Link>
                    </td>
                    <td>
                      <button onClick={() => deletePost(post.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};
export default Posts;
