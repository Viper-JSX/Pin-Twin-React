import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { SAVED_PINS, USER_PINS } from "../../various_things/constant_keywords";
import ProfileTopImage from "./Profile_top_image";
import UserProfileImageAndNickname from "./User_profile_image_and_nickname";

function UserProfileWindow({ handleProfileEdit }){
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
        { typeOfPinsToShow }
        </div>
    );
}

export default UserProfileWindow;