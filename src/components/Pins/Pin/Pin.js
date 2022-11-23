import { Navigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

import { pins } from "../../../various_things/pins";

import Pins from "../Pins";
import PinContent from "./Pin_content";
import { useEffect } from "react";

function Pin({ handlePinSave, handlePinRemoveFromSaved, handlePinOpenerClick, handleCommentCreate, handleCommentDelete, handleLoginFormOpen }){
    const [ searchParams, setSearchParams ] = useSearchParams();
    const pinId = parseInt(searchParams.get("id"));
    const pin = useSelector((state) => state.app.allPins?.find((pin) => pin.id === pinId)); //Getting pin based on param 'id'
    const similarPins = []; 

    useEffect(() => {
        console.log("render");
        window.scrollTo(0, 0);
    }, [pinId]);

    if(!pin){
        return(
            <Navigate to="/" />
        );
    }
    
    for(let i = 0; i < pins.length; i++){
        for(let j = 0; j < pin.tags.length; j++){
            if(pins[i].tags.includes(pin.tags[j]) && pins[i].id !== pin.id){
                similarPins.push(pins[i]);
                break;
            }
        }

        if(similarPins.length >= 10){
            break;
        }
    }

    return(
        <div className="pin">
            <PinContent pin={pin} handlePinSave={handlePinSave} handlePinRemoveFromSaved={handlePinRemoveFromSaved} handleCommentCreate={handleCommentCreate} handleCommentDelete={handleCommentDelete} handleLoginFormOpen={handleLoginFormOpen} />

            <b>Similar pins</b>
            <Pins pins={similarPins} handlePinOpenerClick={handlePinOpenerClick} handlePinSave={handlePinSave} />
        </div> 
    );  
}

export default Pin;