import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";
import { SAVED_PINS, USER_PINS } from "../../various_things/constant_keywords";

import Pins from "../Pins/Pins";
import SavedPins from "../Pins/Saved_pins/Saved_pins.";
import FollowButton from "../Reusable_components/Follow_button/Follow_button";
import ProfileTopImage from "./Profile_top_image";
import UserPinsSwitcher from "./User_pins_switcher";
import UserProfileImageAndNickname from "./User_profile_image_and_nickname";

function UserProfileWindow({ handleLogout, handlePinOpenerClick, handleProfileEdit, handlePinSave, handlePinRemoveFromSaved, handleFollow, handleUnfollow }){
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

    if(!user && !otherUser){
        return(
            <Navigate to="/" />
        );
    }

    else if(otherUser && user?.id !== otherUser.id){ //If other user was passed to view and if user opened not his own profile through ProfileOpener. User can be not existing that's why optional chaining is user
        return(
            <div className="userProfile"> 
                <ProfileTopImage imageSrc={otherUser.profileTopImageSrc} />
                <UserProfileImageAndNickname nickname={otherUser.nickname} profileImageSrc={otherUser.profileImageSrc} />
                <FollowButton userToFollowOrUnfollowId={otherUser.id} handleFollow={handleFollow} handleUnfollow={handleUnfollow} />
                <Pins pins={otherUser.pins} handlePinSave={handlePinSave} handlePinRemoveFromSaved={handlePinRemoveFromSaved} handlePinOpenerClick={handlePinOpenerClick} />
            </div>
        );
    }

    return(
        <div className="userProfile"> 
            <ProfileTopImage imageSrc={user.profileTopImageSrc} handleProfileTopImageChange={handleProfileTopImageChange} />
            <UserProfileImageAndNickname nickname={user.nickname} profileImageSrc={user.profileImageSrc} handleUserProfileImageChange={handleUserProfileImageChange} handleLogout={handleLogout} />
            
            <UserPinsSwitcher typeOfPinsToShow={typeOfPinsToShow} handleUserPinsSwitch={handleUserPinsSwitch}  />
            {
                typeOfPinsToShow === USER_PINS ? 
                <Pins pins={user.pins} handlePinOpenerClick={handlePinOpenerClick} handlePinSave={handlePinSave} handlePinRemoveFromSaved={handlePinRemoveFromSaved} />
                :
                <SavedPins savedPins={user.savedPins} handlePinOpenerClick={handlePinOpenerClick} handlePinSave={handlePinRemoveFromSaved} handlePinRemoveFromSaved={handlePinRemoveFromSaved} />
            }
        </div>
    );
}

export default UserProfileWindow;