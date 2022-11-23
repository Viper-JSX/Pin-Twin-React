import { UserClass } from "../Classes/User_class";
import { PinClass } from "../Classes/Pin_class"; 

import { users } from "../various_things/users";
import { CANCEL_CONFIRMATION, CHANGE_CONVERSATIONS_SEARCH_TERM, CHANGE_PINS_SEARCH_TERM, CHANGE_PINS_SORT_CRITERIA, CHANGE_USER_PINS_SEARCH_TERM, CHANGE_USER_PINS_SORT_CRITERIA, CLOSE_AUTHORIZATION_WINDOW, CONFIRM, CONFIRM_ACTION, CREATE_COMMENT, CREATE_PIN, DELETE_COMMENT, DELETE_PIN, DELETE_PIN_FROM_SAVED, EDIT_PIN, EDIT_PROFILE, FILTER_PINS_BASED_ON_USER_PREFERENCES, FOLLOW, FORCE_UPDATE, HIDE_MESSAGE, LOGIN, LOGOUT, OPEN_LOGIN_WINDOW, OPEN_SIGN_UP_WINDOW, REGISTER, RESET_SHOWED_PINS_COUNT, SAVE_PIN, SEARCH_PINS, SET_CONFIRMATION_VALUES, SHOW_MESSAGE, SHOW_MORE_PINS, SHOW_RECENT_PINS, SIGN_UP, UNFOLLOW, UPDATE_PINS_LIST, UPDATE_TAGS_VIEW_FREQUENCY_HISTOGRAM } from "./action_types";
import { defaultState } from "./default_state";
import { pins } from "../various_things/pins";
import { filterPinsBasedOnUserPreferences } from "../utilities/filter_pins_based_on_user_preferences";
import { CommentClass } from "../Classes/CommentCLass";
import { pinsChunkSize } from "../various_things/constants";


export function app(state=defaultState.app, action){
    switch(action.type){
        case SEARCH_PINS: {
            const pinsSearchTerm = action.payload.pinsSearchTerm.toLowerCase();

            return { ...state, pinsToShow: JSON.parse(JSON.stringify(pins.filter((pin) => 
                pin.title.toLowerCase().includes(pinsSearchTerm)  
                || 
                pin.tags.some((tag) => pinsSearchTerm.includes(tag) || tag.includes(pinsSearchTerm) ))
            ))};
        }
        case FILTER_PINS_BASED_ON_USER_PREFERENCES: {
            return { ...state, pinsToShow: JSON.parse(JSON.stringify(filterPinsBasedOnUserPreferences(action.payload.pins, action.payload.userFollowings, action.payload.userFavouriteTags))) }; //Maybe will require json.stringify and json.parse
        }
        case SHOW_RECENT_PINS: {
            return { ...state, pinsToShow: JSON.parse(JSON.stringify(pins)) }; //May not update 
        }
        case SHOW_MORE_PINS: {
            if(state.showedPinsCount <= state.pinsToShow.length){ //if showedPinsCount does not exceed the size of pins that can be shown
                return { ...state, showedPinsCount: state.showedPinsCount + pinsChunkSize };
            }

            return state;
        }
        case RESET_SHOWED_PINS_COUNT: {
            return { ...state, showedPinsCount: pinsChunkSize };
        }
        case UPDATE_PINS_LIST: {
            return { 
                ...state, 
                allPins: JSON.parse(JSON.stringify(action.payload.pins))
            };
        }
        case CREATE_COMMENT: {
            const newComment = new CommentClass(action.payload.pinId, action.payload.authorId, action.payload.commentText);
            const updatedPinsToShow = state.pinsToShow
            .map((pin) => {
                if(pin.id === action.payload.pinId){
                    return { ...pin, comments: [ ...pin.comments, { id: newComment.id, pinId: newComment.pinId, authorId: newComment.authorId, text: newComment.text  } ] };
                }
                return pin;
            });

            pins.find((pin) => pin.id === action.payload.pinId).addComment(newComment);

            return { ...state, pinsToShow: updatedPinsToShow };
        }
        case DELETE_COMMENT: {
            const updatedPinsToShow = state.pinsToShow
            .map((pin) => {
                if(pin.id === action.payload.pinId){
                    return { ...pin, comments: pin.comments.filter((comment) => comment.id !== action.payload.commentId) };
                }
                return pin;
            });

            pins.find((pin) => pin.id === action.payload.pinId).deleteComment(action.payload.commentId);

            return { ...state, pinsToShow: updatedPinsToShow };
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
            return null;  
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
            const pinWithRemovedReferences = JSON.parse(JSON.stringify(action.payload.newPin));
            pins.push(action.payload.newPin);
            return { ...state, pins: [ ...state.pins, pinWithRemovedReferences] };
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
            users.find((user) => user.id === state.id).follow({ userToFollowId: action.payload.userToFollowId });
            users.find((user) => user.id === action.payload.userToFollowId).addFollower({ followerId: state.id });
            return { ...state, followings: [ ...state.followings, action.payload.userToFollowId ] };
        }
        case UNFOLLOW: {
            users.find((user) => user.id === state.id).unfollow({ userToUnfollowId: action.payload.userToUnfollowId });
            users.find((user) => user.id === action.payload.userToUnfollowId).deleteFollower({ followerId: state.id });
            return { ...state, followings: state.followings.filter((followerId) => followerId !== action.payload.userToUnfollowId) };
        }
        case UPDATE_TAGS_VIEW_FREQUENCY_HISTOGRAM: {
            const tagsViewFrequencyHistogram = { ...state.tagsViewFrequencyHistogram };

            action.payload.pinTags.forEach((tag) => {
                if(tagsViewFrequencyHistogram[tag]){
                    tagsViewFrequencyHistogram[tag]++;
                }
                else{
                    tagsViewFrequencyHistogram[tag] = 1;
                }
            });

            users.find((user) => user.id === state.id).updateTagsViewFrequencyHistogram({ pinTags: action.payload.pinTags });

            return { ...state, tagsViewFrequencyHistogram: tagsViewFrequencyHistogram };
        }
        default: {
            return state;
        }

    }
}



export function search(state=defaultState.search, action){
    switch(action.type){
        case CHANGE_PINS_SEARCH_TERM:{
            return  { ...state, pinsSearch: { ...state.pinsSearch, term: action.payload.pinsSearchTerm } };
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
            return { confirmationText: ""};
        }
        case SET_CONFIRMATION_VALUES: {
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
