import * as React from "react";
interface IcharacterProp {
    question:string
}

export class Characters extends React.Component<IcharacterProp> {
    render() {
        return (
            <div>
                <h2>Characters List 1</h2>
                <h4>{this.props.question}</h4>
            </div>
        );
    }
}
