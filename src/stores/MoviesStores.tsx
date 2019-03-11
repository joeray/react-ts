import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import axios from "axios";

interface IMoviesStore {
  emit: any;
  on: any;
  removeListener: any;
}
class MoviesStore extends EventEmitter<IMoviesStore> {
  public movies;
  public movieFound = {};
  public on: any;
  public emit;
  public removeListener: any;

  constructor() {
    super();
    this.emit = this.emit.bind(this);
    this.movieFound;
    this.movies = [
      {
        "title": "Last Jedi",
        "episode_id": 6,
        "opening_crawl": "Lorem ipsum",
        "director": "George Lucas",
        "producer": "anyone",
        "release_date": "whenever"
      },
      {
        "title": "Last Jedi 2",
        "episode_id": 7,
        "opening_crawl": "Lorem ipsum 2"
      }
    ]
  }

  getSingleMovie(name) {
    axios.get(`https://swapi.co/api/films/?search=${name}`)
      .then(response => {
        if (response.status === 200) {
          this.movieFound = response.data.results[0];
          this.emit("newMovieFound");
        }
      })
  }

  getMovies() {
    axios.get('https://swapi.co/api/films/')
      .then(response => {
        if (response.status === 200) {
          this.movies = response.data.results;

          this.emit("newMoviesReceived");
        }
      })
  }

  actionListener(action) {
    switch (action.type) {
      case "RECEIVE_DATA": {
        this.addMovies(action.data);
      }
    }
  }

  addMovies(data) {
    this.movies.push(data);
  }
}

const moviesStore = new MoviesStore;
dispatcher.register(moviesStore.actionListener.bind(moviesStore));
export default moviesStore;