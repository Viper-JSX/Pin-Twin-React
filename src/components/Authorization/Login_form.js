import { useState } from "react";
import { useSelector } from "react-redux";
import CloseButton from "../Reusable_components/Close_button";

function LoginForm({ handleAuthorizationWindowClose }){
    const [ loginData, setLoginData ] = useState({ login: "", password: "" });

    function handleLoginChange(event){
        setLoginData({ ...loginData, login: event.target.value });
    }

    function handlePasswordChange(event){
        setLoginData({ ...loginData, password: event.target.value });
    }

    console.log(loginData)

    return(
        <div className="loginForm">
            <CloseButton handler={handleAuthorizationWindowClose} />
            <form>
                <input className="emailInput" type="email" value={loginData.login} onChange={handleLoginChange} />
                <input className="passwordInput" type="password" value={loginData.password} onChange={handlePasswordChange} />
            </form>
        </div>
    );
}

export default LoginForm;