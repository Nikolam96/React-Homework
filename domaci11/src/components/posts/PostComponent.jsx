export const PostComponent = ({ posts }) => {
  return (
    <div id="posts">
      <table border={1}>
        <thead>
          <th>ID</th>
          <th>Author</th>
          <th>Post</th>
        </thead>
        <tbody>
          {posts.map((post) => {
            return (
              <tr id={post.id}>
                <td>{post.id}</td>
                <td>{post.author}</td>
                <td>{post.post}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
