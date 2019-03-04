import * as React from "react";
import Character from "../character/Character";
import CharactersStore from "../../stores/CharactersStore";

interface IcharacterProp {
    question:string
}
interface IcharacterState {
    characters: Array<any>
}
export class Characters extends React.Component<IcharacterProp, IcharacterState> {
    public characters;
    constructor() {
        super();
        this.state = {
            characters: CharactersStore.getCharacters()
        }
    }
    
    render() {
        const { characters } = this.state;
        const characterList = characters.map((charactor) => {
            return <Character key={charactor.name} {...charactor}/>
        } )
        return (
            <div>
                <h2>Star Wars Characters </h2>
                <h4>{characterList}</h4>
            </div>
        );
    }
}
