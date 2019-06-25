import React from "react";
import { Query } from "react-apollo";
import { TOP_RATED } from "../queries";
import TopRatedMovies from "./TopRatedMovies";
import update from "react-addons-update";
const TopRated = () => {
  return (
    <Query query={TOP_RATED} variables={{ page: 1 }}>
      {({ data, fetchMore, error, loading }) => {
        if (loading) return <div className="Loading">loading...</div>;
        if (error)
          return <div className="Error">Error! Something happend.</div>;
        const { genresList, topRated } = data;
        return (
          <TopRatedMovies
            topRated={topRated.movies}
            genresList={genresList}
            totalPage={topRated.total_pages}
            onLoadMore={() => {
              let newPage = Math.ceil(topRated.movies.length / 20);
              if (newPage === topRated.total_pages) {
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
                      topRated: {
                        movies: { $push: fetchMoreResult.topRated.movies }
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

export default TopRated;
