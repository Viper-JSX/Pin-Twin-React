import { useSelector } from "react-redux";

function SignUpForm(){
    const visible = useSelector((state) => state.authorization.signUpWindow.visible);

    return(
        <form className={`signUpForm ${visible ? "visible" : "hidden"}`} >
            Sign up
        </form>
    );
}

export default SignUpForm;