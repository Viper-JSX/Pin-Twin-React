import { useSelector } from "react-redux";
import CloseButton from "../Reusable_components/Close_button";

function LoginForm({ handleAuthorizationWindowClose }){
    const visible = useSelector((state) => state.authorization.loginWindow.visible);
    
    return(
        <form className={`loginForm ${visible ? "visible" : "hidden"}`}>
            <CloseButton handler={handleAuthorizationWindowClose} />
            Login
        </form>
    );
}

export default LoginForm;