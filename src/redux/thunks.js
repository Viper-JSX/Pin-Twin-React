import { users } from "../various_things/users";
import { LOGIN, SIGN_UP } from "./action_types";

export function login(payload){
    return function(dispatch){
        for(let i = 0; i < users.length; i++){
            console.log(payload, users[i])
            if(users[i].email === payload.email && users[i].password === payload.password){
                console.log("logging in...", {...users[i]})
                dispatch({ type: LOGIN, payload:{user: {...users[i]}}});
                return;
            }
        }

        console.log("Something is wrong");
    }
}

export function signUp(payload){
    return function(dispatch) {
        if(payload.email.length > 8 && payload.password.length > 8){ //implement email/password validation ...
            users.forEach((user) => {
                if(user.email === payload.email){
                    console.log("This email is already used");
                    return;
                }
            });

            console.log("Signing-up")
            dispatch({ type: SIGN_UP, payload });
        }
    };
}