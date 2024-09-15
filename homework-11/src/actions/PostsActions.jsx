import axios from "axios";
import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAIL,
} from "../constants/PostsConstants";

export const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

export const fetchPostsFail = (err) => {
  return {
    type: FETCH_POSTS_FAIL,
    payload: err,
  };
};

export const fetchPostsRequest = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => dispatch(fetchPostsSuccess(res.data)))
      .catch((err) => dispatch(fetchPostsFail(err.message)));
  };
};
