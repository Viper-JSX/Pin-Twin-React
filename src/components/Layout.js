import { Route, Routes } from "react-router";
import AuthorizationForm from "./Authorization/Authorization_form";
import Header from "./Header/Header";
import MainPage from "./Main_page/Main_page";
import MessageModal from "./Message/Message_modal";
import Pin from "./Pins/Pin/Pin";
import PinEditor from "./Pin_editor/Pin_editor";
import UserProfileWindow from "./User_profile_window/User_profile_window";

function Layout({ 
    handlePinsSearchTermChange,

    handleLogin,
    handleSignUp,
    handleAuthorizationWindowClose,

    handlePinCreate,
    handlePinEdit,
    handlePinDelete,
    handlePinSave
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
                <Route path="/" element={<MainPage handlePinSave={handlePinSave} />} />
                <Route path="/pins/:id" element={<Pin />} />
                <Route path="/profile" element={<UserProfileWindow />} />
                <Route path="/pins/create" element={<PinEditor mode="create" handlePinCreate={handlePinCreate} handlePinEdit={null} />} />
                <Route path="/pins/:id/edit" element={<PinEditor mode="edit" handlePinCreate={null} handlePinEdit={handlePinEdit} handlePinDelete={handlePinDelete} />} />
            </Routes>
        </div>
    );
}

export default Layout;