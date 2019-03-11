import dispatcher from "../dispatcher";

export function receiveAsyncData(response){
    dispatcher.dispatch({
        type: "RECEIVE_DATA",
        data: response
    })
}

export function receiveAsyncCharacters(response){
    dispatcher.dispatch({
        type: "RECEIVE_CHARACTERS",
        data: response
    })
}