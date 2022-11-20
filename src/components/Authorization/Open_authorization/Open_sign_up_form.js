function OpenSignUpForm({ handleSignUpFormOpen }){
    console.log("Open sign up form", handleSignUpFormOpen)
    return(
        <button className="openSignUpForm" onClick={handleSignUpFormOpen}>Sign up</button>
    );
}

export default OpenSignUpForm;