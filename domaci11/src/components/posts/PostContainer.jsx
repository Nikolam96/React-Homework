import { useEffect } from "react";
import { PostComponent } from "./PostComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./duck/operations";

export default function PostContainer() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer.posts);
  const error = useSelector((state) => state.postReducer.error);

  useEffect(() => {
    dispatch(fetchPosts(localStorage.getItem("token")));
  }, []);
  console.log(posts);
  return (
    <div id="posts-container">
      {error && <h2>{error.message}</h2>}
      <PostComponent posts={posts} />
    </div>
  );
}
