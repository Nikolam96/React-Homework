import React, { useState } from "react";
import PropTypes from "prop-types";

export const PostsComponent = ({
  posts,
  setPatchPost,
  patchPost,
  changePost,
}) => {
  const [postId, setPostId] = useState("");

  return (
    <div id="posts">
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Author</th>
            <th>Post</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            return (
              <tr key={post.id}>
                {postId === post.id ? (
                  <>
                    <td>{post.id}</td>
                    <td>
                      <input
                        type="text"
                        placeholder="Enter Author"
                        value={patchPost.author}
                        onChange={(e) => {
                          setPatchPost({
                            ...patchPost,
                            author: e.target.value,
                          });
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="Enter Post"
                        value={patchPost.post}
                        onChange={(e) => {
                          setPatchPost({ ...patchPost, post: e.target.value });
                        }}
                      />
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          changePost();
                          setPostId("");
                        }}
                      >
                        Save
                      </button>
                      <button
                        onClick={() => {
                          setPostId("");
                        }}
                      >
                        Cencel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{post.id}</td>
                    <td>{post.author}</td>
                    <td>{post.post}</td>
                    <td>
                      <button
                        onClick={() => {
                          setPostId(post.id);
                          setPatchPost({
                            ...patchPost,
                            author: post.author,
                            post: post.post,
                            id: post.id,
                          });
                        }}
                      >
                        Change me
                      </button>
                    </td>
                  </>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

PostsComponent.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPatchPost: PropTypes.func.isRequired,
  patchPost: PropTypes.object.isRequired,
  changePost: PropTypes.func.isRequired,
};
