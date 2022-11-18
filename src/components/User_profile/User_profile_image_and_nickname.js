import FileEditButton from "../Reusable_components/File_edit_button/File_edit_button";

function UserProfileImageAndNickname({ nickname, profileImageSrc, handleUserProfileImageChange }){
    return(
        <div className="userProfileImageAndNickname">
            <div className="userProfileImageWrapper">
                <img src={profileImageSrc} className="userProfileImage" />
            </div>
            
            <b className="userNickname">{nickname}</b>
            {
                handleUserProfileImageChange ? //If user is viewing his own profile
                <FileEditButton accept={"image/png, image/gif, image/jpeg"} handler={handleUserProfileImageChange} />
                :
                null
            }
        </div>
    );
}

export default UserProfileImageAndNickname;