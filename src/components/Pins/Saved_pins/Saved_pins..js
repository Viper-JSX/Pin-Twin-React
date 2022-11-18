import { useSelector } from "react-redux/es/exports";

import SavedPinOpener from "./Saved_pin_opener";

function SavedPins({ savedPins, handlePinRemoveFromSaved }){
    const userId = useSelector((state) => state.user.id);

    return(
        <div className="savedPins">
            {
                savedPins.map((savedPin) => <SavedPinOpener userId={userId} pin={savedPin} handlePinRemoveFromSaved={handlePinRemoveFromSaved} key={`saved_pin_${savedPin.id}`} />)
            }
        </div>
    );
}

export default SavedPins;