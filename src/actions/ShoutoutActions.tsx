import dispatcher from "../dispatcher";

export function createShoutout(shoutout, name){
    dispatcher.dispatch({
        type: "CREATE_SHOUTOUT",
        shoutout, name
    })
}