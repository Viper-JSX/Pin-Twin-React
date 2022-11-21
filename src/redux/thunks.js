import { PinClass } from "../Classes/Pin_class";

import { convertTagsStringToTagsArray } from "../utilities/convertTagsStringToTagsArray";
import { selectMostFavouriteTags } from "../utilities/select_most_favourite_tags";
import { pins } from "../various_things/pins";
import { users } from "../various_things/users";
import { closeAuthorizationWindow, updatePinsList } from "./action_creators";
import { CHANGE_PINS_SEARCH_TERM, CREATE_COMMENT, CREATE_PIN, DELETE_COMMENT, DELETE_PIN, DELETE_PIN_FROM_SAVED, EDIT_PIN, EDIT_PROFILE, FILTER_PINS_BASED_ON_USER_PREFERENCES, FOLLOW, HIDE_MESSAGE, LOGIN, SAVE_PIN, SEARCH_PINS, SHOW_MESSAGE, SHOW_RECENT_PINS, SIGN_UP, UNFOLLOW } from "./action_types";

export function searchPins(payload){
    return function(dispatch){
        dispatch({ type: CHANGE_PINS_SEARCH_TERM, payload: { pinsSearchTerm: payload.pinsSearchTerm } });

        if(payload.pinsSearchTerm){ //User entered something to search bar
            dispatch({ type: SEARCH_PINS, payload: { pinsSearchTerm: payload.pinsSearchTerm } });
        }
        else if(!payload.searchTerm && payload.userIsLoggedIn){ //user is logged in but did not typed anything to search bar, in this case - show pins based on user's preferences
            dispatch({ type: FILTER_PINS_BASED_ON_USER_PREFERENCES, payload: { pins: payload.pins, userFavouriteTags: payload.userFavouriteTags, userFollowings: payload.userFollowings } });
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
                dispatch(closeAuthorizationWindow());
                dispatch(showMessage({ title: "Success", text: "Logged in" }));
                dispatch({ type: FILTER_PINS_BASED_ON_USER_PREFERENCES, payload: { pins: pins, userFavouriteTags: selectMostFavouriteTags(users[i].tagsViewFrequencyHistogram), userFollowings: [ users[i].followings ] } }); //if user logged in then show their most preferable pins

                return;
            }
        }
        dispatch(showMessage({ title: "Cannot login", text: "Wrong email or password" }));
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
            dispatch(showMessage({ title: "Success", text: "Successfully signed up" }));
            dispatch(closeAuthorizationWindow());
            dispatch({ type: SHOW_RECENT_PINS, pins: pins }); //If new accout is created, then show recent pins
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

        const newPin = new PinClass(payload.pinData.creatorId, payload.pinData.imageSrc, payload.pinData.title, payload.pinData.discription, tags);
        dispatch({ type: CREATE_PIN, payload: { newPin }}); //implement validation
        dispatch(updatePinsList({ pins }));
        payload.navigate({ pathname: "/pins/pin", search: `?id=${newPin.id}` });
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
        dispatch(updatePinsList({ pins }));
        payload.navigate({ pathname: "/pins/pin", search: `?id=${payload.pinData.id}` });
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

export function createComment(payload){
    return function(dispatch){
        dispatch({ type: CREATE_COMMENT, payload });
        dispatch(updatePinsList({ pins }));
    }
}

export function deleteComment(payload){
    return function(dispatch){
        dispatch({ type: DELETE_COMMENT, payload });
        dispatch(updatePinsList({ pins }));
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