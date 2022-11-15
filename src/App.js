import "./css/main.css";

import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";

import { useDispatch, useSelector } from 'react-redux';
import { cancelConfirmation, changeConversationsSearchTerm, changePinsSearchTerm, changePinsSortCriteria, changeUserPinsSearchTerm, changeUserPinsSortCriteria, closeAuthorizationWindow, confirmAction, forceUpdate, logout, openLoginWindow, openSignUpWindow, setConfirmationValues } from "./redux/action_creators";
import { login, showMessage, signUp, createPin, deletePin, editPin, savePin } from "./redux/thunks";

import Pins from "./components/Pins/Pins";
import { NavLink } from "react-router-dom";
import { DELETE_PIN } from "./redux/action_types";
import { CONFIRM_PIN_DELETE } from "./confirmation_types/confirmation_types";

function App(){
    const dispatch = useDispatch();

    /*---User---*/
    function handleLogin({ event, loginData }){
        event.preventDefault();
        dispatch(login(loginData))
    }

    function handleSignUp({ event, signUpData }){
        event.preventDefault();
        dispatch(signUp(signUpData));
    }

    function handleLogout(){
        dispatch(logout());
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

    return(
        <div className="App">
            <Layout
                handlePinsSearchTermChange={handlePinsSearchTermChange}


                handleLogin={handleLogin}
                handleSignUp={handleSignUp}
                handleLoginWindowOpen={handleLoginWindowOpen}
                handleSignUpWindowOpen={handleSignUpWindowOpen}
                handleAuthorizationWindowClose={handleAuthorizationWindowClose}

                handlePinCreate={handlePinCreate}
                handlePinEdit={handlePinEdit}
                handlePinDelete={handlePinDelete}
                handlePinSave={handlePinSave}

                handleConfirmationWindowOpen={handleConfirmationWindowOpen}
                handleConfirmationCancel={handleConfirmationCancel}
            />
        </div>
    );
}

export default App;