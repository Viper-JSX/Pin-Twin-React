import { CANCEL_CONFIRMATION, CHANGE_CONVERSATIONS_SEARCH_TERM, CHANGE_PINS_SEARCH_TERM, CHANGE_PINS_SORT_CRITERIA, CHANGE_USER_PINS_SEARCH_TERM, CHANGE_USER_PINS_SORT_CRITERIA, CLOSE_AUTHORIZATION_WINDOW, CONFIRM_ACTION, CREATE_PIN, DELETE_PIN, EDIT_PIN, FORCE_UPDATE, HIDE_MESSAGE, LOGIN, LOGOUT, OPEN_LOGIN_WINDOW, OPEN_SIGN_UP_WINDOW, SAVE_PIN, SET_CONFIRMATION_VALUES, SHOW_MESSAGE, SHOW_MORE_PINS, SIGN_UP, UPDATE_TAGS_VIEW_FREQUENCY_HISTOGRAM } from "./action_types";

export function showMorePins(payload){
    return { type: SHOW_MORE_PINS, payload };
}

export function forceUpdate(){
    return { type: FORCE_UPDATE };
}

export function logout(){
    return { type: LOGOUT };
}

export function pdateTagsViewFrequencyHistogram(payload){
    return { type: UPDATE_TAGS_VIEW_FREQUENCY_HISTOGRAM, payload  };
}


export function changePinsSearchTerm(payload){
    return { type: CHANGE_PINS_SEARCH_TERM, payload };
}

export function changePinsSortCriteria(payload){
    return { type: CHANGE_PINS_SORT_CRITERIA, payload };
}

export function changeUserPinsSearchTerm(payload){
    return { type: CHANGE_USER_PINS_SEARCH_TERM, payload }
}

export function changeUserPinsSortCriteria(payload){
    return { type: CHANGE_USER_PINS_SORT_CRITERIA, payload }
}

export function changeConversationsSearchTerm(payload){
    return { type: CHANGE_CONVERSATIONS_SEARCH_TERM, payload }
}



export function openLoginWindow(){
    return { type: OPEN_LOGIN_WINDOW };
}

export function openSignUpWindow(){
    return { type: OPEN_SIGN_UP_WINDOW };
}


export function closeAuthorizationWindow(){
    return { type: CLOSE_AUTHORIZATION_WINDOW };
}


/*---Message---*/

export function hideMessage(){
    return { type: HIDE_MESSAGE };
}


/*---Confirmation---*/
export function confirmAction(){
    return { type: CONFIRM_ACTION };
}

export function cancelConfirmation(){
    return { type: CANCEL_CONFIRMATION };
}

export function setConfirmationValues(payload){
    return { type: SET_CONFIRMATION_VALUES, payload };
}