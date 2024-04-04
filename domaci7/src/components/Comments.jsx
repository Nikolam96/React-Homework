import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Comments = () => {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(true);
  const [loader, setLoader] = useState(false);
  let { id } = useParams();

  async function loadComments() {
    setLoader(true);
    await axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id + "/comments")
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        alert(err.message);
      })
      .finally(() => setLoader(false));
  }

  return (
    <div id="comments">
      {comments.length === 0 && (
        <button
          onClick={() => {
            loadComments();
          }}
        >
          Load Comments
        </button>
      )}
      {comments.length > 0 && (
        <button onClick={() => setShowComments(!showComments)}>
          {showComments ? "Hide Comments" : "Show Comments"}
        </button>
      )}
      {comments.length === 0 && loader && <h1>Loading...</h1>}
      {comments.length > 0 &&
        showComments &&
        comments.map((comm) => {
          return (
            <div key={comm.id}>
              <h3>{comm.name}</h3>
              <h4>{comm.email}</h4>
              <p>{comm.body}</p>
              <hr />
            </div>
          );
        })}
    </div>
  );
};
