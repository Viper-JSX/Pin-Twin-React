import { convertTagsStringToTagsArray } from "../utilities/convertTagsStringToTagsArray";
import { users } from "../various_things/users";
import { CREATE_PIN, DELETE_PIN, DELETE_PIN_FROM_SAVED, EDIT_PIN, EDIT_PROFILE, FILTER_PINS_BASED_ON_USER_PREFERENCES, FOLLOW, HIDE_MESSAGE, LOGIN, SAVE_PIN, SEARCH_PINS, SHOW_MESSAGE, SHOW_RECENT_PINS, SIGN_UP, UNFOLLOW } from "./action_types";


export function searchPins(payload){
    console.log(payload)
    return function(dispatch){
        if(payload.searchTerm){ //User entered something to search bar
            //set search reducer state
            dispatch({ type: SEARCH_PINS, payload: { searchTerm: payload.searchTerm } });
        }
        else if(!action.payload.searchTerm && action.payload.userIsLoggedIn){ //user is logged in but did not typed anything to search bar, in this case - show pins based on user's preferences
            dispatch({ type: FILTER_PINS_BASED_ON_USER_PREFERENCES, payload: { userFavouriteTags: payload.userFavouriteTags, userFollowings: payload.userFollowings } })
        }
        else{ //if user not logged in and nothing is searched then show recent pins
            dispatch({ type: SHOW_RECENT_PINS });
        }
    }
}

export function login(payload){
    return function(dispatch){
        for(let i = 0; i < users.length; i++){
            if(users[i].email === payload.email && users[i].password === payload.password){
                dispatch({ type: LOGIN, payload: {user: users[i]} });
                return;
            }
        }
    }
}

export function signUp(payload){
    return function(dispatch) {
        if(payload.email.length > 8 && payload.password.length > 8){ //implement email/password validation ...
            users.forEach((user) => {
                if(user.email === payload.email){
                    dispatch(showMessage({ title: "Error", text: "This email is already used" }));
                    return;
                }
            });

            dispatch({ type: SIGN_UP, payload });
        }
    };
}

export function editProfile(payload){
    return function(dispatch){
        dispatch({ type: EDIT_PROFILE, payload });
        dispatch(showMessage({ title: "Success", text: "Changed successfully" }));
    }
}

export function createPin(payload){
    return function(dispatch){  
        const tags = convertTagsStringToTagsArray(payload.pinData.tagsString);

        if(!payload.pinData.imageSrc){
            dispatch(showMessage({title: "Image error", text: "You did not provide the image"}));
            return;
        }
        else if(!payload.pinData.title){
            dispatch(showMessage({title: "Title not provided", text: "Provide the title"} ));
            return;
        }
        else if(tags.length === 0){
            dispatch(showMessage({title: "Wrong tags", text: "There must be at least one tag, tags must be space-separated and must not contain special characters except of comma and white-space"} ));
            return;
        }

        dispatch({ type: CREATE_PIN, payload: { pinData:{ ...payload.pinData, tags }}}); //implement validation
    }
}

export function editPin(payload){
    return function(dispatch){
        const tags = convertTagsStringToTagsArray(payload.pinData.tagsString);

        if(!payload.pinData.imageSrc){
            dispatch(showMessage({title: "Image error", text: "You did not provide the image"}));
            return;
        }
        else if(!payload.pinData.title){
            dispatch(showMessage({title: "Title not provided", text: "Provide the title"} ));
            return;
        }
        else if(tags.length === 0){
            dispatch(showMessage({title: "Wrong tags", text: "There must be at least one tag, tags must be comma-separated and must not contain special characters except of comma and white-space"} ));
            return;
        }

        dispatch({ type: EDIT_PIN, payload: { pinData: { ...payload.pinData, tags } }}); //implement validation
    }
}

export function deletePin(payload){
    return function(dispatch){
        dispatch({ type: DELETE_PIN, payload });
    }
}

export function savePin(payload){
    return function(dispatch){
        dispatch( { type: SAVE_PIN, payload } );
    }
}

export function deletePinFromSaved(payload){
    return function(dispatch){
        dispatch({ type: DELETE_PIN_FROM_SAVED, payload });
    }
}

export function follow(payload){
    return function(dispatch){
        dispatch({ type: FOLLOW, payload });
    }
}

export function unfollow(payload){
    return function(dispatch){
        dispatch({ type: UNFOLLOW, payload });
    }
}

export function showMessage(payload){
    return function (dispatch){
        dispatch({type: SHOW_MESSAGE, payload});
        setTimeout(() => dispatch({ type: HIDE_MESSAGE }), 3000)
    }
}