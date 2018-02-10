import * as React from "react";

interface IMovieProp {
    question:string,
    shoutOut: string,
    createNewShoutOut: any
}

export class Movies extends React.Component<IMovieProp> {
    createShoutOut(e) {
        const shoutOut = e.target.value;
        this.props.createNewShoutOut(shoutOut);
    }
    render() {
        return (
            <div>
                <h2>Movies List 1</h2>
                <h4>{this.props.question}</h4>
                <h4>Current ShoutOut--{this.props.shoutOut}!!!</h4>
                <input onChange= {this.createShoutOut.bind(this)}/>
            </div>
        );
    }
}
