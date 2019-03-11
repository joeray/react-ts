import * as React from "react";
import Character from "../character/Character";
import CharactersStore from "../../stores/CharactersStore";
import './carousel.scss';

interface IcharacterProp {
  question: string
}
interface IcharacterState {
  characters: any
}
export class Characters extends React.Component<any, IcharacterState> {
  public characters;
  public interval;
  constructor() {
    super();
    this.getCharactersList = this.getCharactersList.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.state = {
      characters: CharactersStore.getCharacters()
    }
  }

  componentWillMount() {
    CharactersStore.on("newCharactersReceived", this.getCharactersList);


  }

  componentWillUnmount() {
    CharactersStore.removeListener("newCharactersReceived", this.getCharactersList);
    clearInterval(this.interval);
  }

  getCharactersList() {
    this.setState({
      characters: CharactersStore.characters
    });
    let index = 0;
    this.interval = setInterval(() => {

      const count = this.goToNextSlide(index);
      if (this.state.characters.length === count) {
        index = 0;
      }
      index++;

    }, 2000);
  }

  goToNextSlide(index) {

    const container = document.querySelector(".carousel-container");
    const width = container.clientWidth;
    if (container) {
      if (this.state.characters.length === index + 1) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += width;
      }
      // document.querySelectorAll(".carousel-container .carousel__slide")[index].classList.toggle('active');
    }
    return index;
  }
  render() {
    const { characters } = this.state;
    if (characters) {
      const characterList = characters.map((character) => {
        return <Character key={character.name} {...character} />
      })
      return (
        <div>
          <h2>Star Wars Characters: </h2>
          <div className='carousel-custom'>
            <ul className='carousel__slides'>
              <div className="card carousel-container">
                {characterList}
              </div>
            </ul>
          </div>
        </div>
      );
    }
    else {
      return <div></div>;
    }
  }
}
