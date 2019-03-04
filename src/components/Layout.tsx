import * as React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link, Switch
  } from 'react-router-dom';

import { Movies } from "./movies/Movies";
import { Characters } from "./characters/Characters";
import Shoutouts from "./shoutouts/shoutouts";


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

    render() {
        let ourStyleObject = {
            marginLeft: 30
        }
        const movieQuestion ="Have you seen all of these Movies?";
        const charactersQuestion = "What do you know about each of these characters?";
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-default">
                        <div className="container-fluid" >
                            <div className="navbar-header">
                                <p className="navbar-brand">React! &nbsp;</p>
                                <Link to="/movies" className="btn btn-default navbar-btn">Movies</Link>&nbsp;
                                <Link to="/characters-list" className="btn btn-default navbar-btn">Characters</Link>
                            </div>

                            <p className="navbar-brand">&nbsp;{this.state.welcome}</p>
                        </div>
                    </nav>
                    <div className="row">
                        <div className="col-sm-7" style={ourStyleObject}>
                            <div className="well">
                                {this.props.children}
                                <Switch>
                                    <Route path='/movies' component={Movies} />
                                    <Route path='/characters-list' component={Characters} />
                                </Switch>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="well"><Shoutouts/></div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}