import React from "react";
import { Query } from "react-apollo";
import { SEARCH_BY_GENRE } from "../queries";
import SearchedByGenreMovies from "./SearchedByGenreMovies";
import update from "react-addons-update";

const SearchByGenre = ({
  match: {
    params: { genre_id }
  }
}) => {
  const genreId = parseInt(genre_id);
  return (
    <Query query={SEARCH_BY_GENRE} variables={{ genreId: genreId, page: 1 }}>
      {({ data, error, loading, fetchMore }) => {
        if (loading) return <div className="Loading">loading...</div>;
        if (error)
          return <div className="Error">Error! Something happend.</div>;
        const { genresList, genreSearch } = data;
        return (
          <SearchedByGenreMovies
            genreSearch={genreSearch.movies}
            genresList={genresList}
            genreId={genreId}
            totalPage={genreSearch.total_pages}
            onLoadMore={() => {
              let newPage = Math.ceil(genreSearch.movies.length / 20);
              if (newPage === genreSearch.total_pages) {
                return;
              } else {
                newPage += 1;
                fetchMore({
                  variables: {
                    genreId: genreId,
                    page: newPage
                  },
                  updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev;
                    return update(prev, {
                      genreSearch: {
                        movies: { $push: fetchMoreResult.genreSearch.movies }
                      }
                    });
                  }
                });
              }
            }}
          />
        );
      }}
    </Query>
  );
};

export default SearchByGenre;
