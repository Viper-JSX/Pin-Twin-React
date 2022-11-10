import { useSelector } from "react-redux";

function AuthorizationSwitcher(){
    const [loginWindowIsVisible, signUpWindowIsVisible] = useSelector((state) => [state.authorization.loginWindow.visible, state.authorization.signUpWindow.visible]);

    return(
        <>
            {
                
            }
        </>
    )
}

export default AuthorizationSwitcher;