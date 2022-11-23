import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";

import AuthorizationForm from "./Authorization/Authorization_form";
import Header from "./Header/Header";
import MainPage from "./Main_page/Main_page";
import MessageModal from "./Message/Message_modal";
import Pin from "./Pins/Pin/Pin";
import PinEditor from "./Pin_editor/Pin_editor";
import ConfirmationWindow from "./Reusable_components/Confirmation_window/Confirmation_window";
import UserProfile from "./User_profile/User_profile";

function Layout({ 
    handlePinsSearch,
    handlePinsSearchTermChange,

    handleLogin,
    handleSignUp,
    handleLogout,
    handleProfileEdit,

    handleLoginFormOpen,
    handleSignUpFormOpen,
    handleAuthorizationWindowClose,

    handlePinCreate,
    handlePinEdit,
    handlePinDelete,
    handlePinSave,
    handlePinRemoveFromSaved,
    handlePinOpenerClick,


    handleFollow,
    handleUnfollow,

    handleCommentCreate,
    handleCommentDelete,

    handleConfirmationWindowOpen,
    handleConfirmationCancel
}){

    const user = useSelector((state) => state.user);

    return(
        <div id="layout">

            {
            ( (window.location.pathname === "" || window.location.pathname === "/") && !user ) ? //User is on main page and not logged in
            null
            :
            <Header 
                handlePinsSearch={handlePinsSearch}
                handlePinsSearchTermChange={handlePinsSearchTermChange} 
                handleLoginFormOpen={handleLoginFormOpen}
                handleSignUpFormOpen={handleSignUpFormOpen}
            />

            }
            <AuthorizationForm 
                handleLoginFormOpen={handleLoginFormOpen}
                handleSignUpFormOpen={handleSignUpFormOpen}
                handleLogin={handleLogin}
                handleSignUp={handleSignUp}
                handleAuthorizationWindowClose={handleAuthorizationWindowClose} 
            />

            <MessageModal />
            <ConfirmationWindow handleConfirmationCancel={handleConfirmationCancel} handlePinDelete={handlePinDelete} />

            <Routes>
                <Route path="/" element={<MainPage handleLoginFormOpen={handleLoginFormOpen} handleSignUpFormOpen={handleSignUpFormOpen} handlePinsSearchTermChange={handlePinsSearchTermChange} handlePinOpenerClick={handlePinOpenerClick} handlePinSave={handlePinSave} handlePinRemoveFromSaved={handlePinRemoveFromSaved} />} />
                <Route path="/pins/pin" element={<Pin handlePinSave={handlePinSave} handlePinRemoveFromSaved={handlePinRemoveFromSaved} handlePinOpenerClick={handlePinOpenerClick} handleCommentCreate={handleCommentCreate} handleCommentDelete={handleCommentDelete} handleLoginFormOpen={handleLoginFormOpen} />} />
                <Route path="/profile" element={<UserProfile  handleLogout={handleLogout} handlePinOpenerClick={handlePinOpenerClick} handleProfileEdit={handleProfileEdit} handlePinSave={handlePinSave} handlePinRemoveFromSaved={handlePinRemoveFromSaved} />} />
                <Route path="/users/:id" element={<UserProfile handlePinSave={handlePinSave} handlePinRemoveFromSaved={handlePinRemoveFromSaved} handleFollow={handleFollow} handlePinOpenerClick={handlePinOpenerClick} handleUnfollow={handleUnfollow} />} />
                <Route path="/pins/create" element={<PinEditor mode="create" handlePinCreate={handlePinCreate} handlePinEdit={null} />} />
                <Route path="/pins/:id/edit" element={<PinEditor mode="edit" handlePinCreate={null} handlePinEdit={handlePinEdit} handlePinDelete={handlePinDelete} handleConfirmationWindowOpen={handleConfirmationWindowOpen} />} />
            
                <Route path="*" element={<b>Not found</b>} />
            </Routes>
        </div>
    );
}

export default Layout;