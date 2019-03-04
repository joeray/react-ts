import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
interface IShoutoutsStore {
    shoutOuts: Array<Object>,
    emit: any;
    createShoutout: any;
    getShoutouts: any;
    on: any;
    removeListener: any;
}

class Shoutout {
    id: string;
    shoutout: string;
    name:string;
}

class ShoutoutsStore extends EventEmitter<IShoutoutsStore> {
    public shoutouts;
    public on;
    public removeListener;
    public emit;
    
    
    constructor(){
        super();
        this.shoutouts=[
            {
                id: 1,
                shoutout: "My very first shoutout, yay!",
                name: "AlohaCode"
            },
            {
                id: 2,
                shoutout: "My very second shoutout, yay!",
                name: "AlohaCode"
            }
        ];
    }

    actionListener(action) {
        switch(action.type) {
            case "CREATE_SHOUTOUT": {
                this.createShoutout(
                    action.shoutout,
                    action.name
                )
            }
        }
    }

    createShoutout(shoutout, name) {
        const id = Date.now().toString();
        let newSO = new Shoutout;
        newSO.id = id;
        newSO.shoutout = shoutout;
        newSO.name = name;
        this.shoutouts.push(newSO);
        this.emit("newShoutout");
    }

    getShoutouts() {
        return this.shoutouts;
    }
}

const shoutoutsStore = new ShoutoutsStore();
dispatcher.register(shoutoutsStore.actionListener.bind(shoutoutsStore));
export default shoutoutsStore;