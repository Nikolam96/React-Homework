import PropTypes from "prop-types";
import { useContext } from "react";
import { AlbumContext } from "../utils/AlbumContext";

export const Albums = () => {
  const { albums } = useContext(AlbumContext);

  return (
    <div>
      <h2>Albums</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>User Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((album) => (
            <tr key={album.id}>
              <td>{album.id}</td>
              <td>{album.userId}</td>
              <td>{album.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Albums.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object),
};
