import { UserClass } from "../Classes/User_class";
import { users } from "../various_things/users";
import { CHANGE_CONVERSATIONS_SEARCH_TERM, CHANGE_PINS_SEARCH_TERM, CHANGE_PINS_SORT_CRITERIA, CHANGE_USER_PINS_SEARCH_TERM, CHANGE_USER_PINS_SORT_CRITERIA, CLOSE_AUTHORIZATION_WINDOW, CREATE_PIN, DELETE_PIN, EDIT_PIN, FORCE_UPDATE, HIDE_MESSAGE, LOGIN, LOGOUT, OPEN_LOGIN_WINDOW, OPEN_SIGN_UP_WINDOW, REGISTER, SAVE_PIN, SHOW_MESSAGE, SHOW_MORE_PINS, SIGN_UP } from "./action_types";
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
            return JSON.parse(JSON.stringify(action.payload.user));
        }
        case LOGOUT:{
            return state;  
        }
        case SIGN_UP:{
            const newUser = new UserClass(action.payload.email, action.payload.password);
            users.push(newUser);
            return newUser;
        }
        case CREATE_PIN:{
            console.log("Creating pin");
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
        case SAVE_PIN: {
            for(let i = 0; i < users.length; i++){
                if(users[i].id === state.id){
                    users[i].savePin(action.payload.pin);
                    break;
                }
            }

            return {...state, savedPins: [...state.savedPins, action.payload.pin]};
        }
        default: {
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

export function message(state=defaultState.message, action){
    switch(action.type){
        case SHOW_MESSAGE: {
            return { ...state, title: action.payload.title, text: action.payload.text }
        }
        case HIDE_MESSAGE: {
            return {...state, title: "", text: ""};
        }
        default:{
            return state;
        }
    }
}



export function update(state=defaultState.update, action){
    switch(action.type){
        case FORCE_UPDATE: {
            return { ...state, forceUpdateObject: new Object() };
        }
        default: {
            return state;
        }
    }
}
