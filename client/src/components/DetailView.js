import React from "react";
import { Link } from "react-router-dom";

const DetailView = ({ detail, recommendations, credits }) => {
  const IMG_URL = "http://image.tmdb.org/t/p";
  const movieBackground = {
    backgroundImage:
      detail.backdrop_path !== null
        ? `url(${IMG_URL}/original/${detail.backdrop_path})`
        : ""
  };
  const recommendationsMovies = movies => {
    if (movies.length > 0) {
      return (
        <div className="detail-recommendMovies">
          <h3>
            <i className="material-icons">movie</i> 관련 추천 영화
          </h3>
          <div className="detail-Movies" style={detailMovies}>
            {movies.map(movie => {
              return (
                <div className="Movie" key={movie.id}>
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
                      <div className="Movie-vote">{movie.vote_average}</div>
                    </div>
                    <div className="Movie-title">{movie.title}</div>
                  </Link>
                  <div className="Movie-genres" />
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  };
  const creditsList = credits => {
    if (credits.crew.length < 1 || credits.cast.length < 1) {
      return;
    }
    const director = credits.crew.filter(item => item.job === "Director");
    const newCredits = [director[0], ...credits.cast];
    const creditsWidth = {
      width: 160 * newCredits.length - 10
    };
    return (
      <div className="detail-credits">
        <h3>
          <i className="material-icons">recent_actors</i>감독 및 출연진
        </h3>
        <div className="credits-list" style={creditsWidth}>
          {newCredits.map((item, index) => {
            return (
              <div className="credits-profile" key={index}>
                <div className="profile-pic">
                  {item.profile_path !== null ? (
                    <img
                      src={`${IMG_URL}/w300${item.profile_path}`}
                      alt={`${item.name}`}
                    />
                  ) : (
                    <img
                      className="defaultAvatar"
                      src="/imgs/default-avatar.jpg"
                      alt={item.name}
                    />
                  )}
                </div>
                <div className="profile-info">
                  <span className="profile-charge">
                    {index === 0 ? (
                      "감독"
                    ) : (
                      <span>
                        <span>{item.character}</span> 역
                      </span>
                    )}
                  </span>
                  <span className="profile-name">{item.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  const detailMovies = {
    width: 196 * recommendations.movies.length - 16
  };
  return (
    <div className="App-Movie-detail">
      <div className="detail-wrapper">
        <div className="detail-bg" style={movieBackground} />
        <div className="detail-poster">
          <img
            src={
              detail.poster_path !== null
                ? `${IMG_URL}/w500${detail.poster_path}`
                : `/imgs/no-poster.png`
            }
            alt={`${detail.title}`}
          />
        </div>
        <div className="detail-title">
          <h2>
            <span>{detail.title}</span>
            <span className="originalTitle">{detail.original_title}</span>
          </h2>
          <div className="detail-vote">{detail.vote_average}</div>
        </div>
        {detail.genres.length > 0 ? (
          <div className="detail-genres">
            {detail.genres.map((genre, index) => {
              return (
                <Link key={index} to={`/genresearch/${genre.id}`}>
                  #{genre.name}
                </Link>
              );
            })}
          </div>
        ) : (
          ""
        )}
        <div className="detail-favorite-release-runTime">
          <div className="detail-favorite">
            <i className="material-icons">favorite</i>
            <span>{detail.vote_count}</span>
          </div>
          <div className="detail-release-runTime">
            {detail.release_date !== "" ? (
              <div className="detail-release">
                <i className="material-icons">date_range</i>
                <span>{detail.release_date}</span>
              </div>
            ) : (
              ""
            )}
            {detail.runtime !== null ? (
              <div className="detail-runTime">
                <i className="material-icons">access_time</i>
                <span>{detail.runtime} min</span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        {detail.tagline !== "" ? (
          <div className="detail-tagline">"{detail.tagline}"</div>
        ) : (
          ""
        )}
        <div className="detail-overview">{detail.overview}</div>
        {creditsList(credits)}
        {recommendationsMovies(recommendations.movies)}
      </div>
    </div>
  );
};

export default DetailView;
