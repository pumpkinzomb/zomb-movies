import React from "react";
import { Query } from "react-apollo";
import { MOVIE_DETAIL } from "./../queries";
import DetailView from "./DetailView";

const Detail = ({
  match: {
    params: { movie_id }
  }
}) => {
  return (
    <Query query={MOVIE_DETAIL} variables={{ movieId: parseInt(movie_id) }}>
      {({ loading, error, data }) => {
        if (loading) return <div className="Loading">loading...</div>;
        if (error)
          return <div className="Error">Error! Something happend.</div>;
        return (
          <DetailView
            detail={data.detail}
            recommendations={data.recommendations}
            credits={data.credits}
          />
        );
      }}
    </Query>
  );
};

export default Detail;
