import PinOpener from "../Pin/Pin_opener/Pin_opener";
import RemovePinFromSaved from "./Remove_pin_from_saved";

function SavedPinOpener({ userId, pin, handlePinOpenerClick, handlePinRemoveFromSaved }){
    return(
        <div className="savedPin">
            <RemovePinFromSaved userId={userId} pinId={pin.id}  handlePinRemoveFromSaved={handlePinRemoveFromSaved} />
            <PinOpener pin={pin} handlePinOpenerClick={handlePinOpenerClick} />
        </div>
    );
}

export default SavedPinOpener;