import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { Movies } from "./movies/Movies";
import Movie from "./movie/Movie";
import { Characters } from "./characters/Characters";
import History from "react-history/BrowserHistory";

interface ImyComponentState {
  character: string;
  movie: string;
}

interface ImyComponentProps {
  moviesProp: string;
  charactersProp: any;
}

export class Layout extends React.Component<ImyComponentProps, ImyComponentState> {
  constructor(props: ImyComponentProps) {
    super(props);
    this.state = {
      character: this.props.charactersProp,
      movie: this.props.moviesProp,
    };
  }

  render() {
    let ourStyleObject = {
      marginLeft: 30
    }
    return (
      <Router>
        <div>
          <div className="page-header">
            <h1>Star wars<small> App</small></h1>
          </div>
          <div className="col-md-12">
            <Switch>
              <Route path='/movie' component={Movie} />
            </Switch>
          </div>
          <div className="well">
            <Movies title="" opening_crawl="" producer="" director="" release_date="" location="" episode_id={0} />
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-7" style={ourStyleObject}>
              <div className="well"><Characters /></div>
            </div>
            <div className="col-sm-4">
              <h2>History:</h2>
              <History>
                {({ history, action, location }) => (
                  <div>
                    <p>
                      The current URL is {location.pathname}
                    </p>
                    <p>You arrived at this URL via a {action} action.</p>
                  </div>
                )}
              </History>
            </div>
          </div>

        </div>
      </Router>
    )
  }
}