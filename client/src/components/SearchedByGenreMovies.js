import React, { Component } from "react";
import Movie from "./Movie";

class SearchedByGenreMovies extends Component {
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
    const genreIndex = this.props.genresList.findIndex(
      list => list.id === this.props.genreId
    );
    return (
      <div className="App-Movies">
        <h2>
          장르별 검색 [
          <span>{`${this.props.genresList[genreIndex].name}`}</span>]
        </h2>
        <div className="App-Movies-List">
          {this.props.genreSearch.map((movie, index) => {
            return (
              <Movie
                key={index}
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

export default SearchedByGenreMovies;
