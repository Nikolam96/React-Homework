import PropTypes from "prop-types";

export const Posts = ({ postsList }) => {
  return (
    <div id="posts">
      {postsList.length > 0 ? (
        <table border={1}>
          <thead>
            <tr>
              <th>userId</th>
              <th>id</th>
              <th>title</th>
              <th>body</th>
            </tr>
          </thead>
          <tbody>
            {postsList.map((post) => (
              <tr key={post.id}>
                <td>{post.userId}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

Posts.propTypes = {
  postsList: PropTypes.arrayOf(PropTypes.object),
};
