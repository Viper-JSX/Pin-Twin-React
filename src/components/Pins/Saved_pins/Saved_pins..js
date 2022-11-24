import { useSelector } from "react-redux/es/exports";
import PinOpener from "../Pin/Pin_opener/Pin_opener";

function SavedPins({ savedPins, handlePinOpenerClick, handlePinSave, handlePinRemoveFromSaved }){
    const userId = useSelector((state) => state.user.id);

    return(
        <div className={`savedPins ${savedPins.length === 0 ? "empty" : ""}`}>
            {
                savedPins.length > 0 ?
                savedPins.map((savedPin) => <PinOpener userId={userId} pin={savedPin} handlePinOpenerClick={handlePinOpenerClick} handlePinSave={handlePinSave} handlePinRemoveFromSaved={handlePinRemoveFromSaved} key={`saved_pin_${savedPin.id}`} />)
                :
                <b>No saved pins</b>
            }
        </div>
    );
}

export default SavedPins;