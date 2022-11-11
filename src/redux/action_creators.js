import { CHANGE_CONVERSATIONS_SEARCH_TERM, CHANGE_PINS_SEARCH_TERM, CHANGE_PINS_SORT_CRITERIA, CHANGE_USER_PINS_SEARCH_TERM, CHANGE_USER_PINS_SORT_CRITERIA, CLOSE_AUTHORIZATION_WINDOW, CREATE_PIN, DELETE_PIN, EDIT_PIN, LOGIN, LOGOUT, OPEN_LOGIN_WINDOW, OPEN_SIGN_UP_WINDOW, SHOW_MORE_PINS, SIGN_UP } from "./action_types";

export function showMorePins(payload){
    return { type: SHOW_MORE_PINS, payload };
}

export function logout(){
    return { type: LOGOUT };
}

export function createPin(payload){
    return { type: CREATE_PIN, payload };
}

export function editPin(payload){
    return { type: EDIT_PIN, payload };
}

export function deletePin(payload){
    return { type: DELETE_PIN, payload };
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