import {
  getNowPlayingMovies,
  getSimilarMovies,
  getRecommendations,
  getGenresList,
  getMovieDetail,
  searchMovies,
  getMovieCredits,
  getTopRatedMovies,
  getVideos,
  getGenreMovies,
  getTopRated,
  getUpComing,
  getPopular
} from "./db";
const resolvers = {
  Query: {
    nowPlaying: (_, { page }) => getNowPlayingMovies(page),
    topRated: (_, { page }) => getTopRatedMovies(page),
    similar: (_, { movie_id, page }) => getSimilarMovies(movie_id, page),
    recommendations: (_, { movie_id, page }) =>
      getRecommendations(movie_id, page),
    genresList: (_, {}) => getGenresList(),
    videos: (_, { movie_id }) => getVideos(movie_id),
    detail: (_, { movie_id }) => getMovieDetail(movie_id),
    search: (_, { title, page }) => searchMovies(title, page),
    credits: (_, { movie_id }) => getMovieCredits(movie_id),
    genreSearch: (_, { genre, page }) => getGenreMovies(genre, page),
    topRated: (_, { page }) => getTopRated(page),
    upComing: (_, { page }) => getUpComing(page),
    popular: (_, { page }) => getPopular(page)
  }
};

export default resolvers;
