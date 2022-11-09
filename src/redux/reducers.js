import { CHANGE_CONVERSATIONS_SEARCH_TERM, CHANGE_CONVERSATIONS_SORT_CRITERIA, CHANGE_PINS_SEARCH_TERM, CHANGE_PINS_SORT_CRITERIA, CHANGE_USER_PINS_SEARCH_TERM, CHANGE_USER_PINS_SORT_CRITERIA, CREATE_PIN, DELETE_PIN, EDIT_PIN, LOGIN, LOGOUT, REGISTER } from "./action_types";
import { defaultState } from "./default_state";



export function user(state=defaultState.user, action){
    switch(action.type){
        case LOGIN:{
            console.log("Login", action.payload);
            return state;
        }
        case LOGOUT:{
            console.log("Logout");
            return state;  
        }
        case REGISTER:{
            console.log("Register", action.payload);
            return state;
        }
        case CREATE_PIN:{
            console.log("creating pin");
            return state;
        }
        case EDIT_PIN:{
            console.log("editing pin");
            return state;
        }
        case DELETE_PIN:{
            console.log("deleting pin");
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
            return  { ...state, pinsSearch: { ...state.pinsSearch, sortCriteria: action.payload.criteria } };
        }
        case CHANGE_USER_PINS_SEARCH_TERM:{
            return  { ...state, userPinsSearch: { ...state.userPinsSearch, term: action.payload.term } };
        }
        case CHANGE_USER_PINS_SORT_CRITERIA:{
            console.log("user Pins sort criteria", action.payload);
            return  { ...state, userPinsSearch: { ...state.pinsSearch, sortCriteria: action.payload.criteria } };
        }
        case CHANGE_CONVERSATIONS_SEARCH_TERM:{
            return  { ...state, conversationsSearch: { ...state.conversationsSearch, term: action.payload.term } };
        }
        default: {
            console.log("Nothing happened");
            return state;
        }
    }
}