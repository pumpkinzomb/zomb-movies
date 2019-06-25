import { buildSchema } from "graphql";
const schema = buildSchema(`
  type Movie {
    id: Int!
    title: String!
    original_title: String!
    vote_count: Int
    vote_average: Float
    overview: String
    video: Boolean
    adult: Boolean
    poster_path: String
    release_date: String
    genre_ids: [Int]
  }
  type MovieInfo {
    adult: Boolean
    backdrop_path: String
    genres: [Genre]
    homepage: String
    id: Int!
    original_language: String
    original_title: String
    overview: String
    popularity: Int
    poster_path: String
    release_date: String
    revenue: Int
    runtime: Int
    status: String
    tagline: String
    title: String!
    video: Boolean
    vote_average: Float
    vote_count: Int
  }
  type Genre {
    id: Int!
    name: String
  }
  
  type Credits {
    cast: [Cast]
    crew: [Crew]
  }
  
  type Cast {
    cast_id: Int
    character: String
    credit_id: String
    gender: Int
    id: Int!
    name: String
    order: Int
    profile_path: String
  }
  
  type Crew {
    credit_id: String
    department: String
    gender: Int
    id: Int!
    job: String
    name: String
    profile_path: String
  }
  
  type Video {
    id: String!
    iso_639_1: String
    iso_3166_1: String
    key: String
    name: String
    site: String
    size: String
    type: String
  }
  
  type MoviesList {
    movies: [Movie]!
    total_pages: Int!
  }
  
  type Query {
    nowPlaying(page: Int!): MoviesList!
    topRated(page: Int!): MoviesList!
    upComing(page: Int!): MoviesList!
    popular(page: Int!): MoviesList!
    genresList: [Genre]!
    detail(movie_id: Int!): MovieInfo!
    similar(movie_id: Int!, page: Int!): MoviesList!
    recommendations(movie_id: Int!, page: Int!): MoviesList!
    search(title: String!, page: Int!): MoviesList!
    credits(movie_id: Int!): Credits!
    videos(movie_id: Int!): [Video]
    genreSearch(genre: Int!, page: Int!): MoviesList!
  }
`);

export default schema;
