import React from "react";
import { Query } from "react-apollo";
import { NOW_PLAYING } from "../queries";
import NowPlayingMovies from "./NowPlayingMovies";
import update from "react-addons-update";
const NowPlayingQuery = () => {
  return (
    <div>
      <Query query={NOW_PLAYING} variables={{ page: 1 }}>
        {({ data, fetchMore, error, loading }) => {
          if (loading) return <div className="Loading">loading...</div>;
          if (error)
            return <div className="Error">Error! Something happend.</div>;
          const { genresList, nowPlaying } = data;
          return (
            <NowPlayingMovies
              nowPlaying={nowPlaying.movies}
              genresList={genresList}
              totalPage={nowPlaying.total_pages}
              onLoadMore={() => {
                let newPage = Math.ceil(nowPlaying.movies.length / 20);
                if (newPage === nowPlaying.total_pages) {
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
                        nowPlaying: {
                          movies: { $push: fetchMoreResult.nowPlaying.movies }
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
    </div>
  );
};

export default NowPlayingQuery;
