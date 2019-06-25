import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import NowPlaying from "./components/NowPlaying";
import Search from "./components/Search";
import SearchByGenre from "./components/SearchByGenre";
import Detail from "./components/Detail";
import TopRated from "./components/TopRated";
import Upcoming from "./components/Upcoming";
import Popular from "./components/Popular";
import "./css/App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  handleKeyDown(e) {
    if (e.keyCode === 13) {
      if (e.target.value.length < 1) {
        return;
      }
      let search = encodeURIComponent(e.target.value);
      this.props.history.push(`/search/${search}`);
    }
  }
  render() {
    const subMenus = [
      {
        name: "New Releases",
        path: "/"
      },
      {
        name: "Popular Movies",
        path: "/popular"
      },
      {
        name: "Top Rated",
        path: "/toprated"
      },
      {
        name: "Coming Soon",
        path: "/upcoming"
      }
    ];
    const printSubMenus = subMenus.map((menu, index) => {
      const checked = this.props.location.pathname === menu.path;
      return (
        <Link to={menu.path} key={index} className={`${checked ? "on" : ""}`}>
          <i className="material-icons">arrow_right</i>
          {menu.name}
        </Link>
      );
    });

    return (
      <div className="App">
        <div className="App-header">
          <div className="App-header-top">
            <h1>
              <i className="material-icons">signal_cellular_alt</i>
              <Link to="/">
                ZOMB <span>MOVIES</span>
              </Link>
            </h1>
            <div className="App-searchBox">
              <i className="material-icons">search</i>
              <input
                type="text"
                placeholder="Search movies..."
                onKeyDown={this.handleKeyDown}
              />
            </div>
          </div>
          <div className="App-header-subMenus">{printSubMenus}</div>
        </div>
        <Switch>
          <Route path="/toprated" component={TopRated} />
          <Route path="/upcoming" component={Upcoming} />
          <Route path="/popular" component={Popular} />
          <Route path="/search/:title" component={Search} />
          <Route path="/detail/:movie_id" component={Detail} />
          <Route path="/genresearch/:genre_id" component={SearchByGenre} />
          <Route component={NowPlaying} />
        </Switch>
      </div>
    );
  }
}

export default App;
