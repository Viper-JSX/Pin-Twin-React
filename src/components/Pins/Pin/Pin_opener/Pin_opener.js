import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SavePinOrRemovePinFromSaved from '../Save_pin_or_remove_pin_from_saved';
import PinOpenerPannel from "./Pin_opener_pannel";


function PinOpener({ pin, handlePinOpenerClick, handlePinSave, handlePinRemoveFromSaved }){
    const userSavedPins = useSelector((state) => state.user?.savedPins)

    return(
        <div className="pinOpener">
            {
                <SavePinOrRemovePinFromSaved pin={pin} handlePinSave={handlePinSave} handlePinRemoveFromSaved={handlePinRemoveFromSaved}  />
            }
            <PinOpenerPannel pin={pin} handlePinOpenerClick={handlePinOpenerClick} />
        </div>

    );
}

export default PinOpener;