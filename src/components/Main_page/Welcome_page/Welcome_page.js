import OpenAuthorization from "../../Authorization/Open_authorization/Open_authorization";

function WelcomePage({ handleLoginFormOpen, handleSignUpFormOpen }){
    return(
        <div className="welcomePage">
            <div className="welcomePageCover">
                <h2>Welcome to PinTwin</h2>
                <OpenAuthorization handleLoginFormOpen={handleLoginFormOpen} handleSignUpFormOpen={handleSignUpFormOpen} />
            </div>
        </div>
    );
}

export default WelcomePage;