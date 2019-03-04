import {EventEmitter} from "events";

class MoviesStore extends EventEmitter {
    public movies;
    constructor(){
        super();
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
    getMovies() {
        return this.movies;
    }
}

const moviesStore= new MoviesStore;

export default moviesStore;