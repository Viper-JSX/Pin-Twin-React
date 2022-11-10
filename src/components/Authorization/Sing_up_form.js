import { useSelector } from "react-redux";
import CloseButton from "../Reusable_components/Close_button";

function SignUpForm(){
    const visible = useSelector((state) => state.authorization.signUpWindow.visible);

    return(
        <div>
            <CloseButton className="signUpForm" handler={null} />
            <form>
                Sign up
            </form>
        </div>
    );
}

export default SignUpForm;