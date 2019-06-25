import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie, genresList }) => {
  const IMG_URL = "http://image.tmdb.org/t/p";
  const convertGenres = genres => {
    let convertgenresList = [];
    genres.forEach(genre => {
      genresList.forEach(list => {
        if (list.id === genre) {
          return convertgenresList.push(list);
        }
      });
    });
    return convertgenresList.map(genre => (
      <Link to={`/genresearch/${genre.id}`} key={genre.id}>
        #{genre.name}
      </Link>
    ));
  };
  return (
    <div className="Movie">
      <Link to={`/detail/${movie.id}`}>
        <div className="Movie-poster">
          <img
            src={
              movie.poster_path !== null
                ? `${IMG_URL}/w500${movie.poster_path}`
                : `/imgs/no-poster.png`
            }
            alt={`${movie.title}`}
          />
        </div>
        <div className="Movie-title">{movie.title}</div>
        <div className="Movie-vote">{movie.vote_average}</div>
      </Link>
      <div className="Movie-genres">{convertGenres(movie.genre_ids)}</div>
    </div>
  );
};

export default Movie;
