import { useSelector } from "react-redux";
import CloseButton from "../Reusable_components/Close_button";

function LoginForm({ handleAuthorizationWindowClose }){
    const visible = useSelector((state) => state.authorization.loginWindow.visible);
    
    return(
        <div className="loginForm">
            <CloseButton handler={handleAuthorizationWindowClose} />
            <form>
                Login
            </form>
        </div>
    );
}

export default LoginForm;