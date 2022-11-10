import { useSelector } from "react-redux";
import LoginForm from "./Login_form";
import SignUpForm from "./Sing_up_form";

function AuthorizationSwitcher({ handleAuthorizationWindowClose }){
    const [loginWindowIsVisible, signUpWindowIsVisible] = useSelector((state) => [state.authorization.loginWindow.visible, state.authorization.signUpWindow.visible]);

    if(loginWindowIsVisible || signUpWindowIsVisible){
        return(
            <div className="authorizationSwitcher">
                {
                    loginWindowIsVisible ? 
                    <LoginForm handleAuthorizationWindowClose={handleAuthorizationWindowClose} /> 
                    : 
                    <SignUpForm handleAuthorizationWindowClose={handleAuthorizationWindowClose} />
                }
            </div>
        );
    }

    return null;
}

export default AuthorizationSwitcher;