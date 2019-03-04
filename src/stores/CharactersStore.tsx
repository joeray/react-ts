import {EventEmitter} from "events";

class CharactersStore extends EventEmitter {

    public characters;

    constructor(){
        super();
        this.characters = [
            {
                "name": "Jango Fett",
                "height": "183",
                "mass": "79",
                "hair_color": "black",
                "skin_color": "tan",
                "eye_color": "brown",
                "birth_year": "66BBY",
                "gender": "male"
            },
            {
                "name": "Fett",
                "height": "163",
                "mass": "89",
                "hair_color": "green",
                "skin_color": "red",
                "eye_color": "blue",
                "birth_year": "76BBY",
                "gender": "female"
            }
        ];
    }
    getCharacters() {
        return this.characters;
    }
}

const charactersStore = new CharactersStore;

export default charactersStore;