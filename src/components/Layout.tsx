import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Movies } from "./movies/Movies";
import { Movie } from "./movie/Movie";
import { Player } from "./player/Player";
import { Search } from "./search/Search";
import { Header } from "./header/Header";

export class Layout extends React.Component {
  render() {
    let head = {
      paddingLeft: "16px"
    };
    return (
      <Router>
        <div>
          <div className="page-header">
            <h1 style={head}>App</h1>
          </div>
          <div>
            <Header />
          </div>
          <div className="col-md-12">
            <Switch>
              <Route exact path="/" component={Movies} />
              <Route path="/movie" component={Movie} />
              <Route path="/player" component={Player} />
              <Route path="/search" component={Search} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
