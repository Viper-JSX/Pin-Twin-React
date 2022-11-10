import { useSelector } from "react-redux";
import CloseButton from "../Reusable_components/Close_button";

function SignUpForm({ handleAuthorizationWindowClose }){

    return(
        <div>
            <CloseButton className="signUpForm" handler={handleAuthorizationWindowClose} />
            <form>
                Sign up
            </form>
        </div>
    );
}

export default SignUpForm;