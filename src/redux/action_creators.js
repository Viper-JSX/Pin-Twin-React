import { CHANGE_CONVERSATIONS_SEARCH_TERM, CHANGE_PINS_SEARCH_TERM, CHANGE_PINS_SORT_CRITERIA, CHANGE_USER_PINS_SEARCH_TERM, CHANGE_USER_PINS_SORT_CRITERIA, CREATE_PIN, DELETE_PIN, EDIT_PIN, LOGIN, LOGOUT, REGISTER } from "./action_types";

export function login(payload){
    return { type: LOGIN, payload };
}

export function logout(){
    return { type: LOGOUT };
}

export function register(payload){
    return { type: REGISTER, payload };
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