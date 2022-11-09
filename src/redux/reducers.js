import { CHANGE_CONVERSATIONS_SEARCH_TERM, CHANGE_CONVERSATIONS_SORT_CRITERIA, CHANGE_PINS_SEARCH_TERM, CHANGE_PINS_SORT_CRITERIA, CHANGE_USER_PINS_SEARCH_TERM, CHANGE_USER_PINS_SORT_CRITERIA, LOGIN, REGISTER } from "./action_types";
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
            console.log(action.payload)
            return state;
        }
        case CHANGE_PINS_SORT_CRITERIA:{
            console.log("Pins criteria");
            return state;
        }
        case CHANGE_USER_PINS_SEARCH_TERM:{
            console.log("User search");
            return state;
        }
        case CHANGE_USER_PINS_SORT_CRITERIA:{
            console.log("Pins sort criteria");
            return state;
        }
        case CHANGE_CONVERSATIONS_SEARCH_TERM:{
            console.log("Searching conversations");
            return state;
        }
        case CHANGE_CONVERSATIONS_SORT_CRITERIA:{
            console.log("Conversations criteria");
            return state;
        }
        default: {
            console.log("Nothing happened");
            return state;
        }
    }
}