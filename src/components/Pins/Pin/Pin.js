import { useLocation } from "react-router";
import { useSelector } from "react-redux/es/exports";

import { pins } from "../../../various_things/pins";

import PinInfo from "./Pin_info";
import Pins from "../Pins";
import OpenPinEditor from "./Open_pin_editor";

function Pin({ handleConfirmationWindowOpen }){
    const user = useSelector((state) => state.user);
    const location = useLocation();
    const pin = location.state.pin;

    console.log(user.id === pin.creatorId )

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
                (user.id || user.id === 0) && user.id === pin.creatorId ?
                <OpenPinEditor pin={pin} />
                :
                null
            }
            <img src={pin.imageSrc} alt={`${[pin.title]} image`} />
            <PinInfo pin={pin} />

            <b>Similar pins</b>
            <Pins pins={similarPins} />
        </div> 
    );  
}

export default Pin;