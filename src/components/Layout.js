import { Route, Routes } from "react-router";
import AuthorizationForm from "./Authorization/Authorization_form";
import Header from "./Header/Header";
import MainPage from "./Main_page/Main_page";
import MessageModal from "./Message/Message_modal";
import UserProfileWindow from "./User_profile_window/User_profile_window";

function Layout({ 
    handlePinsSearchTermChange,

    handleLogin,
    handleSignUp,
    handleAuthorizationWindowClose
}){

    return(
        <div id="layout">
            <Header handlePinsSearchTermChange={handlePinsSearchTermChange} />
            <AuthorizationForm 
                handleLogin={handleLogin}
                handleSignUp={handleSignUp}
                handleAuthorizationWindowClose={handleAuthorizationWindowClose} 
            />

            <MessageModal />

            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/profile" element={<UserProfileWindow />} />
            </Routes>
        </div>
    );
}

export default Layout;