import * as React from "react";
import Movie from "../../components/movie/Movie"
import MoviesStore from "../../stores/MoviesStores"
interface IMovieProp {
    question:string,
    shoutOut: string,
    createNewShoutOut: any
}
interface IMovieState {
    movies: Array<any>
}

export class Movies extends React.Component<IMovieProp, IMovieState> {

    public movies;
    constructor(){
        super();
        this.state = {
            movies: MoviesStore.getMovies()
        }
        
    }
    render() {
        const {movies} = this.state;
        
        const movieList = movies.map((movie) => {
            return <Movie key={movie.episode_id} {...movie}/>
        })
        return (
            <div>
                <h2>Movies List 1</h2>
                <ul>{movieList}</ul>
            </div>
        );
    }
}
