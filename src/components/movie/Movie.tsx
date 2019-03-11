import * as React from "react";

interface ISingleMovie {
    title: String,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: String,
    location: any,
}

export default class Movies extends React.Component<ISingleMovie> {

    public location: any;
    retrievedProps: any;

    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        let without = {
            listStyle: "none"
          }
        if (this.props.location) {
            this.props = this.props.location.state.referrer
        }
        const {
            title, opening_crawl, director, producer, release_date
        } = this.props;

        return (
            <li style={without}>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">{title}</h3>
                    </div>
                    <div className="panel-body">
                        <div><p>{opening_crawl}</p></div>
                    </div>
                    <div className="panel-footer">
                        <div>Director: {director}</div>
                        <div>Producer: {producer}</div>
                        <div>Release Date: {release_date}</div>
                    </div>
                </div>
            </li>
        )

    }
}