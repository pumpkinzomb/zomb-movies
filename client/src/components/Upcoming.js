import React from "react";
import { Query } from "react-apollo";
import { UPCOMING } from "../queries";
import UpcomingMovies from "./UpcomingMovies";
import update from "react-addons-update";
const Upcoming = () => {
  return (
    <Query query={UPCOMING} variables={{ page: 1 }}>
      {({ data, fetchMore, error, loading }) => {
        if (loading) return <div className="Loading">loading...</div>;
        if (error)
          return <div className="Error">Error! Something happend.</div>;
        const { genresList, upComing } = data;
        return (
          <UpcomingMovies
            upComing={upComing.movies}
            genresList={genresList}
            totalPage={upComing.total_pages}
            onLoadMore={() => {
              let newPage = Math.ceil(upComing.movies.length / 20);
              if (newPage === upComing.total_pages) {
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
                      upComing: {
                        movies: { $push: fetchMoreResult.upComing.movies }
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

export default Upcoming;
