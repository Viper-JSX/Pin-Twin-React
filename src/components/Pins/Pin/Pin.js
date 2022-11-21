import { Navigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

import { pins } from "../../../various_things/pins";

import Pins from "../Pins";
import OpenPinEditor from "./Open_pin_editor";
import PinImage from "./Pin_image";
import PinInfoAndComments from "./Pin_info_and_comments";
import PinContent from "./Pin_content";

function Pin({ handlePinSave, handlePinOpenerClick, handleCommentCreate, handleCommentDelete, handleLoginFormOpen }){
    const [ searchParams, setSearchParams ] = useSearchParams();

    const pinId = parseInt(searchParams.get("id"));
    const user = useSelector((state) => state.user);
    const pin = useSelector((state) => state.app.allPins?.find((pin) => pin.id === pinId)); //Getting pin based on param 'id'

    if(!pin){
        return(
            <Navigate to="/" />
        );
    }

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
                (user?.id || user?.id === 0) && user?.id === pin.creatorId ? //If user logged in and user created current pin
                <OpenPinEditor pin={pin} />
                :
                null
            }

            <PinContent pin={pin} handleCommentCreate={handleCommentCreate} handleCommentDelete={handleCommentDelete} handleLoginFormOpen={handleLoginFormOpen} />

            <b>Similar pins</b>
            <Pins pins={similarPins} handlePinOpenerClick={handlePinOpenerClick} handlePinSave={handlePinSave} />
        </div> 
    );  
}

export default Pin;