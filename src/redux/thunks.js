import { users } from "../various_things/users";
import { CREATE_PIN, DELETE_PIN, EDIT_PIN, HIDE_MESSAGE, LOGIN, SAVE_PIN, SHOW_MESSAGE, SIGN_UP } from "./action_types";

export function login(payload){
    return function(dispatch){
        for(let i = 0; i < users.length; i++){
            if(users[i].email === payload.email && users[i].password === payload.password){
                console.log("creating", users[i])
                dispatch({ type: LOGIN, payload: {user: users[i]} });
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
                    dispatch(showMessage({ title: "Error", text: "This email is already used" }));
                    return;
                }
            });

            console.log("Signing-up")
            dispatch({ type: SIGN_UP, payload });
        }
    };
}

export function createPin(payload){
    return function(dispatch){
        if(!payload.pinData.imageSrc){
            dispatch(showMessage({title: "Image error", text: "You did not provide the image"}));
            return;
        }
        else if(!payload.pinData.title){
            dispatch(showMessage({title: "Title not provided", text: "Provide the title"} ));
            return;
        }
        else if(!payload.pinData.tagsString){
            dispatch(showMessage({title: "Wrong tags", text: "There must be at least one tag, tags must be comma-separated and must not contain special characters except of comma and white-space"} ));
            return;
        }

        dispatch({ type: CREATE_PIN, payload }); //implement validation
    }
}

export function editPin(payload){
    return function(dispatch){
        if(!payload.pinData.imageSrc){
            dispatch(showMessage({title: "Image error", text: "You did not provide the image"}));
            return;
        }
        else if(!payload.pinData.title){
            dispatch(showMessage({title: "Title not provided", text: "Provide the title"} ));
            return;
        }
        else if(!payload.pinData.tagsString){
            dispatch(showMessage({title: "Wrong tags", text: "There must be at least one tag, tags must be comma-separated and must not contain special characters except of comma and white-space"} ));
            return;
        }

        dispatch({ type: EDIT_PIN, payload });
    }
}

export function deletePin(payload){
    return function(dispatch){
        console.log("Deleting"); //implement message
        dispatch({ type: DELETE_PIN, payload });
    }
}

export function savePin(payload){
    return function(dispatch){
        dispatch( { type: SAVE_PIN, payload } );
    }
}

export function showMessage(payload){
    return function (dispatch){
        console.log("Hiding")
        dispatch({type: SHOW_MESSAGE, payload});
        setTimeout(() => dispatch({ type: HIDE_MESSAGE }), 3000)
    }
}