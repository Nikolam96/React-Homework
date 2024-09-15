import PropTypes from "prop-types";
import "./../css/Index.css";

export const Movies = ({ movies }) => {
  return (
    <div id="movie">
      <table border={2} cellPadding={15} cellSpacing={10}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Genre</th>
            <th>Plot</th>
            <th>ImdbLink</th>
            <th>ImgUrl</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, i) => {
            return (
              <tr key={i}>
                <td>{movie.name}</td>
                <td>{movie.date}</td>
                <td>{movie.genre}</td>
                <td>{movie.plot}</td>
                <td>
                  <a target="_blank" rel="noreferrer" href={movie.imdbLink}>
                    Go to IMDB
                  </a>
                </td>
                <td>
                  <img src={movie.imgUrl} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
