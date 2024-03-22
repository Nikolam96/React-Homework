import React from "react";
import "../assets/movie.css";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

export const Movie = ({ movie }) => {
  console.log(movie);

  return (
    <div id="Movie">
      {movie.map((ele, inx) => {
        let number = Math.round(ele.rating);

        return (
          <div id="one" key={inx}>
            <div id="two">
              <img src={ele.imgUrl} alt={ele.name} />
            </div>
            <div id="three">
              <h1>{ele.name}</h1>
              <h2>{ele.genre}</h2>
              <h2>Year : {ele.date}</h2>
              <div>
                <h2>IMDB Rating:</h2>
                {[...Array(10)].map((_, index) => (
                  <FaStar
                    key={index}
                    color={index < number ? "#000" : "#e4e5e9"}
                    size={30}
                  />
                ))}
              </div>
              <h2>Length : {ele.length}</h2>
              <a href={ele.imdbLink}>Movie link!</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
};
