import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { SAVED_PINS, USER_PINS } from "../../various_things/constant_keywords";

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
        handleProfileEdit({ profileData: { ...user, profileTopImageSrc: "img src shortly" } });
    }

    function handleUserProfileImageChange(event){
        handleProfileEdit({ profileData: { ...user, profileImageSrc: "img src shortly" } });
    }

    return(
        <div className="userProfileWindow"> 

        { typeOfPinsToShow }
        </div>
    );
}

export default UserProfileWindow;