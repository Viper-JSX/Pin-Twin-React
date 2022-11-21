import LogoutButton from "../Authorization/Logout_button";
import FileEditButton from "../Reusable_components/File_edit_button/File_edit_button";

function UserProfileImageAndNickname({ nickname, profileImageSrc, handleUserProfileImageChange, handleLogout }){

    return(
        <div className="userProfileImageAndNickname">
            <div className="userProfileImageWrapper">
                <img src={profileImageSrc} className="userProfileImage" />
            </div>
            
            <b className="userNickname">{nickname}</b>
            {
                handleUserProfileImageChange ? //If user is viewing his own profile
                <>
                    <FileEditButton accept={"image/png, image/gif, image/jpeg"} handler={handleUserProfileImageChange} />
                    <br />
                    <LogoutButton handleLogout={handleLogout} />
                </>
                :
                null
            }
        </div>
    );
}

export default UserProfileImageAndNickname;