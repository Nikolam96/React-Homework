import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Comments = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => setComments(res.data))
      .catch((err) => alert(err.message));
  }, []);

  async function deleteItems(id) {
    const deletedItem = await axios.delete(
      `https://jsonplaceholder.typicode.com/comments/${id}`
    );
    alert(deletedItem.status);
    setComments([...comments.filter((comment) => comment.id !== id)]);
  }
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Body</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {comments.map((comm) => {
          return (
            <tr key={comm.id}>
              <td>{comm.id}</td>
              <td>{comm.name}</td>
              <td>{comm.email}</td>
              <td>
                {comm.body.substring(0, 100)}...
                <Link to={"/comments/" + comm.id}>More...</Link>
              </td>
              <td>
                <button
                  onClick={() => {
                    deleteItems(comm.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
