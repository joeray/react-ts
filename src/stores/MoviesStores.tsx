import { EventEmitter } from "events";
import axios from "axios";
class MoviesStore extends EventEmitter {
  public movies;
  public series;
  public families;
  public documentaries;
  public movieFound = {};

  constructor() {
    super();
    this.movieFound;
    this.movies = [{}];
    this.series = [{}];
    this.families = [{}];
    this.documentaries = [{}];
  }

  getSingleMovie(name) {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=9cd6d92edbd72b7789d493a35a827fb5&query=${name}`
      )
      .then(response => {
        if (response.status === 200) {
          this.movieFound = response.data.results;
          this.emit("newMovieFound");
        }
      })
      .catch(err => {
        console.log("request failed");
      });
  }

  getMovies() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=9cd6d92edbd72b7789d493a35a827fb5&language=en-US&page=1"
      )
      .then(response => {
        if (response.status === 200) {
          this.movies = response.data.results;
          this.emit("newMoviesReceived");
        }
      })
      .catch(err => {
        console.log("request failed");
      });
  }

  getSeries() {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/popular?api_key=9cd6d92edbd72b7789d493a35a827fb5&language=en-US&page=1"
      )
      .then(response => {
        if (response.status === 200) {
          this.series = response.data.results;
          this.emit("newSeriesReceived");
        }
      })
      .catch(err => {
        console.log("request failed");
      });
  }

  getFamilies() {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=9cd6d92edbd72b7789d493a35a827fb5&with_genres=10751&language=en-US&page=1"
      )
      .then(response => {
        if (response.status === 200) {
          this.families = response.data.results;
          this.emit("newFamiliesReceived");
        }
      })
      .catch(err => {
        console.log("request failed");
      });
  }

  getDocumentaries() {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=9cd6d92edbd72b7789d493a35a827fb5&with_genres=99&language=en-US&page=1"
      )
      .then(response => {
        if (response.status === 200) {
          this.documentaries = response.data.results;
          this.emit("newDocumentariesReceived");
        }
      })
      .catch(err => {
        console.log("request failed");
      });
  }
}

const moviesStore = new MoviesStore();
export default moviesStore;
