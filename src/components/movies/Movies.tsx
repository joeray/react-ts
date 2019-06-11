import * as React from "react";
import "./movies.scss";
import MoviesStore from "../../stores/MoviesStores";

import { Redirect, NavLink } from "react-router-dom";
interface IMovieProp {
  id: string;
  poster_path: string;
}

export class Movies extends React.Component<IMovieProp, any> {
  public movies: Array<any>;
  public _isMounted = false;
  constructor() {
    super();
    this.getMoviesList = this.getMoviesList.bind(this);
    this.getSeriesList = this.getSeriesList.bind(this);
    this.getFamiliesList = this.getFamiliesList.bind(this);
    this.getDocumentariesList = this.getDocumentariesList.bind(this);
    this.state = {
      movie: null,
      movies: MoviesStore.getMovies(),
      series: MoviesStore.getSeries(),
      families: MoviesStore.getFamilies(),
      documentaries: MoviesStore.getDocumentaries()
    };
  }

  componentWillMount() {
    this._isMounted = true;
    MoviesStore.on("newMoviesReceived", this.getMoviesList);
    MoviesStore.on("newSeriesReceived", this.getSeriesList);
    MoviesStore.on("newDocumentariesReceived", this.getDocumentariesList);
    MoviesStore.on("newFamiliesReceived", this.getFamiliesList);
  }

  componentWillUnmount() {
    this._isMounted = false;
    MoviesStore.removeListener("newMoviesReceived", this.getMoviesList);
    MoviesStore.removeListener("newSeriesReceived", this.getMoviesList);
    MoviesStore.removeListener("newDocumentariesReceived", this.getMoviesList);
    MoviesStore.removeListener("newFamiliesReceived", this.getMoviesList);
  }

  getMoviesList() {
    if (this._isMounted) {
      this.setState({
        movies: MoviesStore.movies
      });
    }
  }

  getSeriesList() {
    if (this._isMounted) {
      this.setState({
        series: MoviesStore.series
      });
    }
  }

  getFamiliesList() {
    if (this._isMounted) {
      this.setState({
        families: MoviesStore.families
      });
    }
  }

  getDocumentariesList() {
    if (this._isMounted) {
      this.setState({
        documentaries: MoviesStore.documentaries
      });
    }
  }

  render() {
    const { movies } = this.state;
    const { series } = this.state;
    const { families } = this.state;
    const { documentaries } = this.state;
    const { movie } = this.state;
    if (movie) {
      return (
        <Redirect
          exact={true}
          push
          to={{
            pathname: `/movie/${movie.id}`,
            state: { referrer: movie }
          }}
        />
      );
    } else if (movies && families && series && documentaries) {
      const group = {
        movie: movies,
        family: families,
        serie: series,
        documentary: documentaries
      };
      let res = [];
      for (const ind in group) {
        res[ind] = group[ind].map(movie => {
          let liStyle = {};
          if (movie.poster_path) {
            liStyle = {
              backgroundImage: `URL('http://image.tmdb.org/t/p/w342/${
                movie.poster_path
              }')`,
              backgroundSize: "cover"
            };
          }
          return (
            <div className="mini-card col-sm-6 col-md-3 col-12" key={movie.id}>
              <NavLink
                exact={true}
                to={{
                  pathname: `/movie/${movie.id}`,
                  state: { referrer: movie }
                }}
              >
                <li className="card card-block single-movie" style={liStyle}>
                  <div className="title">{movie.title}</div>
                </li>
              </NavLink>
            </div>
          );
        });
      }

      // for (const ind in res) {
      return (
        <div className="row">
          <div className="col-md-12">
            <div className="container-fluid">
              <h4 className="panel-heading text-info">Popular movies:</h4>
              <ul className="row flex-row flex-nowrap">{res["movie"]}</ul>
            </div>
          </div>
          <div className="col-md-12">
            <div className="container-fluid">
              <h4 className="panel-heading text-info">Popular series:</h4>
              <ul className="row flex-row flex-nowrap">{res["serie"]}</ul>
            </div>
          </div>
          <div className="col-md-12">
            <div className="container-fluid">
              <h4 className="panel-heading text-info">Family:</h4>
              <ul className="row flex-row flex-nowrap">{res["family"]}</ul>
            </div>
          </div>
          <div className="col-md-12">
            <div className="container-fluid">
              <h4 className="panel-heading text-info">Documentary:</h4>
              <ul className="row flex-row flex-nowrap">{res["documentary"]}</ul>
            </div>
          </div>
        </div>
      );
      // }
    } else {
      return <div>{}</div>;
    }
  }
}
