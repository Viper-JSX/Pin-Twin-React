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
            return  { ...state, pinsSearch: { ...state.pinsSearch, term: action.payload.term } };
        }
        case CHANGE_PINS_SORT_CRITERIA:{
            return state;
        }
        case CHANGE_USER_PINS_SEARCH_TERM:{
            return  { ...state, userPinsSearch: { ...state.userPinsSearch, term: action.payload.term } };
        }
        case CHANGE_USER_PINS_SORT_CRITERIA:{
            console.log("Pins sort criteria");
            return state;
        }
        case CHANGE_CONVERSATIONS_SEARCH_TERM:{
            console.log("User conv", action.payload.term, state);
            return  { ...state, conversationsSearch: { ...state.conversationsSearch, term: action.payload.term } };
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