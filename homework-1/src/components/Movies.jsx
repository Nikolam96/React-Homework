//! koga pravime klasni komponenti react e mandatory da se uveze
import React from 'react';

import './../css/Movies.css';

export class Movies extends React.Component {
  render() {
    const movies = [
      {
        title: "Shutter Island",
        director: "Martin Scorsese",
        description: "A U.S. Marshal investigates the disappearance of a prisoner from a mental institution and uncovers dark secrets."
      },
      {
        title: "Black Swan",
        director: "Darren Aronofsky",
        description: "A psychological thriller about a ballet dancer's descent into madness and obsession."
      },
      {
        title: "Gone Girl",
        director: "David Fincher",
        description: "A husband becomes the prime suspect in the disappearance of his wife, leading to a twisted and suspenseful tale."
      },
      {
        title: "Zodiac",
        director: "David Fincher",
        description: "A newspaper cartoonist and a pair of journalists become obsessed with solving the unsolved Zodiac killer case in San Francisco."
      },
      {
        title: "Donnie Darko",
        director: "Richard Kelly",
        description: "A troubled teenager named Donnie Darko starts experiencing strange events involving a giant rabbit and time travel."
      },
      {
        title: "Mulholland Drive",
        director: "David Lynch",
        description: "A complex and surreal film that blurs the lines between reality and illusion in Hollywood."
      },
      {
        title: "Taxi Driver",
        director: "Martin Scorsese",
        description: "A mentally unstable Vietnam War veteran becomes a taxi driver and descends into a world of violence and obsession."
      }
    ];

    return (
      <div>
        <br />
        <br />
        <hr />
        <div className='movies-container'>
          <h3 className='m-title'>Best psychological thrillers:</h3>
            <ol>
              {movies.map(movie => (
                <li key={movie.title}>
                  <p><b className='movies-title'>{movie.title}</b> by {movie.director}</p>
                  <p><b className='description'>Description:</b> {movie.description}</p>
                </li>
              ))}
            </ol>
        </div>
      </div>
    );
  };
};