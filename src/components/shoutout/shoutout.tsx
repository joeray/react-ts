import * as React from "react";

interface IShoutout {
    shoutout: string;
    name: string;
}
export default class Shoutout extends React.Component<IShoutout> {
    public shoutout;

    render(){
        const { shoutout, name } = this.props;
        return (
            <li>
                <span>{shoutout}</span>
                <span>&nbsp;By&nbsp;{name}</span>
            </li>
        );
    }
}