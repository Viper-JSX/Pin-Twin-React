import { UserClass } from "../Classes/User_class";
import { PinClass } from "../Classes/Pin_class"; 

import { users } from "../various_things/users";
import { CANCEL_CONFIRMATION, CHANGE_CONVERSATIONS_SEARCH_TERM, CHANGE_PINS_SEARCH_TERM, CHANGE_PINS_SORT_CRITERIA, CHANGE_USER_PINS_SEARCH_TERM, CHANGE_USER_PINS_SORT_CRITERIA, CLOSE_AUTHORIZATION_WINDOW, CONFIRM, CONFIRM_ACTION, CREATE_PIN, DELETE_PIN, DELETE_PIN_FROM_SAVED, EDIT_PIN, EDIT_PROFILE, FOLLOW, FORCE_UPDATE, HIDE_MESSAGE, LOGIN, LOGOUT, OPEN_LOGIN_WINDOW, OPEN_SIGN_UP_WINDOW, REGISTER, SAVE_PIN, SET_CONFIRMATION_VALUES, SHOW_MESSAGE, SHOW_MORE_PINS, SIGN_UP, UNFOLLOW } from "./action_types";
import { defaultState } from "./default_state";
import { pins } from "../various_things/pins";


export function app(state=defaultState.app, action){
    switch(action.type){
        case SHOW_MORE_PINS:{
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

        case EDIT_PROFILE: {
            users.find((user) => user.id === action.payload.profileData.id).edit(action.payload);
            return { ...state, profileImageSrc: action.payload.profileData.profileImageSrc, profileTopImageSrc: action.payload.profileData.profileTopImageSrc };
        }

        case SIGN_UP:{
            const newUser = new UserClass(action.payload.email, action.payload.password);
            users.push(newUser);
            return JSON.parse(JSON.stringify(newUser));
        }
        case CREATE_PIN:{
            const newPin = new PinClass(action.payload.pinData.creatorId, action.payload.pinData.imageSrc, action.payload.pinData.title, action.payload.pinData.discription, action.payload.pinData.tags);
            pins.push(newPin);
            return { ...state, pins: [ ...state.pins, { ...newPin } ] };
        }
        case EDIT_PIN:{
            for(let i = 0; i < pins.length; i++){
                if(pins[i].id === action.payload.pinData.id){
                    pins[i].edit(action.payload.pinData.imageSrc, action.payload.pinData.title, action.payload.pinData.discription, action.payload.pinData.tags);

                }
            }

            return {         
                ...state, 
                pins: state.pins.map((pin) => {
                    if(pin.id === action.payload.pinData.id){
                        return { ...pin, imageSrc: action.payload.pinData.imageSrc, title: action.payload.pinData.title, discription: action.payload.pinData.discription, tags: action.payload.pinData.tags };
                    }
                    return pin;
                }) 
            }

        }
        case DELETE_PIN:{
            console.log("Deleting pin", action.payload)
            for(let i = 0; i < pins.length; i++){
                if(pins[i].id === action.payload.pinId){
                    pins.splice(i, 1);
                    break;
                }
            }
            return { ...state, pins: state.pins.filter((pin) => pin.id !== action.payload.pinId) };
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
        case DELETE_PIN_FROM_SAVED: {
            users.find((user) => user.id === action.payload.deleteData.userId).deletePinFromSaved(action.payload.deleteData.pinID);
            return { ...state, savedPins: state.savedPins.filter((pin) => pin.id !== action.payload.deleteData.pinId) };
        }
        case FOLLOW: {
            
            console.log("Follow");
            return state;
        }
        case UNFOLLOW: {
            console.log("Unfollow");
            return state;
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



export function confirmation(state=defaultState.confirmation, action){
    switch(action.type){
        case CONFIRM_ACTION:
        case CANCEL_CONFIRMATION: {
            return {};
        }
        case SET_CONFIRMATION_VALUES: {
            console.log("Setting values")
            return { ...action.payload };
        }
        default: {
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
