import FileEditButton from "../Reusable_components/File_edit_button/File_edit_button";

function ProfileTopImage({ imageSrc, handleProfileTopImageChange }){
    return(
        <div className="profileTopImageContainer">
            <img className="profileTopImage" src={imageSrc} />
            {
                handleProfileTopImageChange ? //If user is viewing his own profile
                <FileEditButton accept={"image/png, image/gif, image/jpeg"} handler={handleProfileTopImageChange} />
                :
                null
            }
        </div>
    );
}

export default ProfileTopImage;