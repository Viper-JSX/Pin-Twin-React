import { useSelector } from "react-redux";

import SavePin from "./Pin_opener/Save_pin";
import RemovePinFromSaved from "../Saved_pins/Remove_pin_from_saved";

function SavePinOrRemovePinFromSaved({ pin, handlePinSave, handlePinRemoveFromSaved }){
    const [ user, userSavedPins ] = useSelector((state) => [ state.user, state.user?.savedPins ]);

    return(
        <>
            {
                userSavedPins && userSavedPins.find((savedPin) => savedPin.id === pin.id) ? 
                <RemovePinFromSaved userId={user.id} pinId={pin.id} handlePinRemoveFromSaved={handlePinRemoveFromSaved} />
                :
                <SavePin pin={pin} handlePinSave={handlePinSave} />
            }
        </>
    );
}

export default SavePinOrRemovePinFromSaved;