import axios from "axios";
import {
  COMMENTS_RESOLVE,
  COMMENTS_REJECT,
  COMMENTS_DELETE_REJECT,
  COMMENTS_DELETE_RESOLVE,
} from "../constants/CommentsConstant";

export const commentsReject = (error) => {
  return {
    type: COMMENTS_REJECT,
    payload: error,
  };
};

export const commentsResolve = (data) => {
  return {
    type: COMMENTS_RESOLVE,
    payload: data,
  };
};

export const deleteResolve = (id) => {
  return {
    type: COMMENTS_DELETE_RESOLVE,
    payload: id,
  };
};

export const deleteReject = (err) => {
  return {
    type: COMMENTS_DELETE_REJECT,
    payload: err,
  };
};

export const deleteCommentsRequest = (id) => {
  return (dispatch) => {
    axios
      .delete("https://jsonplaceholder.typicode.com/comments/" + id)
      .then((res) => dispatch(deleteResolve(id)))
      .catch((err) => dispatch(deleteReject(err.message)));
  };
};

export const fetchComments = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((result) => dispatch(commentsResolve(result.data)))
      .catch((error) => dispatch(commentsReject(error.message)));
  };
};
