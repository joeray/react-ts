import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import axios from "axios";

interface ICharactersStore {
  emit: any,
  on: any,
  removeListener: any,
}

class CharactersStore extends EventEmitter<ICharactersStore> {

  public characters;
  public emit;
  public on;
  public removeListener;

  constructor() {
    super();
    this.emit = this.emit.bind(this);

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

  // getCharacters() {
  //     return this.characters;
  // }

  getCharacters() {
    axios.get('https://swapi.co/api/people/')
      .then(response => {
        if (response.status === 200) {
          this.characters = response.data.results;
          this.emit("newCharactersReceived");
        }
      })
  }

  actionListener(action) {
    switch (action.type) {
      case "RECEIVE_CHARACTERS": {
        this.addCharacters(action.data);
      }
    }
  }

  addCharacters(data) {
    this.characters.push(data);
  }
}

const charactersStore = new CharactersStore;
dispatcher.register(charactersStore.actionListener.bind(charactersStore));
export default charactersStore;