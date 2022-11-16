import FileEditButton from "../Reusable_components/File_edit_button/File_edit_button";

function ProfileTopImage({ imageSrc, handleProfileTopImageChange }){
    return(
        <div className="profileTopImageContiner">
            <img src={imageSrc} />
            <FileEditButton handler={handleProfileTopImageChange} />
        </div>
    );
}

export default ProfileTopImage;