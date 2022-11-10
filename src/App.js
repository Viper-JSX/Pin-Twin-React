import "./css/main.css";

import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";

import { useDispatch, useSelector } from 'react-redux';
import { changeConversationsSearchTerm, changePinsSearchTerm, changePinsSortCriteria, changeUserPinsSearchTerm, changeUserPinsSortCriteria, closeAuthorizationWindow, createPin, deletePin, editPin, login, logout, openLoginWindow, openSignUpWindow, register } from "./redux/action_creators";

function App(){
    const dispatch = useDispatch();

    /*---User---*/
    function handleLogin(loginData){
        dispatch(login(loginData))
    }

    function handleRegister(registerData){
        dispatch(register(registerData));
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
handleLoginWindowOpen();
    return(
        <div className="App">
            <Layout
                handlePinsSearchTermChange={handlePinsSearchTermChange}

                handleAuthorizationWindowClose={handleAuthorizationWindowClose}
            />
        </div>
    );
}

export default App;