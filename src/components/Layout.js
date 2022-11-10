import { Route, Routes } from "react-router";
import LoginForm from "./Authorization/Login_form";
import SignUpForm from "./Authorization/Sing_up_form";
import Header from "./Header/Header";
import UserProfileWindow from "./User_profile_window/User_profile_window";

function Layout({ handlePinsSearchTermChange }){

    return(
        <div id="layout">
            <Header handlePinsSearchTermChange={handlePinsSearchTermChange} />
            <LoginForm />
            <SignUpForm />

            <Routes>
                <Route path="/" element={null} />
                <Route path="/profile" element={<UserProfileWindow />} />
            </Routes>
        </div>
    );
}

export default Layout;