import React from "react";
import { Query } from "react-apollo";
import { POPULAR } from "../queries";
import PopularMovies from "./PopularMovies";
import update from "react-addons-update";
const Popular = () => {
  return (
    <Query query={POPULAR} variables={{ page: 1 }}>
      {({ data, fetchMore, error, loading }) => {
        if (loading) return <div className="Loading">loading...</div>;
        if (error)
          return <div className="Error">Error! Something happend.</div>;
        const { genresList, popular } = data;
        return (
          <PopularMovies
            popular={popular.movies}
            genresList={genresList}
            totalPage={popular.total_pages}
            onLoadMore={() => {
              let newPage = Math.ceil(popular.movies.length / 20);
              if (newPage === popular.total_pages) {
                return;
              } else {
                newPage += 1;
                fetchMore({
                  variables: {
                    page: newPage
                  },
                  updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev;
                    return update(prev, {
                      popular: {
                        movies: { $push: fetchMoreResult.popular.movies }
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

export default Popular;
