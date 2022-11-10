import { useState } from "react";
import { useSelector } from "react-redux";
import CloseButton from "../Reusable_components/Close_button";

function LoginForm({ handleAuthorizationWindowClose }){
    const [ loginData, setLoginData ] = useState({ login: "", password: "" });

    return(
        <div className="loginForm">
            <CloseButton handler={handleAuthorizationWindowClose} />
            <form>
                <input type="email" value={loginData.login} />
                <input type="password" value={loginData.password} />
            </form>
        </div>
    );
}

export default LoginForm;