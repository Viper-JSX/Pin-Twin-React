import { useState } from "react";
import { useSelector } from "react-redux";
import CloseButton from "../Reusable_components/Close_button";

function AuthorizationForm({ handleLogin, handleSignUp, handleAuthorizationWindowClose }){
    const [ inputsValue, setInputsValue ] = useState({ login: "", password: "" });
    const currentAuthorizationType = useSelector((state) => state.authorization.currentAuthorizationType);

    function handleLoginChange(event){
        setInputsValue({ ...inputsValue, login: event.target.value });
    }

    function handlePasswordChange(event){
        setInputsValue({ ...inputsValue, password: event.target.value });
    }

    if(!currentAuthorizationType){
        return null;
    }

    return(
        <div className="authorizationFormWrapper">
            <div className="authorizationForm">
                <CloseButton handler={handleAuthorizationWindowClose} />
                <form>
                    <input className="emailInput" type="email" value={inputsValue.login} onChange={handleLoginChange} />
                    <input className="passwordInput" type="password" value={inputsValue.password} onChange={handlePasswordChange} />

                    {
                        currentAuthorizationType === "login" ? 
                        <button onClick={(event) => handleLogin({ event, loginData: inputsValue})}>Login</button>
                        :
                        <button onClick={(event) => handleSignUp({event, signUpData: inputsValue})}>Sign-up</button>
                    }
                </form>
            </div>
        </div>
    );
}

export default AuthorizationForm;