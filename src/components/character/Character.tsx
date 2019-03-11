import * as React from "react";
interface ICharacter {
    name: string, 
    height: string, 
    mass: string, 
    hair_color: string, 
    skin_color: string, 
    eye_color: string, 
    birth_year: string,
    gender: string,
    index:any
}
export default class Character extends React.Component<ICharacter, any> {
    render() {
    const {
        name, index, height, mass, hair_color, skin_color, eye_color, birth_year,gender
    }= this.props;
        return (
            <li className="carousel__slide">
            <div><h2>{name}</h2></div>
            <div>index: {index}</div>
            <div>Height: {height}</div>
            <div>Mass: {mass}</div>
            <div>Hair Color: {hair_color}</div>
            <div>Skin Color: {skin_color}</div>
            <div>Eye Color: {eye_color}</div>
            <div>Birth Year: {birth_year}</div>
            <div>Gender: {gender} </div>
            </li>
        );
    }    
}