import React from "react";
import { Query } from "react-apollo";
import { SEARCH } from "../queries";
import SearchedMovies from "./../components/SearchedMovies";
import update from "react-addons-update";

const Search = ({
  match: {
    params: { title }
  }
}) => {
  const searchTitle = encodeURI(title);
  return (
    <Query query={SEARCH} variables={{ movieTitle: searchTitle, page: 1 }}>
      {({ data, error, loading, fetchMore }) => {
        if (loading) return <div className="Loading">loading...</div>;
        if (error)
          return <div className="Error">Error! Something happend.</div>;
        const { genresList, search } = data;
        return (
          <SearchedMovies
            search={search.movies}
            searchTitle={title}
            genresList={genresList}
            totalPage={search.total_pages}
            onLoadMore={() => {
              let newPage = Math.ceil(search.movies.length / 20);
              if (newPage === search.total_pages) {
                return;
              } else {
                newPage += 1;
                fetchMore({
                  variables: {
                    movieTitle: searchTitle,
                    page: newPage
                  },
                  updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev;
                    return update(prev, {
                      search: {
                        movies: { $push: fetchMoreResult.search.movies }
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

export default Search;
