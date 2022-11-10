import { useState } from "react";
import { useSelector } from "react-redux";
import CloseButton from "../Reusable_components/Close_button";

function AuthorizationForm({ handleLogin, handleSignUp, handleAuthorizationWindowClose }){
    const [ loginData, setLoginData ] = useState({ login: "", password: "" });
    const currentAuthorizationType = useSelector((state) => state.authorization.currentAuthorizationType);

    function handleLoginChange(event){
        setLoginData({ ...loginData, login: event.target.value });
    }

    function handlePasswordChange(event){
        setLoginData({ ...loginData, password: event.target.value });
    }

    if(!currentAuthorizationType){
        return null;
    }

    return(
        <div className="authorizationFormWrapper">
            <div className="authorizationForm">
                <CloseButton handler={handleAuthorizationWindowClose} />
                <form>
                    <input className="emailInput" type="email" value={loginData.login} onChange={handleLoginChange} />
                    <input className="passwordInput" type="password" value={loginData.password} onChange={handlePasswordChange} />

                    {
                        currentAuthorizationType === "login" ? 
                        <button onClick={(event) => handleLogin({ event, loginData})}>Login</button>
                        :
                        <button onClick={(event) => handleSignUp({event, loginData})}>Sign-up</button>
                    }
                </form>
            </div>
        </div>
    );
}

export default AuthorizationForm;