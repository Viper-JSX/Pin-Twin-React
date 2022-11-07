import { CHANGE_CONVERSATIONS_SEARCH_TERM, CHANGE_PINS_SEARCH_TERM, LOGIN, REGISTER } from "./action_types";

export function login(payload){
    return { type: LOGIN, payload };
}

export function register(payload){
    return { type: REGISTER, payload };
}

export function changePinsSearchTerm(payload){
    return { type: CHANGE_PINS_SEARCH_TERM, payload };
}

export function changeConversationsSearchTerm(payload){
    return { type: CHANGE_CONVERSATIONS_SEARCH_TERM, payload }
}