import * as React from "react";
import { NavLink } from "react-router-dom";
import "./movie.scss";

interface ISingleMovie {
  id: String;
  title: String;
  overview: String;
  release_date: String;
  poster_path: string;
  popularity: string;
  location: any;
}

export default class Movies extends React.Component<ISingleMovie> {
  public location: any;
  retrievedProps: any;

  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    let without = {
      listStyle: "none"
    };
    if (this.props.location) {
      this.props = this.props.location.state.referrer;
    }
    const {
      id,
      title,
      overview,
      release_date,
      poster_path,
      popularity
    } = this.props;
    return (
      <li className="row" style={without}>
        <div className="col-sm-6">
          <div className="panel-heading">
            <h3 className="panel-title">{title}</h3>
          </div>
          <div className="panel-body">
            <div>
              <span className="label">Description:</span>
              <p>{overview}</p>
            </div>
          </div>
          <hr />
          <div className="panel-footer">
            <div>
              <span className="label">Release Date:</span> {release_date}
            </div>
            <div>
              <span className="label">Popularity:</span> {popularity}
            </div>
          </div>
          <NavLink
            exact={true}
            to={{
              pathname: `/player/${id}`,
              state: { referrer: this.props }
            }}
          >
            <div className="play-button">Play movie</div>
          </NavLink>
        </div>
        <div className="col-sm-6">
          <img
            width="80%"
            src={`http://image.tmdb.org/t/p/w342/${poster_path}`}
          />
        </div>
      </li>
    );
  }
}
