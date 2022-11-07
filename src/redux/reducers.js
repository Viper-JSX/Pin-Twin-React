import { CHANGE_CONVERSATIONS_SEARCH_TERM, CHANGE_PINS_SEARCH_TERM, LOGIN, REGISTER } from "./action_types";
import { defaultState } from "./default_state";



export function user(state=defaultState.user, action){
    switch(action.type){
        case LOGIN:{
            console.log("Login");
            return state;
        }
        case REGISTER:{
            console.log("Register");
            return state;
        }
        default: {
            console.log("Nothing happened");
            return state;
        }

    }
}



export function search(state=defaultState.search, action){
    switch(action.type){
        case CHANGE_PINS_SEARCH_TERM:{
            console.log("Searching pins");
            return state;
        }
        case CHANGE_CONVERSATIONS_SEARCH_TERM:{
            console.log("Searching conversations");
            return state;
        }
        default: {
            console.log("Nothing happened");
            return state;
        }
    }
}