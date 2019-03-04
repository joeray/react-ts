import * as React from "react";

import Shoutout from "../shoutout/shoutout";
import ShoutoutsStore from "../../stores/ShoutoutsStore";
import * as ShoutoutActions from "../../actions/ShoutoutActions";

export default class Shoutouts extends React.Component{
    public state;


    constructor(){
        super();
        this.getShoutoutList= this.getShoutoutList.bind(this);
        this.handleInputChange= this.handleInputChange.bind(this);
        this.state = {
            newShoutout:"",
            newName:"",
            shoutoutsList: ShoutoutsStore.getShoutouts()
        }
        
    }

    componentWillMount(){
        ShoutoutsStore.on("newShoutout", this.getShoutoutList);
    }
    componentWillUnmount(){
        ShoutoutsStore.removeListener("newShoutout", this.getShoutoutList);

    }
    createShoutout(event){
        event.preventDefault();
        ShoutoutActions.createShoutout(
            this.state.newShoutout, this.state.newName
        )
    }
    getShoutoutList(){
        this.setState({
            shoutoutsList: ShoutoutsStore.getShoutouts()
        })
    }

    handleInputChange(event){
        const name= event.target.name
        this.setState({[name]: event.target.value});
        
    }

    render(){
        let soList = this.state.shoutoutsList;
        const ShoutoutComponents = soList.map((so)=> {
            return <Shoutout key={so.id} {...so}/>;
        });

        return(
            <div>
                <h2>Shoutouts List:</h2>
                <form onSubmit={this.createShoutout.bind(this)}>
                <label> Shoutout:
                <input name="newShoutout" type="text" value={this.state.newShoutout} onChange={this.handleInputChange}/>
                </label>
                <label> Author:
                <input name="newName"  type="text" value={this.state.newName} onChange={this.handleInputChange}/>
                </label>
                <input type="submit" value="Create Shoutout"/>
                </form>
                <ul>{ShoutoutComponents}</ul>
            </div>
        )
    }
}