import React, { Component } from "react";
import Movie from "./Movie";

class TopRatedMovies extends Component {
  constructor(props) {
    super(props);
    this.scrollLoading = this.scrollLoading.bind(this);
  }
  scrollLoading() {
    let documentHeight = document.documentElement.scrollHeight;
    let windowHeight = window.innerHeight;
    let scrollBarPosition = window.pageYOffset | document.body.scrollTop;
    if (documentHeight === windowHeight + scrollBarPosition) {
      this.props.onLoadMore();
    }
  }
  componentDidMount() {
    document.addEventListener("scroll", this.scrollLoading);
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this.scrollLoading);
  }
  render() {
    return (
      <div className="App-Movies">
        <h2>
          <i className="material-icons">local_movies</i>
          <span>평점 높은 영화</span>
        </h2>
        <div className="App-Movies-List">
          {this.props.topRated.map(movie => {
            return (
              <Movie
                key={movie.id}
                movie={movie}
                genresList={this.props.genresList}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default TopRatedMovies;
