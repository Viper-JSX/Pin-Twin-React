import "./css/main.css";

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";

import { useDispatch, useSelector } from 'react-redux';
import { pins } from "./various_things/pins";

import { cancelConfirmation, changeConversationsSearchTerm, changePinsSortCriteria, changeUserPinsSearchTerm, changeUserPinsSortCriteria, closeAuthorizationWindow, confirmAction, logout, openLoginWindow, openSignUpWindow, setConfirmationValues, updateTagsViewFrequencyHistogram } from "./redux/action_creators";
import { login, signUp, createPin, deletePin, editPin, savePin, editProfile, deletePinFromSaved, follow, unfollow, searchPins, createComment, deleteComment, showMessage } from "./redux/thunks";
import { selectMostFavouriteTags } from "./utilities/select_most_favourite_tags";
import { useNavigate } from "react-router";


function App(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);

    //useSelector((state) => console.log(state.app))
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
        dispatch(createPin({ ...pinData, navigate }));
    }

    function handlePinEdit(pinData){
        dispatch(editPin( { ...pinData, navigate }));
    }

    function handlePinDelete({ pinId }){
        dispatch(deletePin({ pinId }));
        navigate("/");
    }

    function handlePinSave(pin){
        if(!user){
            handleLoginFormOpen();
            return;
        }
        dispatch(savePin({ pin }));
    }

    function handlePinRemoveFromSaved({ deleteData }){
        dispatch(deletePinFromSaved({ deleteData }));
    }

    function handleFollow(followData){
        if(!user){
            handleLoginFormOpen();
            return;
        }

        dispatch(follow(followData));
    }

    function handleUnfollow(unfollowData){
        dispatch(unfollow(unfollowData));
    }

    function handleCommentCreate(commentData){
        dispatch(createComment(commentData));
    }

    function handleCommentDelete(commentDeleteData){
        dispatch(deleteComment(commentDeleteData));
    }

    function handlePinOpenerClick({ pinTags }){
        if(!user){
            return
        }
        dispatch(updateTagsViewFrequencyHistogram({ pinTags }));
    }

    /*---Search Term Handling---*/
    function handlePinsSearchTermChange(event){
        const searchData = { userIsLoggedIn: Boolean(user), pins, pinsSearchTerm: event.target.value, userFollowings: user?.followings, userFavouriteTags: [] };
        
        if(searchData.userIsLoggedIn){
            searchData.userFavouriteTags = selectMostFavouriteTags(user.tagsViewFrequencyHistogram);
        }

        dispatch(searchPins(searchData));
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
    function handleLoginFormOpen(){
        dispatch(openLoginWindow());
    }

    function handleSignUpFormOpen(){ 
        dispatch(openSignUpWindow());
    }

    function handleAuthorizationWindowClose(){
        dispatch(closeAuthorizationWindow());
    }


    /*---Confirmation---*/
    function handleConfirmationWindowOpen(confirmationValues){
        dispatch(setConfirmationValues(confirmationValues));
    }

    function handleConfirm(){
        dispatch(confirmAction());
    }

    function handleConfirmationCancel(){
        dispatch(cancelConfirmation());
    }

    //useEffect(() => {
    //    handleLoginFormOpen();
    //}), [""];

    return(
        <div className="App">
            <Layout
                handlePinsSearchTermChange={handlePinsSearchTermChange}


                handleLogin={handleLogin}
                handleSignUp={handleSignUp}
                handleLogout={handleLogout}
                handleProfileEdit={handleProfileEdit}

                handleLoginFormOpen={handleLoginFormOpen}
                handleSignUpFormOpen={handleSignUpFormOpen}
                handleAuthorizationWindowClose={handleAuthorizationWindowClose}

                handlePinCreate={handlePinCreate}
                handlePinEdit={handlePinEdit}
                handlePinDelete={handlePinDelete}
                handlePinSave={handlePinSave}
                handlePinRemoveFromSaved={handlePinRemoveFromSaved}
                handlePinOpenerClick={handlePinOpenerClick}

                handleFollow={handleFollow}
                handleUnfollow={handleUnfollow}

                handleCommentCreate={handleCommentCreate}
                handleCommentDelete={handleCommentDelete}

                handleConfirmationWindowOpen={handleConfirmationWindowOpen}
                handleConfirmationCancel={handleConfirmationCancel}
            />
        </div>
    );
}

export default App;