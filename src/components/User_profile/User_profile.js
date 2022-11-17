import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { SAVED_PINS, USER_PINS } from "../../various_things/constant_keywords";
import { pins } from "../../various_things/pins";
import SavedPinOpener from "../Pins/Saved_pins/Saved_pin_opener";
import ProfileTopImage from "./Profile_top_image";
import UserPinsSwitcher from "./User_pins_switcher";
import UserProfileImageAndNickname from "./User_profile_image_and_nickname";

function UserProfileWindow({ handleProfileEdit, handlePinRemoveFromSaved }){
    const location = useLocation();

    const user = useSelector((state) => state.user); //User itself
    const otherUser = location.state?.user; //Other person's profile
    
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
            <UserProfileImageAndNickname nickname={user?.nickname || otherUser?.nickname} profileImageSrc={user?.profileImageSrc || otherUser?.profileImageSrc} handleUserProfileImageChange={handleUserProfileImageChange} />
            <UserPinsSwitcher handleUserPinsSwitch={handleUserPinsSwitch} />
        { typeOfPinsToShow }
        </div>
    );
}

export default UserProfileWindow;