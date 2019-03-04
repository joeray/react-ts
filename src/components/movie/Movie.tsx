import * as React from "react";

interface ISingleMovie {
    title: String, 
    episode_id: String, 
    opening_crawl: String, 
    director: String, 
    producer: String, 
    release_date: String
}

export default class Movies extends React.Component<ISingleMovie> {
    render() {
        const {
            title, episode_id, opening_crawl, director, producer, release_date}= this.props;
        
        return (
            <li>
            {/* <div><h2>{title}</h2></div>
            <div><p>{opening_crawl}</p></div>
            <div>Director: {director}</div>
            <div>Producer: {producer}</div>
            <div>Release Date: {release_date}</div> */}
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