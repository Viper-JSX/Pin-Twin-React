import "./css/main.css";

import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";

import { useDispatch, useSelector } from 'react-redux';

import { users } from "./various_things/users";
import { pins } from "./various_things/pins";

import { cancelConfirmation, changeConversationsSearchTerm, changePinsSearchTerm, changePinsSortCriteria, changeUserPinsSearchTerm, changeUserPinsSortCriteria, closeAuthorizationWindow, confirmAction, forceUpdate, logout, openLoginWindow, openSignUpWindow, setConfirmationValues, updateTagsViewFrequencyHistogram } from "./redux/action_creators";
import { login, signUp, createPin, deletePin, editPin, savePin, editProfile, deletePinFromSaved, follow, unfollow, searchPins } from "./redux/thunks";
import { selectMostFavouriteTags } from "./utilities/select_most_favourite_tags";
import { filterPinsBasedOnUserPreferences } from "./utilities/filter_pins_based_on_user_preferences";


function App(){
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    /*function handlePinsSearch(event){
        const searchData = { userIsLoggedIn: Boolean(user), searchTerm: event.target.value, userFollowings: user?.followings, userFavouriteTags: [] };
        
        if(searchData.userIsLoggedIn){
            searchData.userFavouriteTags = selectMostFavouriteTags(user.updateTagsViewFrequencyHistogram);
        }

        dispatch(searchPins(searchData));
    }*/

    function handlePinsSearch(event){
        const searchData = { userIsLoggedIn: Boolean(user), searchTerm: "Sobora", userFollowings: user?.followings, userFavouriteTags: [] };
        
        if(searchData.userIsLoggedIn){
            searchData.userFavouriteTags = selectMostFavouriteTags(user.updateTagsViewFrequencyHistogram);
        }

        dispatch(searchPins(searchData));
    }

    /*---User---*/
    function handleLogin({ event, loginData }){
        event.preventDefault();
        dispatch(login(loginData));
    }

    function handleSignUp({ event, signUpData }){
        event.preventDefault();
        dispatch(signUp(signUpData));
    }

    function handleLogout(){
        dispatch(logout());
    }

    function handleProfileEdit(data){
        dispatch(editProfile(data));
    }

    function handlePinCreate(pinData){
        dispatch(createPin(pinData));
    }

    function handlePinEdit(pinData){
        dispatch(editPin( pinData ));
    }

    function handlePinDelete({ pinId }){
        dispatch(deletePin({ pinId }));
    }

    function handlePinSave(pin){
        dispatch(savePin({ pin }));
    }

    function handlePinRemoveFromSaved({ deleteData }){
        dispatch(deletePinFromSaved({ deleteData }));
    }

    function handleFollow(followData){
        dispatch(follow(followData));
    }

    function handleUnfollow(unfollowData){
        dispatch(unfollow(unfollowData));
    }

    function handlePinOpenerClick({ pinTags }){
        dispatch(updateTagsViewFrequencyHistogram({ pinTags }));
        console.log(users)
    }

    /*---Search Term Handling---*/
    function handlePinsSearchTermChange(event){
        dispatch(changePinsSearchTerm({term: event.target.value}));
    }

    function handleUserPinsSearchTermChange(event){
        dispatch(changeUserPinsSearchTerm({ term: event.target.value }));
    }

    function handleConversationsSearchTermChange(event){
        dispatch(changeConversationsSearchTerm({ term: event.target.value }));
    }

    /*---Sort criteria handling*/
    function handlePinsSortCriteriaChange(criteria){
        dispatch(changePinsSortCriteria({ criteria }));
    }

    function handleUserPinsSortCriteriaChange(criteria){
        dispatch(changeUserPinsSortCriteria({ criteria }));
    }


    /*---Authorization windows---*/
    function handleLoginWindowOpen(){
        dispatch(openLoginWindow());
    }

    function handleSignUpWindowOpen(){ 
        console.log("Opening sign-up");
        dispatch(openSignUpWindow());
    }

    function handleAuthorizationWindowClose(){
        dispatch(closeAuthorizationWindow());
    }


    /*---Confirmation---*/
    function handleConfirmationWindowOpen(confirmationValues){
        console.log("Confirm open")
        dispatch(setConfirmationValues(confirmationValues));
    }

    function handleConfirm(){
        dispatch(confirmAction());
    }

    function handleConfirmationCancel(){
        dispatch(cancelConfirmation());
    }

    handleLoginWindowOpen();
    //handleProfileEdit();

    return(
        <div className="App">
            <Layout
                handlePinsSearchTermChange={handlePinsSearchTermChange}


                handleLogin={handleLogin}
                handleSignUp={handleSignUp}
                handleProfileEdit={handleProfileEdit}

                handleLoginWindowOpen={handleLoginWindowOpen}
                handleSignUpWindowOpen={handleSignUpWindowOpen}
                handleAuthorizationWindowClose={handleAuthorizationWindowClose}

                handlePinCreate={handlePinCreate}
                handlePinEdit={handlePinEdit}
                handlePinDelete={handlePinDelete}
                handlePinSave={handlePinSave}
                handlePinRemoveFromSaved={handlePinRemoveFromSaved}
                handlePinOpenerClick={handlePinOpenerClick}

                handleFollow={handleFollow}
                handleUnfollow={handleUnfollow}

                handleConfirmationWindowOpen={handleConfirmationWindowOpen}
                handleConfirmationCancel={handleConfirmationCancel}
            />
        </div>
    );
}

export default App;