import { Route, Routes } from "react-router";
import AuthorizationForm from "./Authorization/Authorization_form";
import Header from "./Header/Header";
import UserProfileWindow from "./User_profile_window/User_profile_window";

function Layout({ 
    handlePinsSearchTermChange,

    handleAuthorizationWindowClose
}){

    return(
        <div id="layout">
            <Header handlePinsSearchTermChange={handlePinsSearchTermChange} />
            <AuthorizationForm />

            <Routes>
                <Route path="/" element={null} />
                <Route path="/profile" element={<UserProfileWindow />} />
            </Routes>
        </div>
    );
}

export default Layout;