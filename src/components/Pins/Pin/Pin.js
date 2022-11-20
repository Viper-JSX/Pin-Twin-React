import { useLocation } from "react-router";
import { useSelector } from "react-redux/es/exports";

import { pins } from "../../../various_things/pins";

import Pins from "../Pins";
import OpenPinEditor from "./Open_pin_editor";
import PinImageAndInfo from "./Pin_image_and_info";
import CommentsSection from "../Comment/Comments_section";
import ProfileOpener from "../../User_profile/Profile_opener";

function Pin({ handleConfirmationWindowOpen, handleCommentCreate, handleCommentDelete }){
    const user = useSelector((state) => state.user);
    const location = useLocation();
    const pinId = location.state.pinId;
    const pin = useSelector((state) => state.app.allPins?.find((pin) => pin.id === pinId));


    const similarPins = pins.filter((possibleSimilarPin) => {
        for(let i = 0; i < pin.tags.length; i++){
            if(possibleSimilarPin.tags.includes(pin.tags[i]) && possibleSimilarPin.id !== pin.id){
                return true;
            }
        }
    });

    return(
        <div className="pin">
            {
                (user.id || user.id === 0) && user.id === pin.creatorId ? //If user logged in and user created current pin
                <OpenPinEditor pin={pin} />
                :
                null
            }
            <PinImageAndInfo pin={pin} />
            <CommentsSection pinId={pin.id} comments={pin.comments} handleCommentCreate={handleCommentCreate} handleCommentDelete={handleCommentDelete} />
            <ProfileOpener profileId={pin.creatorId} />

            <b>Similar pins</b>
            <Pins pins={similarPins} />
        </div> 
    );  
}

export default Pin;