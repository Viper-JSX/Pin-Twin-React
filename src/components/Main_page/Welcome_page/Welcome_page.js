import OpenAuthorization from "../../Authorization/Open_authorization/Open_authorization";

function WelcomePage({ handleLoginFormOpen, handleSignUpFormOpen }){
    return(
        <div className="welcomePage">
            <div className="welcomePageCover">
                <h1 className="welcomePageTitle">Welcome to PinTwin</h1>
                <OpenAuthorization handleLoginFormOpen={handleLoginFormOpen} handleSignUpFormOpen={handleSignUpFormOpen} />
            </div>
        </div>
    );
}

export default WelcomePage;