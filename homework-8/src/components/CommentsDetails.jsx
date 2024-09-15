import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const CommentsDetails = () => {
  const navigate = useNavigate();
  const [commentsDetails, setCommentsDetails] = useState({});
  const [edit, setEdit] = useState(false);
  const [newFields, setNewFields] = useState({
    text: "",
    title: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((res) => {
        setCommentsDetails(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err.message);
      });
  }, [id]);

  async function updateItems() {
    try {
      setIsLoading(true);
      const updatedItems = {
        ...commentsDetails,
        name: newFields.title,
        body: newFields.text,
        email: newFields.email,
      };
      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/comments/${id}`,
        updatedItems
      );
      if (res.status === 200) {
        setCommentsDetails(updatedItems);
        setEdit(true);
        alert("Items updated successfully");
        navigate("/comments");
      } else {
        alert("Items failed to update");
      }
    } catch (err) {
      alert("Error updating items: " + err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div id="comments-details">
      {isLoading ? (
        <div className="loader-container">
          <i className="fas fa-spinner fa-spin fa-2x"></i>
        </div>
      ) : edit ? (
        <div>
          <h2>Title:</h2>
          <input
            type="text"
            value={newFields.title}
            onChange={(e) =>
              setNewFields({ ...newFields, title: e.target.value })
            }
            placeholder="Title"
          />
          <h2>Email:</h2>
          <input
            type="text"
            value={newFields.email}
            onChange={(e) =>
              setNewFields({ ...newFields, email: e.target.value })
            }
            placeholder="Email"
          />
          <br />
          <h2>Comment:</h2>
          <textarea
            cols={30}
            rows={10}
            value={newFields.text}
            onChange={(e) =>
              setNewFields({ ...newFields, text: e.target.value })
            }
            placeholder="Comment"
          />
          <button onClick={updateItems}>Save</button>
          <button onClick={() => setEdit(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h2>Title: {commentsDetails.name}</h2>
          <h2>Email: {commentsDetails.email}</h2>
          <h2>Comment: {commentsDetails.body}</h2>
          <button onClick={() => setEdit(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};
