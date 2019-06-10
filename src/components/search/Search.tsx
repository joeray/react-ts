import * as React from "react";
import MoviesStore from "../../stores/MoviesStores";
import { NavLink } from "react-router-dom";
import "./search.scss";

interface ISearch {
  id: string;
  title: string;
  filmName: string;
}
export class Search extends React.Component<ISearch, any> {
  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.searchFilm = this.searchFilm.bind(this);
    this.getSingleMovie = this.getSingleMovie.bind(this);

    this.state = {
      movies: null,
      filmName: ""
    };
  }

  componentWillMount() {
    MoviesStore.on("newMovieFound", this.getSingleMovie);
  }
  componentWillUnmount() {
    MoviesStore.removeListener("newMovieFound", this.getSingleMovie);
  }
  getSingleMovie() {
    this.setState({
      movies: MoviesStore.movieFound
    });
  }

  handleInputChange(event) {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  }
  searchFilm(event) {
    event.preventDefault();
    MoviesStore.getSingleMovie(this.state.filmName);
  }
  render() {
    const { movies } = this.state;
    const form = () => {
      return (
        <div>
          <h2 className="text-info">Search:</h2>
          <form
            className="row"
            role="form"
            onSubmit={this.searchFilm.bind(this)}
          >
            <div className="form-group col-sm-10">
              <label className="col-sm-12">
                <input
                  className="form-control"
                  name="filmName"
                  type="text"
                  value={this.state.filmName}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <button
              className="btn btn-primary col-sm-2 small-but"
              type="submit"
            >
              Search
            </button>
          </form>
          <ul>{}</ul>
        </div>
      );
    };
    if (!movies) {
      return <div className="col-md-12">{form()}</div>;
    }

    if (movies) {
      const movieList = movies.map(movie => {
        let liStyle = {
          backgroundImage: `URL('http://image.tmdb.org/t/p/w342/${
            movie.poster_path
          }')`,
          backgroundSize: "cover"
        };
        return (
          <div className="col-3" key={movie.id}>
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
      return (
        <div>
          <div className="col-md-12">{form()}</div>
          <div className="row col-md-12">
            <div className="container-fluid">
              <h2 className="panel-heading text-info">Search results:</h2>
              <ul className="row flex-row flex-nowrap">{movieList}</ul>
            </div>
          </div>
        </div>
      );
    }
  }
}
