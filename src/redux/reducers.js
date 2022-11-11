import { CHANGE_CONVERSATIONS_SEARCH_TERM, CHANGE_PINS_SEARCH_TERM, CHANGE_PINS_SORT_CRITERIA, CHANGE_USER_PINS_SEARCH_TERM, CHANGE_USER_PINS_SORT_CRITERIA, CLOSE_AUTHORIZATION_WINDOW, CREATE_PIN, DELETE_PIN, EDIT_PIN, LOGIN, LOGOUT, OPEN_LOGIN_WINDOW, OPEN_SIGN_UP_WINDOW, REGISTER, SHOW_MORE_PINS, SIGN_UP } from "./action_types";
import { defaultState } from "./default_state";


export function app(state=defaultState.app, action){
    switch(action.type){
        case SHOW_MORE_PINS:{
            console.log("More pins");
            return state;
        }
        default:{
            return state;
        }
    }
}


export function user(state=defaultState.user, action){
    switch(action.type){
        case LOGIN:{
            console.log(action.payload);
            return state;
        }
        case LOGOUT:{
            return state;  
        }
        case SIGN_UP:{
            console.log(action.payload);
            return state;
        }
        case CREATE_PIN:{
            console.log("creating pin", action.payload);
            return state;
        }
        case EDIT_PIN:{
            console.log("editing pin", action.payload);
            return state;
        }
        case DELETE_PIN:{
            console.log("deleting pin", action.payload);
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

export function authorization(state=defaultState.authorization, action){
    switch(action.type){
        case OPEN_LOGIN_WINDOW: {
            return { ...state, currentAuthorizationType: "login"};
        }
        case OPEN_SIGN_UP_WINDOW: {
            return { ...state, currentAuthorizationType: "sign_up"};
        }
        case CLOSE_AUTHORIZATION_WINDOW: {
            return { ...state, currentAuthorizationType: null };
        }
        default:{
            return state;
        }
    }
}