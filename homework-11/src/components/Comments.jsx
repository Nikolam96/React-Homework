import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCommentsRequest } from "../actions/CommentsActions";

export const Comments = () => {
  const dispatch = useDispatch();
  const { comments, err } = useSelector((state) => state.CommentsReducer);

  useEffect(() => {
    dispatch(fetchCommentsRequest());
  }, [dispatch]);

  return (
    <div id="comments">
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <p>
              <b>Name: </b>
              {comment.name}
            </p>
            <p>
              <b>Email: </b>
              {comment.email}
            </p>
            <p>
              <b>Body: </b>
              {comment.body}
            </p>
            <hr />
          </div>
        );
      })}
      {err && <h1>{err}</h1>}
    </div>
  );
};
