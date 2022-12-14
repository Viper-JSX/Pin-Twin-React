import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { NavLink } from 'react-router-dom';
import CloseButton from "../Reusable_components/Close_button";

function AuthorizationForm({ handleLoginFormOpen, handleSignUpFormOpen, handleLogin, handleSignUp, handleAuthorizationWindowClose }){
    const [ inputsValue, setInputsValue ] = useState({ email: "", password: "" });
    const currentAuthorizationType = useSelector((state) => state.authorization.currentAuthorizationType);

    function handleLoginChange(event){
        setInputsValue({ ...inputsValue, email: event.target.value });
    }

    function handlePasswordChange(event){
        setInputsValue({ ...inputsValue, password: event.target.value });
    }

    const formRef = useRef(null);

    useEffect(() => {
        setInputsValue({ ...inputsValue, email: "", password: "" });
    }, [currentAuthorizationType]); //To reset the fields when switching or closing form

    if(!currentAuthorizationType){
        return null;
    }

    return(
        <div className="authorizationFormWrapper">
            <div className="authorizationForm">
                <CloseButton handler={handleAuthorizationWindowClose} />
                <form ref={formRef}>
                    <b className="authorizationFormTitle">{currentAuthorizationType === "login" ? "Login" : "Sign-up"}</b>
                    <input className="emailInput" type="email" value={inputsValue.email} placeholder="Email" onChange={handleLoginChange} />
                    <input className="passwordInput" type="password" value={inputsValue.password} placeholder="Password" onChange={handlePasswordChange} />

                    {
                        currentAuthorizationType === "login" ? 
                        <>
                            <button onClick={(event) => {
                                handleLogin({ event, loginData: inputsValue});
                            }}>Login</button>

                            <NavLink className="authorizationFormSwitcher" to="" onClick={handleSignUpFormOpen}>Don't have an account? <br /> Create one!</NavLink>
                        </>
                        :
                        <>
                            <button onClick={(event) => {
                                handleSignUp({event, signUpData: inputsValue});
                            }}>Sign-up</button>
                            <NavLink className="authorizationFormSwitcher" to="" onClick={handleLoginFormOpen}>Already have an account?</NavLink>
                        </>
                    }
                </form>
            </div>
        </div>
    );
}

export default AuthorizationForm;