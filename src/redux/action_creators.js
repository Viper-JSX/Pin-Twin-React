import { CHANGE_CONVERSATIONS_SEARCH_TERM, CHANGE_CONVERSATIONS_SORT_CRITERIA, CHANGE_PINS_SEARCH_SORT_CRITERIA, CHANGE_PINS_SEARCH_TERM, CHANGE_PINS_SORT_CRITERIA, CHANGE_USER_PINS_SEARCH_CRITERIA, CHANGE_USER_PINS_SEARCH_TERM, CHANGE_USER_PINS_SORT_CRITERIA, LOGIN, REGISTER } from "./action_types";

export function login(payload){
    return { type: LOGIN, payload };
}

export function register(payload){
    return { type: REGISTER, payload };
}




export function changePinsSearchTerm(payload){
    return { type: CHANGE_PINS_SEARCH_TERM, payload };
}

export function changePinsSearchSortCriteria(payload){
    return { type: CHANGE_PINS_SORT_CRITERIA, payload };
}

export function changeUserPinsSearchTerm(payload){
    return { type: CHANGE_USER_PINS_SEARCH_TERM, payload }
}

export function changeUserPinsSearchSortCriteria(payload){
    return { type: CHANGE_USER_PINS_SORT_CRITERIA, payload }
}

export function changeConversationsSearchTerm(payload){
    return { type: CHANGE_CONVERSATIONS_SEARCH_TERM, payload }
}

export function changeConversationsSearchSortCriteria(payload){
    return { type: CHANGE_CONVERSATIONS_SORT_CRITERIA, payload }
}