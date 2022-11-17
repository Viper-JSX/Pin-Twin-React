import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { SAVED_PINS, USER_PINS } from "../../various_things/constant_keywords";
import SavedPins from "../Pins/Saved_pins/Saved_pins.";
import ProfileOpener from "./Profile_opener";
import ProfileTopImage from "./Profile_top_image";
import UserPinsSwitcher from "./User_pins_switcher";
import UserProfileImageAndNickname from "./User_profile_image_and_nickname";

function UserProfileWindow({ handleProfileEdit, handlePinRemoveFromSaved }){
    const location = useLocation();

    const user = useSelector((state) => state.user); //User itself
    const otherUser = location.state?.user; //Other person's profile
    console.log(otherUser)
    const otherUserProfile = Boolean(otherUser); //indicates whether user viewing own profile or other person's profile
    const [ typeOfPinsToShow, setTypeOfPinsToShow ] = useState(USER_PINS); //Determines which pins to show: created by user or saved ones

    function handleUserPinsSwitch(typeOfPinsToShow){
        setTypeOfPinsToShow(typeOfPinsToShow);
    }

    function handleProfileTopImageChange(event){
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = function(result){
            handleProfileEdit({ profileData: { ...user, profileTopImageSrc: result.target.result } });
        };
    }

    function handleUserProfileImageChange(event){
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = function(result){
            handleProfileEdit({ profileData: { ...user, profileImageSrc: result.target.result } });
        };
    }

    return(
        <div className="userProfileWindow"> 
            <ProfileTopImage imageSrc={user.profileTopImageSrc} handleProfileTopImageChange={handleProfileTopImageChange} />
            <UserProfileImageAndNickname nickname={otherUser?.nickname || user?.nickname} profileImageSrc={otherUser?.profileImageSrc || user?.profileImageSrc} handleUserProfileImageChange={handleUserProfileImageChange} />
            <UserPinsSwitcher handleUserPinsSwitch={handleUserPinsSwitch} />
            <SavedPins savedPins={user.savedPins} handlePinRemoveFromSaved={handlePinRemoveFromSaved} />
            <ProfileOpener profileId={1} />
        { typeOfPinsToShow }
        </div>
    );
}

export default UserProfileWindow;