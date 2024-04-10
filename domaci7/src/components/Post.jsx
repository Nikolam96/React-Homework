import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Comments } from "./Comments";

const Post = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setDetails(res.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const saveChanges = async () => {
    try {
      await axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        title: title,
        body: body,
      });
      alert("Changes saved successfully!");
    } catch (error) {
      alert("Failed to save changes.");
    } finally {
      setEditing(false);
    }
  };

  return (
    <div id="post-details">
      {editing ? (
        <>
          <label htmlFor="title">Title:</label>
          <br />
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="body">Body:</label>
          <br />
          <input
            type="text"
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <br />
          <br />
          <button onClick={saveChanges}>Save</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
          <br />
          <br />
        </>
      ) : (
        <>
          <h2>{details.title}</h2>
          <p>{details.body}</p>
          <button
            onClick={() => {
              setEditing(true);
              setTitle(details.title);
              setBody(details.body);
            }}
          >
            Edit
          </button>
          <br />
          <br />
        </>
      )}
      {loading ? <h1>Loading...</h1> : <Comments />}
    </div>
  );
};

export default Post;
