import { useSelector } from "react-redux";

function LoginForm(){
    const visible = useSelector((state) => state.authorization.loginWindow.visible);
    
    return(
        <form className={`loginForm ${visible ? "visible" : "hidden"}`}>
            Login
        </form>
    );
}

export default LoginForm;