import * as React from "react";
import Movie from "../../components/movie/Movie";
import MoviesStore from "../../stores/MoviesStores";
import { Characters } from "../characters/Characters";

import { Redirect } from 'react-router-dom';
interface IMovieProp {
  title: string,
  opening_crawl: string,
  producer: string,
  episode_id: number,
  director: string,
  release_date: string,
  location: string,
}

export class Movies extends React.Component<IMovieProp, any> {

  public movies: Array<any>;
  constructor() {
    super();
    this.getMoviesList = this.getMoviesList.bind(this);
    this.getSingleMovie = this.getSingleMovie.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      movie: null,
      filmName: '',
      movies: MoviesStore.getMovies()
    }
  }

  searchFilm(event) {
    event.preventDefault();
    MoviesStore.getSingleMovie(this.state.filmName);

  }
  componentWillMount() {
    MoviesStore.on("newMoviesReceived", this.getMoviesList);
    MoviesStore.on("newMovieFound", this.getSingleMovie);
  }

  componentWillUnmount() {
    MoviesStore.removeListener("newMoviesReceived", this.getMoviesList);
    MoviesStore.removeListener("newMovieFound", this.getSingleMovie);

  }

  getMoviesList() {
    this.setState({
      movies: MoviesStore.movies
    })
  }

  getSingleMovie() {
    this.setState({
      movie: MoviesStore.movieFound
    })
  }

  handleInputChange(event) {
    const name = event.target.name
    this.setState({ [name]: event.target.value });
  }

  render() {
    const form = () => {
      return (
        <div className="jumbotron">
          <h2 className="text-info">Search for a movie:</h2>
          <form role="form" onSubmit={this.searchFilm.bind(this)} >
            <div className="form-group">
              <label> Film:
                <input className="form-control" name="filmName" type="text" value={this.state.filmName} onChange={this.handleInputChange} />
              </label>
            </div>
            <button className="btn btn-primary" type="submit">Search</button>
          </form>
          <ul>{}</ul>
        </div>
      )
    }
    const { movies } = this.state;
    const { movie } = this.state;
    if (movie) {
      return <Redirect exact={true} push to={{ pathname: `/movie/${movie.episode_id}`, state: { referrer: movie } }} />
    }
    else if (movies) {
      const movieList = movies.map((movie) => {
        return <li key={movie.episode_id}>{movie.title}</li>
      })
      return (
        <div className="row">
          <div className="col-md-8">{form()}</div>
          <div className="col-md-4">
            <div className="panel panel-default">
              <h2 className="panel-heading text-info">Suggested movies:</h2>
              <ul className="text-muted">{movieList}</ul>
            </div>
          </div>
        </div>
      );
    }
    else {
      return <div>{form}</div>;
    }

  }
}
