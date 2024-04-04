import PropTypes from "prop-types";

const Posts = ({ posts }) => {
  return (
    <>
      <>
        {posts.length > 0 ? (
          <table border={1}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((v) => {
                return (
                  <tr key={v.id}>
                    <td>{v.id}</td>
                    <td>{v.title}</td>
                    <td>{v.body}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h1>Loading...</h1>
        )}
      </>
    </>
  );
};
export default Posts;

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};
