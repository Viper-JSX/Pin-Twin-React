import { LOGIN, REGISTER } from "./action_types";

export function user(state={}, action){
    switch(action.type){
        case LOGIN:{
            console.log("Login");
            return state;
        }
        case REGISTER:{
            console.log("Register");
            return state;
        }
        default: {
            console.log("Nothing happened");
            return state;
        }

    }
}

