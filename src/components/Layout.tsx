import * as React from "react";

import { Hello } from "./Hello";
import { Movies } from "./movies/Movies";
import { Characters } from "./characters/Characters";

interface ImyComponentState {
    welcome: string;
    shoutOut: string;
}

interface ImyComponentProps {
    welcomeProp: string;
    shoutOutProp: string;
}

export class Layout extends React.Component<ImyComponentProps, ImyComponentState> {
    constructor(props: ImyComponentProps){
        super(props);
        this.state = {welcome: this.props.welcomeProp,
        shoutOut: this.props.shoutOutProp};
    }
    createNewShoutOut(shoutOut){
        this.setState({shoutOut})
    }
    render(){
        const movieQuestion ="Have you seen all of these Movies?";
        const charactersQuestion = "What do you know about each of these characters?";
        return (
            <div>
                {this.state.welcome}
                <Hello compiler="TypeScript" framework="React" /> 
                <h4>Newest ShoutOut--{this.state.shoutOut}!!!</h4>

                <Movies shoutOut={this.state.shoutOut} createNewShoutOut = {this.createNewShoutOut.bind(this)} question = {movieQuestion} /> 
                <Characters question= {charactersQuestion}/>
            </div>
        )
    }
}