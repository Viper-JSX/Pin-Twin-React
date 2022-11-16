import FileEditButton from "../Reusable_components/File_edit_button/File_edit_button";

function UserProfileImageAndNickname({ nickname, profileImageSrc, handleUserProfileImageChange }){
    console.log(profileImageSrc)
    return(
        <div className="userProfileImageAndNickname">
            <img src={profileImageSrc} className="userProfileImage" />
            <b className="userNickname">{nickname}</b>
            <FileEditButton accept={"image/png, image/gif, image/jpeg"} handler={handleUserProfileImageChange} />
        </div>
    );
}

export default UserProfileImageAndNickname;