import { useSelector } from "react-redux";
import CloseButton from "../Reusable_components/Close_button";

function LoginForm({ handleAuthorizationWindowClose }){
    
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