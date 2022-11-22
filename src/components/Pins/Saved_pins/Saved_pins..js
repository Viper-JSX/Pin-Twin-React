import { useSelector } from "react-redux/es/exports";
import PinOpener from "../Pin/Pin_opener/Pin_opener";

function SavedPins({ savedPins, handlePinOpenerClick, handlePinSave, handlePinRemoveFromSaved }){
    const userId = useSelector((state) => state.user.id);

    return(
        <div className="savedPins">
            {
                savedPins.map((savedPin) => <PinOpener userId={userId} pin={savedPin} handlePinOpenerClick={handlePinOpenerClick} handlePinSave={handlePinSave} handlePinRemoveFromSaved={handlePinRemoveFromSaved} key={`saved_pin_${savedPin.id}`} />)
            }
        </div>
    );
}

export default SavedPins;