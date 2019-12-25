import gql from "graphql-tag";

export const NOW_PLAYING = gql`
  query getNowPlaying($page: Int!) {
    nowPlaying(page: $page) {
      movies {
        id
        title
        vote_count
        vote_average
        poster_path
        release_date
        original_title
        genre_ids
      }
      total_pages
    }
    genresList {
      id
      name
    }
  }
`;

export const TOP_RATED = gql`
  query getTopRated($page: Int!) {
    topRated(page: $page) {
      movies {
        id
        title
        vote_count
        vote_average
        poster_path
        release_date
        original_title
        genre_ids
      }
      total_pages
    }
    genresList {
      id
      name
    }
  }
`;

export const POPULAR = gql`
  query getPopular($page: Int!) {
    popular(page: $page) {
      movies {
        id
        title
        vote_count
        vote_average
        poster_path
        release_date
        original_title
        genre_ids
      }
      total_pages
    }
    genresList {
      id
      name
    }
  }
`;

export const UPCOMING = gql`
  query getUpcoming($page: Int!) {
    upComing(page: $page) {
      movies {
        id
        title
        vote_count
        vote_average
        poster_path
        release_date
        original_title
        genre_ids
      }
      total_pages
    }
    genresList {
      id
      name
    }
  }
`;

export const SEARCH = gql`
  query searchTitleMovies($movieTitle: String!, $page: Int!) {
    search(title: $movieTitle, page: $page) {
      movies {
        id
        title
        vote_count
        vote_average
        poster_path
        release_date
        original_title
        genre_ids
      }
      total_pages
    }
    genresList {
      id
      name
    }
  }
`;

export const SEARCH_BY_GENRE = gql`
  query genreSearchMovies($genreId: Int!, $page: Int!) {
    genreSearch(genre: $genreId, page: $page) {
      movies {
        id
        title
        vote_count
        vote_average
        poster_path
        release_date
        original_title
        genre_ids
      }
      total_pages
    }
    genresList {
      id
      name
    }
  }
`;

export const MOVIE_TRAILER = gql`
  query getMovieTrailers($movieId: Int!) {
    trailers(movie_id: $movieId) {
      id
      key
      name
      site
    }
  }
`;

export const MOVIE_DETAIL = gql`
  query getMovieDetails($movieId: Int!) {
    detail(movie_id: $movieId) {
      id
      title
      original_title
      tagline
      adult
      vote_count
      vote_average
      poster_path
      release_date
      backdrop_path
      runtime
      overview
      genres {
        id
        name
      }
    }
    # similar(movie_id: $movieId, page: 1) {
    #   movies {
    #     id
    #     title
    #     vote_average
    #     poster_path
    #   }
    #   total_pages
    # }
    trailers(movie_id: $movieId) {
      id
      key
      name
      site
    }
    recommendations(movie_id: $movieId, page: 1) {
      movies {
        id
        title
        vote_average
        poster_path
      }
      total_pages
    }
    credits(movie_id: $movieId) {
      cast {
        character
        name
        profile_path
      }
      crew {
        job
        name
        profile_path
      }
    }
  }
`;
