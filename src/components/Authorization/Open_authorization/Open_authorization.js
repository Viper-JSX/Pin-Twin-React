import OpenLoginForm from "./Open_login_form";
import OpenSignUpForm from "./Open_sign_up_form";

function OpenAuthorization({ handleLoginFormOpen, handleSignUpFormOpen }){
    return(
        <div className="openAuthorization">
            <OpenLoginForm handleLoginFormOpen={handleLoginFormOpen} />
            <OpenSignUpForm handleSignUpFormOpen={handleSignUpFormOpen} />
        </div>
    );
}

export default OpenAuthorization;