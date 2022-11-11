import { LOGIN, SIGN_UP } from "./action_types";

export function login(payload){
    return function(dispatch){
        console.log("thunk");
        dispatch({ type: LOGIN, payload });
    }
}

export function signUp(payload){
    return function(dispatch) {
        console.log("Sign up thunk")
        dispatch({ type: SIGN_UP, payload });
    };
}