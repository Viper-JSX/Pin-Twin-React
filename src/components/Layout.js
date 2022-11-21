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

    return(
        <div id="layout">
            <Header 
                handlePinsSearch={handlePinsSearch}
                handlePinsSearchTermChange={handlePinsSearchTermChange} 
                handleLoginFormOpen={handleLoginFormOpen}
                handleSignUpFormOpen={handleSignUpFormOpen}
            />

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
                <Route path="/" element={<MainPage handlePinsSearchTermChange={handlePinsSearchTermChange} handlePinOpenerClick={handlePinOpenerClick} handlePinSave={handlePinSave} />} />
                <Route path="/pins/pin" element={<Pin handleConfirmationWindowOpen={handleConfirmationWindowOpen} handleCommentCreate={handleCommentCreate} handleCommentDelete={handleCommentDelete} />} />
                <Route path="/profile" element={<UserProfile  handleLogout={handleLogout} handleProfileEdit={handleProfileEdit} handlePinRemoveFromSaved={handlePinRemoveFromSaved} />} />
                <Route path="/users/:id" element={<UserProfile handlePinSave={handlePinSave} handleFollow={handleFollow} handleUnfollow={handleUnfollow} />} />
                <Route path="/pins/create" element={<PinEditor mode="create" handlePinCreate={handlePinCreate} handlePinEdit={null} />} />
                <Route path="/pins/:id/edit" element={<PinEditor mode="edit" handlePinCreate={null} handlePinEdit={handlePinEdit} handlePinDelete={handlePinDelete} handleConfirmationWindowOpen={handleConfirmationWindowOpen} />} />
            
                <Route path="*" element={<b>Not found</b>} />
            </Routes>
        </div>
    );
}

export default Layout;