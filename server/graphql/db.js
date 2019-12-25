import axios from "axios";
import API_KEY from "./API_KEY";
const MOVIE_API = "https://api.themoviedb.org/3";
const LANGUAGE = "language=ko-KR";
const REGION_KOREA = "region=KR";

export const getNowPlayingMovies = page => {
  const REQUEST_URL = `${MOVIE_API}/movie/now_playing?api_key=${API_KEY}&${LANGUAGE}&${REGION_KOREA}&page=${page}`;
  return axios.get(REQUEST_URL).then(result => {
    return {
      movies: result.data.results,
      total_pages: result.data.total_pages
    };
  });
};

export const getTopRatedMovies = page => {
  const REQUEST_URL = `${MOVIE_API}/movie/top_rated?api_key=${API_KEY}&${LANGUAGE}&${REGION_KOREA}&page=${page}`;
  return axios.get(REQUEST_URL).then(result => {
    return {
      movies: result.data.results,
      total_pages: result.data.total_pages
    };
  });
};

export const getSimilarMovies = (movie_id, page) => {
  const REQUEST_URL = `${MOVIE_API}/movie/${movie_id}/similar?api_key=${API_KEY}&${LANGUAGE}&${REGION_KOREA}&page=${page}`;
  return axios.get(REQUEST_URL).then(result => {
    return {
      movies: result.data.results,
      total_pages: result.data.total_pages
    };
  });
};

export const getRecommendations = (movie_id, page) => {
  const REQUEST_URL = `${MOVIE_API}/movie/${movie_id}/recommendations?api_key=${API_KEY}&${LANGUAGE}&page=${page}`;
  return axios.get(REQUEST_URL).then(result => {
    return {
      movies: result.data.results,
      total_pages: result.data.total_pages
    };
  });
};

export const getGenresList = () => {
  const REQUEST_URL = `${MOVIE_API}/genre/movie/list?api_key=${API_KEY}&${LANGUAGE}`;
  return axios.get(REQUEST_URL).then(result => result.data.genres);
};

export const getMovieDetail = movie_id => {
  const REQUEST_URL = `${MOVIE_API}/movie/${movie_id}?api_key=${API_KEY}&${LANGUAGE}`;
  return axios.get(REQUEST_URL).then(result => {
    return result.data;
  });
};

export const getMovieCredits = movie_id => {
  const REQUEST_URL = `${MOVIE_API}/movie/${movie_id}/credits?api_key=${API_KEY}`;
  return axios.get(REQUEST_URL).then(result => {
    return result.data;
  });
};

export const getVideos = movie_id => {
  const REQUEST_URL = `${MOVIE_API}/movie/${movie_id}/videos?api_key=${API_KEY}&${LANGUAGE}`;
  return axios.get(REQUEST_URL).then(result => {
    return result.data.results;
  });
};

export const searchMovies = (title, page) => {
  const REQUEST_URL = `${MOVIE_API}/search/movie?api_key=${API_KEY}&${LANGUAGE}&query=${title}&page=${page}`;
  return axios.get(REQUEST_URL).then(result => {
    return {
      movies: result.data.results,
      total_pages: result.data.total_pages
    };
  });
};

export const getGenreMovies = (genre, page) => {
  const REQUEST_URL = `${MOVIE_API}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&${LANGUAGE}&${REGION_KOREA}&with_genres=${genre}&page=${page}`;
  return axios.get(REQUEST_URL).then(result => {
    return {
      movies: result.data.results,
      total_pages: result.data.total_pages
    };
  });
};

export const getTopRated = page => {
  const REQUEST_URL = `${MOVIE_API}/movie/top_rated?api_key=${API_KEY}&${LANGUAGE}&${REGION_KOREA}&page=${page}`;
  return axios.get(REQUEST_URL).then(result => {
    return {
      movies: result.data.results,
      total_pages: result.data.total_pages
    };
  });
};

export const getUpComing = page => {
  const REQUEST_URL = `${MOVIE_API}/movie/upcoming?api_key=${API_KEY}&${LANGUAGE}&${REGION_KOREA}&page=${page}`;
  return axios.get(REQUEST_URL).then(result => {
    return {
      movies: result.data.results,
      total_pages: result.data.total_pages
    };
  });
};

export const getPopular = page => {
  const REQUEST_URL = `${MOVIE_API}/movie/popular?api_key=${API_KEY}&${LANGUAGE}&${REGION_KOREA}&page=${page}`;
  return axios.get(REQUEST_URL).then(result => {
    return {
      movies: result.data.results,
      total_pages: result.data.total_pages
    };
  });
};

export const getTrailer = movie_id => {
  const REQUEST_URL = `${MOVIE_API}/movie/${movie_id}/videos?api_key=${API_KEY}&${LANGUAGE}&${REGION_KOREA}`;
  return axios.get(REQUEST_URL).then(result => {
    return result.data.results;
  });
};
