import "./css/main.css";

import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";

import { useDispatch, useSelector } from 'react-redux';
import { changeConversationsSearchTerm, changePinsSearchTerm, changePinsSortCriteria, changeUserPinsSearchTerm, changeUserPinsSortCriteria, closeAuthorizationWindow, createPin, deletePin, editPin, forceUpdate, logout, openLoginWindow, openSignUpWindow } from "./redux/action_creators";
import { login, showMessage, signUp, savePin } from "./redux/thunks";

import Pins from "./components/Pins/Pins";

function App(){
    const dispatch = useDispatch();

    /*---User---*/
    function handleLogin({ event, loginData }){
        event.preventDefault();
        console.log(loginData)
        dispatch(login(loginData))
    }

    function handleSignUp({ event, signUpData }){
        event.preventDefault();
        console.log(signUpData)
        dispatch(signUp(signUpData));
    }

    function handleLogout(){
        dispatch(logout());
    }

    function handlePinCreate(newPin){
        dispatch(createPin({ newPin }));
    }

    function handlePinEdit(newPinData){
        dispatch(editPin({ newPinData } ));
    }

    function handlePinDelete(pinId){
        dispatch(deletePin({ pinId }));
    }

    function handlePinSave(pin){
        console.log("Saving")
        dispatch(savePin({ pin }));
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
        dispatch(openSignUpWindow());
    }

    function handleAuthorizationWindowClose(){
        dispatch(closeAuthorizationWindow());
    }

    handleSignUpWindowOpen();

    dispatch(forceUpdate())

    return(
        <div className="App">
            <Layout
                handlePinsSearchTermChange={handlePinsSearchTermChange}


                handleLogin={handleLogin}
                handleSignUp={handleSignUp}
                handleAuthorizationWindowClose={handleAuthorizationWindowClose}
                handlePinSave={handlePinSave}
            />
        </div>
    );
}

export default App;